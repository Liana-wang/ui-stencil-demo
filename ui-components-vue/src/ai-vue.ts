import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';

const ael = (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(eventName.toLowerCase(), cb, opts);
const rel = (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(eventName.toLowerCase(), cb, opts);

export const AiVue = {
    install: async function (_app: any) {
        if (typeof (window as any) !== 'undefined') {
            await applyPolyfills();
            console.log(1111)
            await defineCustomElements(window, {
                exclude: ['ion-tabs'],
                ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
                ael,
                rel
            } as any);
            console.log(_app)
        }
    }
};
