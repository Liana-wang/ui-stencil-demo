import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { attachProps, createForwardRef, dashToPascalCase, isCoveredByReact, mergeRefs, camelToDashCase, } from './utils';
export var createReactComponent = function (tagName, ReactComponentContext, manipulatePropsFunction) {
    var displayName = dashToPascalCase(tagName);
    var ReactComponent = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.setComponentElRef = function (element) {
                _this.componentEl = element;
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.componentDidUpdate(this.props);
        };
        class_1.prototype.componentDidUpdate = function (prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        };
        class_1.prototype.render = function () {
            var _a = this.props, children = _a.children, forwardedRef = _a.forwardedRef, style = _a.style, className = _a.className, ref = _a.ref, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            var propsToPass = Object.keys(cProps).reduce(function (acc, name) {
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    var eventName = name.substring(2).toLowerCase();
                    if (typeof document !== 'undefined' && isCoveredByReact(eventName, document)) {
                        acc[name] = cProps[name];
                    }
                }
                else if (['string', 'boolean', 'number'].includes(typeof cProps[name])) {
                    acc[camelToDashCase(name)] = cProps[name];
                }
                return acc;
            }, {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            var newProps = __assign(__assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style: style });
            return React.createElement(tagName, newProps, children);
        };
        Object.defineProperty(class_1, "displayName", {
            get: function () {
                return displayName;
            },
            enumerable: false,
            configurable: true
        });
        return class_1;
    }(React.Component));
    // If context was passed to createReactComponent then conditionally add it to the Component Class
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};
//# sourceMappingURL=createComponent.js.map