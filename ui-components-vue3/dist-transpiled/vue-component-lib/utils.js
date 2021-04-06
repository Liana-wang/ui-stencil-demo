import { __assign, __spreadArray } from "tslib";
// @ts-nocheck
import { defineComponent, getCurrentInstance, h, inject, ref } from 'vue';
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
    return __spreadArray(__spreadArray([], Array.from(((_a = ref.value) === null || _a === void 0 ? void 0 : _a.classList) || [])), defaultClasses).filter(function (c, i, self) { return !componentClasses.has(c) && self.indexOf(c) === i; });
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
export var defineContainer = function (name, componentProps, componentOptions) {
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
            var propsToAdd = __assign(__assign({}, props), { ref: containerRef, class: getElementClasses(containerRef, classes), onClick: handleClick, onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined });
            if (modelProp) {
                propsToAdd = __assign(__assign({}, propsToAdd), (_a = {}, _a[modelProp] = props.hasOwnProperty('modelValue') ? props.modelValue : modelPropValue, _a));
            }
            return h(name, propsToAdd, slots.default && slots.default());
        };
    });
    Container.displayName = name;
    Container.props = __spreadArray(__spreadArray([], componentProps), [ROUTER_LINK_VALUE]);
    if (modelProp) {
        Container.props.push(MODEL_VALUE);
        Container.emits = [UPDATE_VALUE_EVENT, modelUpdateEvent];
    }
    return Container;
};
//# sourceMappingURL=utils.js.map