'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var loader = require('@ai/ui-components/loader');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var dashToPascalCase = function dashToPascalCase(str) {
  return str.toLowerCase().split('-').map(function (segment) {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).join('');
};
var camelToDashCase = function camelToDashCase(str) {
  return str.replace(/([A-Z])/g, function (m) {
    return "-" + m[0].toLowerCase();
  });
};

var attachProps = function attachProps(node, newProps, oldProps) {
  if (oldProps === void 0) {
    oldProps = {};
  } // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first


  if (node instanceof Element) {
    // add any classes in className to the class list
    var className = getClassName(node.classList, newProps, oldProps);

    if (className !== '') {
      node.className = className;
    }

    Object.keys(newProps).forEach(function (name) {
      if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
        return;
      }

      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        var eventName = name.substring(2);
        var eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (typeof document !== 'undefined' && !isCoveredByReact(eventNameLc, document)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        var propType = typeof newProps[name];

        if (propType === 'string') {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        } else {
          node[name] = newProps[name];
        }
      }
    });
  }
};
var getClassName = function getClassName(classList, newProps, oldProps) {
  var newClassProp = newProps.className || newProps.class;
  var oldClassProp = oldProps.className || oldProps.class; // map the classes to Maps for performance

  var currentClasses = arrayToMap(classList);
  var incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
  var oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
  var finalClassNames = []; // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added

  currentClasses.forEach(function (currentClass) {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach(function (s) {
    return finalClassNames.push(s);
  });
  return finalClassNames.join(' ');
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */

var isCoveredByReact = function isCoveredByReact(eventNameSuffix, doc) {
  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in doc);

  if (!isSupported) {
    var element = doc.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  return isSupported;
};
var syncEvent = function syncEvent(node, eventName, newEventHandler) {
  var eventStore = node.__events || (node.__events = {});
  var oldEventHandler = eventStore[eventName]; // Remove old listener so they don't double up.

  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  } // Bind new listener.


  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};

var arrayToMap = function arrayToMap(arr) {
  var map = new Map();
  arr.forEach(function (s) {
    return map.set(s, s);
  });
  return map;
};

var mergeRefs = function mergeRefs() {
  var refs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }

  return function (value) {
    return refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        // This is typed as readonly so we need to allow for override
        ref.current = value;
      }
    });
  };
};
var createForwardRef = function createForwardRef(ReactComponent, displayName) {
  var forwardRef = function forwardRef(props, ref) {
    return React__default['default'].createElement(ReactComponent, __assign({}, props, {
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  return React__default['default'].forwardRef(forwardRef);
};

var createReactComponent = function createReactComponent(tagName, ReactComponentContext, manipulatePropsFunction) {
  var displayName = dashToPascalCase(tagName);

  var ReactComponent =
  /** @class */
  function (_super) {
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
      var _a = this.props,
          children = _a.children,
          forwardedRef = _a.forwardedRef,
          style = _a.style;
          _a.className;
          _a.ref;
          var cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);

      var propsToPass = Object.keys(cProps).reduce(function (acc, name) {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          var eventName = name.substring(2).toLowerCase();

          if (typeof document !== 'undefined' && isCoveredByReact(eventName, document)) {
            acc[name] = cProps[name];
          }
        } else if (typeof cProps[name] === 'string') {
          acc[camelToDashCase(name)] = cProps[name];
        }

        return acc;
      }, {});

      if (manipulatePropsFunction) {
        propsToPass = manipulatePropsFunction(this.props, propsToPass);
      }

      var newProps = __assign(__assign({}, propsToPass), {
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style: style
      });

      return React__default['default'].createElement(tagName, newProps, children);
    };

    Object.defineProperty(class_1, "displayName", {
      get: function get() {
        return displayName;
      },
      enumerable: false,
      configurable: true
    });
    return class_1;
  }(React__default['default'].Component); // If context was passed to createReactComponent then conditionally add it to the Component Class


  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }

  return createForwardRef(ReactComponent, displayName);
};

/* eslint-disable */
loader.applyPolyfills().then(function () {
  return loader.defineCustomElements();
});
var AiBackdrop = /*@__PURE__*/createReactComponent('ai-backdrop');
var AiButton = /*@__PURE__*/createReactComponent('ai-button');
var AiControl = /*@__PURE__*/createReactComponent('ai-control');
var AiInput = /*@__PURE__*/createReactComponent('ai-input');
var AiPopover = /*@__PURE__*/createReactComponent('ai-popover');
var AiSelect = /*@__PURE__*/createReactComponent('ai-select');
var AiSelectOption = /*@__PURE__*/createReactComponent('ai-select-option');
var AiSelectPopover = /*@__PURE__*/createReactComponent('ai-select-popover');
var AiStringfy = /*@__PURE__*/createReactComponent('ai-stringfy');

exports.AiBackdrop = AiBackdrop;
exports.AiButton = AiButton;
exports.AiControl = AiControl;
exports.AiInput = AiInput;
exports.AiPopover = AiPopover;
exports.AiSelect = AiSelect;
exports.AiSelectOption = AiSelectOption;
exports.AiSelectPopover = AiSelectPopover;
exports.AiStringfy = AiStringfy;
