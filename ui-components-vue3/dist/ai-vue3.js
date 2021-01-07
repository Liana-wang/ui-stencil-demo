import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
const ael = (el, eventName, cb, opts) => el.addEventListener(eventName.toLowerCase(), cb, opts);
const rel = (el, eventName, cb, opts) => el.removeEventListener(eventName.toLowerCase(), cb, opts);
export const AiVue3 = {
    async install(_app) {
        if (typeof window !== 'undefined') {
            await applyPolyfills();
            await defineCustomElements(window, {
                ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
                ael,
                rel
            });
        }
    }
};
