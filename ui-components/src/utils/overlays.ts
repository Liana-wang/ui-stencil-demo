import { HTMLAiOverlayElement } from './overlays-interface'
import { removeEventListener, addEventListener } from './helper'

let lastId = 0;

export const activeAnimations = new WeakMap<any, Animation[]>();

const createController = (tagName: string) => {
    return {
        create(options): Promise<any> {
            return createOverlay(tagName, options)
        },
        dismiss(data?: any, role?: string, id?: string) {
            return dismissOverlay(document, data, role, tagName, id)
        },
        async getTop(): Promise<any> {
            return getOverlay(document, tagName)
        }
    };
};

export const popoverController = /*@__PURE__*/createController('ai-popover');

export const prepareOverlay = <T extends HTMLAiOverlayElement>(el: T) => {
    const overlayIndex = lastId++

    el.overlayIndex = overlayIndex

    if (!el.hasAttribute('id')) {
        el.id = `ai-overlay-${overlayIndex}`
    }
};

export const createOverlay = <T extends HTMLAiOverlayElement>(tagName: string, opts: object | undefined): Promise<T> => {
    /* tslint:disable-next-line */
    if (typeof customElements !== 'undefined') {
        return customElements.whenDefined(tagName).then(() => {
            const element = document.createElement(tagName) as HTMLAiOverlayElement

            element.classList.add('overlay-hidden')

            // convert the passed in overlay options into props
            // that get passed down into the new overlay
            Object.assign(element, opts);

            // append the overlay element to the document body
            getAppRoot(document).appendChild(element)

            return element.componentOnReady() as any
        });
    }
    return Promise.resolve() as any;
};


export const dismissOverlay = (doc: Document, data: any, role: string | undefined, overlayTag: string, id?: string): Promise<boolean> => {
    const overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
};

export const getOverlays = (doc: Document, selector?: string): HTMLAiOverlayElement[] => {
    return (Array.from(doc.querySelectorAll(selector)) as HTMLAiOverlayElement[])
        .filter(c => c.overlayIndex > 0);
};

export const getOverlay = (doc: Document, overlayTag?: string, id?: string): any => {
    const overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(o => o.id === id);
};

/**
 * 展开
 */
export const present = async (
    overlay: any,
    enterAnimation: any,
    opts?: any,
) => {
    if (overlay.presented) {
        return
    }

    overlay.presented = true

    overlay.willPresent.emit()

    const completed = await overlayAnimation(overlay, enterAnimation, overlay.el, opts);

    if (completed) {
        overlay.didPresent.emit();
    }

    overlay.didPresent.emit()
};

/**
 * 弹出层关闭
 */
export const dismiss = async (
    overlay: any,
    data: any | undefined,
    role: string | undefined,
    leaveAnimation: any,
    opts?: any,
): Promise<boolean> => {
    if (!overlay.presented) {
        return false;
    }
    overlay.presented = false;

    try {
        overlay.el.style.setProperty('pointer-events', 'none')

        overlay.willDismiss.emit({ data, role })

        await overlayAnimation(overlay, leaveAnimation, overlay.el, opts);

        overlay.didDismiss.emit({ data, role })

        activeAnimations.delete(overlay)

    } catch (err) {
        console.error(err)
    }

    overlay.el.remove()

    return true
};

const overlayAnimation = async (
    overlay: any,
    animationBuilder: any,
    baseEl: any,
    opts: any
): Promise<boolean> => {
    baseEl.classList.remove('overlay-hidden')

    const aniRoot = baseEl.shadowRoot || overlay.el
    const animation = animationBuilder(aniRoot, opts)

    const activeAni = activeAnimations.get(overlay) || []
    activeAnimations.set(overlay, [...activeAni, animation])

    await animation.play()

    return true
};

export const eventMethod = <T>(element: HTMLElement, eventName: string): Promise<T> => {
    let resolve: (detail: T) => void

    const promise = new Promise<T>(r => resolve = r)

    onceEvent(element, eventName, (event: any) => {resolve(event.detail)})

    return promise
}

export const onceEvent = (element: HTMLElement, eventName: string, callback: (ev: Event) => void) => {
  const handler = (ev: Event) => {
            removeEventListener(element, eventName, handler)
    callback(ev)
  }
  addEventListener(element, eventName, handler)
}

const getAppRoot = (doc: Document) => {
    return doc.querySelector('ai-app') || doc.body;
};