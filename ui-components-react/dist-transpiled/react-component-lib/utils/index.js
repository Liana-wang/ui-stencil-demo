import { __assign } from "tslib";
import React from 'react';
// The comma in the type is to trick typescript because it things a single generic in a tsx file is jsx
export var mergeRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        return refs.forEach(function (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref != null) {
                // This is typed as readonly so we need to allow for override
                ref.current = value;
            }
        });
    };
};
export var createForwardRef = function (ReactComponent, displayName) {
    var forwardRef = function (props, ref) {
        return React.createElement(ReactComponent, __assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};
export * from './attachProps';
export * from './case';
//# sourceMappingURL=index.js.map