var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
const ael = (el, eventName, cb, opts) => el.addEventListener(eventName.toLowerCase(), cb, opts);
const rel = (el, eventName, cb, opts) => el.removeEventListener(eventName.toLowerCase(), cb, opts);
export const AiVue = {
    install: function (_app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window !== 'undefined') {
                yield applyPolyfills();
                console.log(1111);
                yield defineCustomElements(window, {
                    exclude: ['ion-tabs'],
                    ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
                    ael,
                    rel
                });
                console.log(_app);
            }
        });
    }
};
//# sourceMappingURL=ai-vue.js.map