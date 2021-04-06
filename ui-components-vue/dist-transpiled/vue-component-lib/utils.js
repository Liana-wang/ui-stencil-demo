import { __assign } from "tslib";
export var createCommonRender = function (tagName, eventNames) {
    if (eventNames === void 0) { eventNames = []; }
    return function (createElement) {
        var vueElement = this;
        var allListeners = eventNames.reduce(function (listeners, eventName) {
            var _a;
            return __assign(__assign({}, listeners), (_a = {}, _a[eventName] = function (event) {
                var _a;
                var emittedValue = event.detail;
                if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.value) {
                    emittedValue = event.detail.value;
                }
                vueElement.$emit(eventName, emittedValue);
            }, _a));
        }, vueElement.$listeners);
        return createElement(tagName, {
            ref: 'wc',
            domProps: vueElement.$props,
            on: allListeners,
        }, [vueElement.$slots.default]);
    };
};
export var createCommonMethod = function (methodName) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.$refs.wc)[methodName].apply(_a, args);
    };
};
//# sourceMappingURL=utils.js.map