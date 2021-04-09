import Vue from 'vue';
import { applyPolyfills, defineCustomElements } from '@ai.s/ui-components/loader';

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

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var createCommonRender = function createCommonRender(tagName, eventNames) {
  if (eventNames === void 0) {
    eventNames = [];
  }

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
      on: allListeners
    }, [vueElement.$slots.default]);
  };
};
var createCommonMethod = function createCommonMethod(methodName) {
  return function () {
    var _a;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    (_a = this.$refs.wc)[methodName].apply(_a, args);
  };
};

applyPolyfills().then(function () {
  return defineCustomElements();
});
var customElementTags = ['ai-backdrop', 'ai-button', 'ai-control', 'ai-input', 'ai-popover', 'ai-select', 'ai-select-option', 'ai-select-popover', 'ai-stringfy'];
Vue.config.ignoredElements = __spreadArrays(Vue.config.ignoredElements, customElementTags);
var AiBackdrop = /*@__PURE__*/Vue.extend({
  props: {
    visible: {},
    tappable: {},
    stopPropagation: {}
  },
  render: createCommonRender('ai-backdrop', ['aiBackdropTap'])
});
var AiButton = /*@__PURE__*/Vue.extend({
  props: {
    type: {},
    htmlType: {},
    size: {},
    danger: {},
    ghost: {},
    block: {},
    shap: {},
    href: {},
    target: {},
    disabled: {}
  },
  render: createCommonRender('ai-button', ['aiClick'])
});
var AiControl = /*@__PURE__*/Vue.extend({
  render: createCommonRender('ai-control', [])
});
var AiInput = /*@__PURE__*/Vue.extend({
  props: {
    allowClear: {},
    bordered: {},
    defaultValue: {},
    disabled: {},
    maxLength: {},
    hasPrefix: {},
    hasSuffix: {},
    placeholder: {},
    readonly: {},
    value: {}
  },
  model: {
    prop: 'value',
    event: 'aiChange'
  },
  render: createCommonRender('ai-input', ['aiChange', 'aiPressEnter', 'aiInput', 'aiBlur', 'aiFocus'])
});
var AiPopover = /*@__PURE__*/Vue.extend({
  props: {
    overlayIndex: {},
    component: {},
    componentProps: {},
    backdropDismiss: {},
    showBackdrop: {},
    event: {}
  },
  methods: {
    present: createCommonMethod('present'),
    dismiss: createCommonMethod('dismiss'),
    onDidDismiss: createCommonMethod('onDidDismiss'),
    onWillDismiss: createCommonMethod('onWillDismiss')
  },
  render: createCommonRender('ai-popover', ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss'])
});
var AiSelect = /*@__PURE__*/Vue.extend({
  props: {
    disabled: {},
    placeholder: {},
    selected: {},
    compareWith: {}
  },
  methods: {
    open: createCommonMethod('open')
  },
  render: createCommonRender('ai-select', ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle'])
});
var AiSelectOption = /*@__PURE__*/Vue.extend({
  props: {
    disabled: {},
    option: {}
  },
  render: createCommonRender('ai-select-option', [])
});
var AiSelectPopover = /*@__PURE__*/Vue.extend({
  props: {
    options: {}
  },
  render: createCommonRender('ai-select-popover', [])
});
var AiStringfy = /*@__PURE__*/Vue.extend({
  props: {
    data: {}
  },
  render: createCommonRender('ai-stringfy', [])
});

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, AiStringfy };
