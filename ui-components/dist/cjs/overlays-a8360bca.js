'use strict';

const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
const addEventListener = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};

let lastId = 0;
const activeAnimations = new WeakMap();
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
const popoverController = /*@__PURE__*/ createController('ai-popover');
const prepareOverlay = (el) => {
  const overlayIndex = lastId++;
  el.overlayIndex = overlayIndex;
  if (!el.hasAttribute('id')) {
    el.id = `ai-overlay-${overlayIndex}`;
  }
};
const createOverlay = (tagName, opts) => {
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
const dismissOverlay = (doc, data, role, overlayTag, id) => {
  const overlay = getOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject('overlay does not exist');
  }
  return overlay.dismiss(data, role);
};
const getOverlays = (doc, selector) => {
  return Array.from(doc.querySelectorAll(selector))
    .filter(c => c.overlayIndex > 0);
};
const getOverlay = (doc, overlayTag, id) => {
  const overlays = getOverlays(doc, overlayTag);
  return (id === undefined)
    ? overlays[overlays.length - 1]
    : overlays.find(o => o.id === id);
};
/**
 * 展开
 */
const present = async (overlay, enterAnimation, opts) => {
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
const dismiss = async (overlay, data, role, leaveAnimation, opts) => {
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
  // Make overlay visible in case it's hidden
  baseEl.classList.remove('overlay-hidden');
  const aniRoot = baseEl.shadowRoot || overlay.el;
  const animation = animationBuilder(aniRoot, opts);
  if (overlay.keyboardClose) {
    animation.beforeAddWrite(() => {
      const activeElement = baseEl.ownerDocument.activeElement;
      if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
        activeElement.blur();
      }
    });
  }
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation]);
  await animation.play();
  return true;
};
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => resolve = r);
  onceEvent(element, eventName, (event) => { resolve(event.detail); });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    removeEventListener(element, eventName, handler);
    callback(ev);
  };
  addEventListener(element, eventName, handler);
};
const getAppRoot = (doc) => {
  return doc.querySelector('ai-app') || doc.body;
};

exports.dismiss = dismiss;
exports.eventMethod = eventMethod;
exports.popoverController = popoverController;
exports.prepareOverlay = prepareOverlay;
exports.present = present;
exports.raf = raf;
