'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var vue = require('vue');
var loader = require('@ai.s/ui-components/loader');

var UPDATE_VALUE_EVENT = 'update:modelValue';
var MODEL_VALUE = 'modelValue';
var ROUTER_LINK_VALUE = 'routerLink';
var NAV_MANAGER = 'navManager';
var ROUTER_PROP_REFIX = 'router';
var getComponentClasses = function (classes) {
    var _a;
    return ((_a = classes) === null || _a === void 0 ? void 0 : _a.split(' ')) || [];
};
var getElementClasses = function (ref, componentClasses, defaultClasses) {
    var _a;
    if (defaultClasses === void 0) { defaultClasses = []; }
    return tslib.__spreadArray(tslib.__spreadArray([], Array.from(((_a = ref.value) === null || _a === void 0 ? void 0 : _a.classList) || [])), defaultClasses).filter(function (c, i, self) { return !componentClasses.has(c) && self.indexOf(c) === i; });
};
/**
* Create a callback to define a Vue component wrapper around a Web Component.
*
* @prop name - The component tag name (i.e. `ion-button`)
* @prop componentProps - An array of properties on the
* component. These usually match up with the @Prop definitions
* in each component's TSX file.
* @prop componentOptions - An object that defines additional
* options for the component such as router or v-model
* integrations.
*/
var defineContainer = function (name, componentProps, componentOptions) {
    if (componentProps === void 0) { componentProps = []; }
    if (componentOptions === void 0) { componentOptions = {}; }
    var modelProp = componentOptions.modelProp, modelUpdateEvent = componentOptions.modelUpdateEvent;
    /**
    * Create a Vue component wrapper around a Web Component.
    * Note: The `props` here are not all properties on a component.
    * They refer to whatever properties are set on an instance of a component.
    */
    var Container = vue.defineComponent(function (props, _a) {
        var _b;
        var attrs = _a.attrs, slots = _a.slots, emit = _a.emit;
        var modelPropValue = props[modelProp];
        var containerRef = vue.ref();
        var classes = new Set(getComponentClasses(attrs.class));
        var onVnodeBeforeMount = function (vnode) {
            // Add a listener to tell Vue to update the v-model
            if (vnode.el) {
                vnode.el.addEventListener(modelUpdateEvent.toLowerCase(), function (e) {
                    modelPropValue = (e === null || e === void 0 ? void 0 : e.target)[modelProp];
                    emit(UPDATE_VALUE_EVENT, modelPropValue);
                    /**
                     * We need to emit the change event here
                     * rather than on the web component to ensure
                     * that any v-model bindings have been updated.
                     * Otherwise, the developer will listen on the
                     * native web component, but the v-model will
                     * not have been updated yet.
                     */
                    emit(modelUpdateEvent, e);
                    e.stopImmediatePropagation();
                });
            }
        };
        var currentInstance = vue.getCurrentInstance();
        var hasRouter = (_b = currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.appContext) === null || _b === void 0 ? void 0 : _b.provides[NAV_MANAGER];
        var navManager = hasRouter ? vue.inject(NAV_MANAGER) : undefined;
        var handleRouterLink = function (ev) {
            var routerLink = props.routerLink;
            if (!routerLink)
                return;
            var routerProps = Object.keys(props).filter(function (p) { return p.startsWith(ROUTER_PROP_REFIX); });
            if (navManager !== undefined) {
                var navigationPayload_1 = { event: ev };
                routerProps.forEach(function (prop) {
                    navigationPayload_1[prop] = props[prop];
                });
                navManager.navigate(navigationPayload_1);
            }
            else {
                console.warn('Tried to navigate, but no router was found. Make sure you have mounted Vue Router.');
            }
        };
        return function () {
            var _a;
            getComponentClasses(attrs.class).forEach(function (value) {
                classes.add(value);
            });
            var oldClick = props.onClick;
            var handleClick = function (ev) {
                if (oldClick !== undefined) {
                    oldClick(ev);
                }
                if (!ev.defaultPrevented) {
                    handleRouterLink(ev);
                }
            };
            var propsToAdd = tslib.__assign(tslib.__assign({}, props), { ref: containerRef, class: getElementClasses(containerRef, classes), onClick: handleClick, onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined });
            if (modelProp) {
                propsToAdd = tslib.__assign(tslib.__assign({}, propsToAdd), (_a = {}, _a[modelProp] = props.hasOwnProperty('modelValue') ? props.modelValue : modelPropValue, _a));
            }
            return vue.h(name, propsToAdd, slots.default && slots.default());
        };
    });
    Container.displayName = name;
    Container.props = tslib.__spreadArray(tslib.__spreadArray([], componentProps), [ROUTER_LINK_VALUE]);
    if (modelProp) {
        Container.props.push(MODEL_VALUE);
        Container.emits = [UPDATE_VALUE_EVENT, modelUpdateEvent];
    }
    return Container;
};

/* eslint-disable */
loader.applyPolyfills().then(function () { return loader.defineCustomElements(); });
var AiBackdrop = /*@__PURE__*/ defineContainer('ai-backdrop', [
    'visible',
    'tappable',
    'stopPropagation',
    'aiBackdropTap'
]);
var AiButton = /*@__PURE__*/ defineContainer('ai-button', [
    'type',
    'htmlType',
    'size',
    'danger',
    'ghost',
    'block',
    'shap',
    'href',
    'target',
    'disabled',
    'aiClick'
]);
var AiControl = /*@__PURE__*/ defineContainer('ai-control');
var AiInput = /*@__PURE__*/ defineContainer('ai-input', [
    'allowClear',
    'bordered',
    'defaultValue',
    'disabled',
    'maxLength',
    'hasPrefix',
    'hasSuffix',
    'placeholder',
    'readonly',
    'value',
    'aiChange',
    'aiPressEnter',
    'aiInput',
    'aiBlur',
    'aiFocus'
], {
    "modelProp": "value",
    "modelUpdateEvent": "aiChange"
});
var AiPopover = /*@__PURE__*/ defineContainer('ai-popover', [
    'overlayIndex',
    'component',
    'componentProps',
    'backdropDismiss',
    'showBackdrop',
    'event',
    'aiPopoverDidPresent',
    'aiPopoverWillPresent',
    'aiPopoverWillDismiss',
    'aiPopoverDidDismiss'
]);
var AiSelect = /*@__PURE__*/ defineContainer('ai-select', [
    'disabled',
    'placeholder',
    'selected',
    'compareWith',
    'aiChange',
    'aiCancel',
    'aiFocus',
    'aiBlur',
    'aiStyle'
]);
var AiSelectOption = /*@__PURE__*/ defineContainer('ai-select-option', [
    'disabled',
    'option'
]);
var AiSelectPopover = /*@__PURE__*/ defineContainer('ai-select-popover', [
    'options'
]);
var AiStringfy = /*@__PURE__*/ defineContainer('ai-stringfy', [
    'data'
]);

var ael = function (el, eventName, cb, opts) { return el.addEventListener(eventName.toLowerCase(), cb, opts); };
var rel = function (el, eventName, cb, opts) { return el.removeEventListener(eventName.toLowerCase(), cb, opts); };
var AiVue3 = {
    install: function (_app, node) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof window !== 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, loader.applyPolyfills()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, loader.defineCustomElements(window, {
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

exports.AiBackdrop = AiBackdrop;
exports.AiButton = AiButton;
exports.AiControl = AiControl;
exports.AiInput = AiInput;
exports.AiPopover = AiPopover;
exports.AiSelect = AiSelect;
exports.AiSelectOption = AiSelectOption;
exports.AiSelectPopover = AiSelectPopover;
exports.AiStringfy = AiStringfy;
exports.AiVue3 = AiVue3;
