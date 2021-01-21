import { removeEventListener, addEventListener } from './helper';
let lastId = 0;
export const activeAnimations = new WeakMap();
const createController = (tagName) => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    async getTop() {
      return getOverlay(document, tagName);
    }
  };
};
export const popoverController = /*@__PURE__*/ createController('ai-popover');
export const prepareOverlay = (el) => {
  const overlayIndex = lastId++;
  el.overlayIndex = overlayIndex;
  if (!el.hasAttribute('id')) {
    el.id = `ai-overlay-${overlayIndex}`;
  }
};
export const createOverlay = (tagName, opts) => {
  /* tslint:disable-next-line */
  if (typeof customElements !== 'undefined') {
    return customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add('overlay-hidden');
      // convert the passed in overlay options into props
      // that get passed down into the new overlay
      Object.assign(element, opts);
      // append the overlay element to the document body
      getAppRoot(document).appendChild(element);
      return element.componentOnReady();
    });
  }
  return Promise.resolve();
};
export const dismissOverlay = (doc, data, role, overlayTag, id) => {
  const overlay = getOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject('overlay does not exist');
  }
  return overlay.dismiss(data, role);
};
export const getOverlays = (doc, selector) => {
  return Array.from(doc.querySelectorAll(selector))
    .filter(c => c.overlayIndex > 0);
};
export const getOverlay = (doc, overlayTag, id) => {
  const overlays = getOverlays(doc, overlayTag);
  return (id === undefined)
    ? overlays[overlays.length - 1]
    : overlays.find(o => o.id === id);
};
/**
 * 展开
 */
export const present = async (overlay, enterAnimation, opts) => {
  if (overlay.presented) {
    return;
  }
  overlay.presented = true;
  overlay.willPresent.emit();
  const completed = await overlayAnimation(overlay, enterAnimation, overlay.el, opts);
  if (completed) {
    overlay.didPresent.emit();
  }
  overlay.didPresent.emit();
};
/**
 * 弹出层关闭
 */
export const dismiss = async (overlay, data, role, leaveAnimation, opts) => {
  if (!overlay.presented) {
    return false;
  }
  overlay.presented = false;
  try {
    overlay.el.style.setProperty('pointer-events', 'none');
    overlay.willDismiss.emit({ data, role });
    await overlayAnimation(overlay, leaveAnimation, overlay.el, opts);
    overlay.didDismiss.emit({ data, role });
    activeAnimations.delete(overlay);
  }
  catch (err) {
    console.error(err);
  }
  overlay.el.remove();
  return true;
};
const overlayAnimation = async (overlay, animationBuilder, baseEl, opts) => {
  baseEl.classList.remove('overlay-hidden');
  const aniRoot = baseEl.shadowRoot || overlay.el;
  const animation = animationBuilder(aniRoot, opts);
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation]);
  await animation.play();
  return true;
};
export const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => resolve = r);
  onceEvent(element, eventName, (event) => { resolve(event.detail); });
  return promise;
};
export const onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    removeEventListener(element, eventName, handler);
    callback(ev);
  };
  addEventListener(element, eventName, handler);
};
const getAppRoot = (doc) => {
  return doc.querySelector('ai-app') || doc.body;
};
