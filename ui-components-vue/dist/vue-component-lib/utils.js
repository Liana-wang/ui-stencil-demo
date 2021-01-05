export const createCommonRender = (tagName, eventNames = []) => function (createElement) {
    const vueElement = this;
    const allListeners = eventNames.reduce((listeners, eventName) => {
        return Object.assign(Object.assign({}, listeners), { [eventName]: (event) => {
                var _a;
                let emittedValue = event.detail;
                if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.value) {
                    emittedValue = event.detail.value;
                }
                vueElement.$emit(eventName, emittedValue);
            } });
    }, vueElement.$listeners);
    return createElement(tagName, {
        ref: 'wc',
        domProps: vueElement.$props,
        on: allListeners,
    }, [vueElement.$slots.default]);
};
export const createCommonMethod = (methodName) => function (...args) {
    this.$refs.wc[methodName](...args);
};
//# sourceMappingURL=utils.js.map