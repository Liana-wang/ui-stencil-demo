declare const __zone_symbol__requestAnimationFrame: any;

export const getElementRoot = (el: HTMLElement, fallback: HTMLElement = el) => {
    return el.shadowRoot || fallback;
};

export const raf = (h: any) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};

export const removeEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
    return el.removeEventListener(eventName, callback, opts);
};

export const addEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
    return el.addEventListener(eventName, callback, opts);
};

export const renderHiddenInput = (always: boolean, container: HTMLElement, value: string | undefined | null, disabled: boolean) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input') as HTMLInputElement | null;
        if (!input) {
            input = container.ownerDocument!.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.value = value || '';
    }
};

export const hasShadowDom = (el: HTMLElement) => {
    return !!el.shadowRoot && !!(el as any).attachShadow;
};