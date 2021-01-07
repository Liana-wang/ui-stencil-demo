import { App, Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';

const ael = (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(eventName.toLowerCase(), cb, opts);
const rel = (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(eventName.toLowerCase(), cb, opts);

export const AiVue3: Plugin = {

    async install(_app: App) {
        if (typeof (window as any) !== 'undefined') {
            await applyPolyfills();
            await defineCustomElements(window, {
                ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
                ael,
                rel
            } as any);
        }
    }
};
