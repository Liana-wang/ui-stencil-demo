export const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
export const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
export const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
export const addEventListener = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};
export const renderHiddenInput = (always, container, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.value = value || '';
  }
};
export const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
