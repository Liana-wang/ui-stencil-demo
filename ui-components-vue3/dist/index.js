import { defineComponent, ref, getCurrentInstance, inject, h } from 'vue';
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
    return __spreadArrays(Array.from(((_a = ref.value) === null || _a === void 0 ? void 0 : _a.classList) || []), defaultClasses).filter(function (c, i, self) { return !componentClasses.has(c) && self.indexOf(c) === i; });
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
    var Container = defineComponent(function (props, _a) {
        var _b;
        var attrs = _a.attrs, slots = _a.slots, emit = _a.emit;
        var modelPropValue = props[modelProp];
        var containerRef = ref();
        var classes = new Set(getComponentClasses(attrs["class"]));
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
        var currentInstance = getCurrentInstance();
        var hasRouter = (_b = currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.appContext) === null || _b === void 0 ? void 0 : _b.provides[NAV_MANAGER];
        var navManager = hasRouter ? inject(NAV_MANAGER) : undefined;
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
            getComponentClasses(attrs["class"]).forEach(function (value) {
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
            var propsToAdd = __assign(__assign({}, props), { ref: containerRef, "class": getElementClasses(containerRef, classes), onClick: handleClick, onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined });
            if (modelProp) {
                propsToAdd = __assign(__assign({}, propsToAdd), (_a = {}, _a[modelProp] = props.hasOwnProperty('modelValue') ? props.modelValue : modelPropValue, _a));
            }
            return h(name, propsToAdd, slots["default"] && slots["default"]());
        };
    });
    Container.displayName = name;
    Container.props = __spreadArrays(componentProps, [ROUTER_LINK_VALUE]);
    if (modelProp) {
        Container.props.push(MODEL_VALUE);
        Container.emits = [UPDATE_VALUE_EVENT, modelUpdateEvent];
    }
    return Container;
};

/* eslint-disable */
applyPolyfills().then(function () { return defineCustomElements(); });
var AiBackdrop = /*@__PURE__*/ defineContainer('ai-backdrop', [
    'visible',
    'tappable',
    'stopPropagation',
    'aiBackdropTap'
]);
var AiButton = /*@__PURE__*/ defineContainer('ai-button', [
    'text',
    'disabled',
    'aiClick'
]);
var AiControl = /*@__PURE__*/ defineContainer('ai-control');
var AiInput = /*@__PURE__*/ defineContainer('ai-input', [
    'disabled',
    'placeholder',
    'readonly',
    'type',
    'value',
    'aiChange',
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

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ael = function (el, eventName, cb, opts) { return el.addEventListener(eventName.toLowerCase(), cb, opts); };
var rel = function (el, eventName, cb, opts) { return el.removeEventListener(eventName.toLowerCase(), cb, opts); };
var AiVue3 = {
    install: function (_app) {
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
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, AiStringfy, AiVue3 };
//# sourceMappingURL=index.js.map
