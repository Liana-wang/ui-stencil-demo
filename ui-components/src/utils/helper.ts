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
    if (typeof (window as any) !== 'undefined') {
        const win = window as any;
        const config = win && win.Ionic && win.Ionic.config;
        if (config) {
            const rel = config.get('_rel');
            if (rel) {
                return rel(el, eventName, callback, opts);
            } else if (config._rel) {
                return config._rel(el, eventName, callback, opts);
            }
        }
    }

    return el.removeEventListener(eventName, callback, opts);
};

export const addEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
    if (typeof (window as any) !== 'undefined') {
        const win = window as any;
        const config = win && win.Ionic && win.Ionic.config;
        if (config) {
            const ael = config.get('_ael');
            if (ael) {
                return ael(el, eventName, callback, opts);
            } else if (config._ael) {
                return config._ael(el, eventName, callback, opts);
            }
        }
    }

    return el.addEventListener(eventName, callback, opts);
};