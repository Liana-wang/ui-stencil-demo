import { __awaiter, __generator } from "tslib";
import { applyPolyfills, defineCustomElements } from '@ai.s/ui-components/loader';
var ael = function (el, eventName, cb, opts) { return el.addEventListener(eventName.toLowerCase(), cb, opts); };
var rel = function (el, eventName, cb, opts) { return el.removeEventListener(eventName.toLowerCase(), cb, opts); };
export var AiVue3 = {
    install: function (_app, node) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof window !== 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, applyPolyfills()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, defineCustomElements(window, {
                                ce: function (eventName, opts) { return new CustomEvent(eventName.toLowerCase(), opts); },
                                ael: ael,
                                rel: rel
                            })];
                    case 2:
                        _a.sent();
                        _app.mount(node);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};
//# sourceMappingURL=ai-vue3.js.map