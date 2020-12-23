import { ComponentRef } from '../interface'

export const attachComponent = async (
    container: Element,
    component: ComponentRef,
    cssClasses?: string[],
    componentProps?: { [key: string]: any }
): Promise<HTMLElement> => {
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }

    const el: any = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;

    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }

    container.appendChild(el);

    if (el.componentOnReady) {
        await el.componentOnReady();
    }

    return el;
};

export const detachComponent = (element: HTMLElement | undefined) => {
    if (element) {
        element.remove()
    }

    return Promise.resolve()
};