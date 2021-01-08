import { Component, Element, Event, Host, Prop, State, Watch, Method, h } from '@stencil/core';
import { watchForOptions } from '../../utils/watch-options';
import { popoverController } from '../../utils/overlays';
export class AiSelect {
  constructor() {
    this.inputId = `ai-sel-${selectIds++}`;
    /**
     * 是否处于展开状态
     */
    this.isExpanded = false;
    /**
     * 是否禁用
     */
    this.disabled = false;
    this.onClick = (ev) => {
      this.setFocus();
      this.open(ev);
    };
    this.onFocus = () => {
      this.aiFocus.emit();
    };
    this.onBlur = () => {
      this.aiBlur.emit();
    };
  }
  disabledChanged() {
    this.emitStyle();
  }
  valueChanged() {
    this.updateOptions();
    this.emitStyle();
    // if (this.didInit) {
    //   this.aiChange.emit({
    //     selected: this.selected,
    //   })
    // }
  }
  async connectedCallback() {
    this.updateOptions();
    this.updateOverlayOptions();
    this.emitStyle();
    this.mutationO = watchForOptions(this.el, 'ai-select-option', async () => {
      this.updateOverlayOptions();
    });
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  componentDidLoad() {
    // this.didInit = true;
  }
  async open(event) {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    const overlay = this.overlay = await this.createOverlay(event);
    this.isExpanded = true;
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.setFocus();
    });
    await overlay.present();
    return overlay;
  }
  createOverlay(ev) {
    return this.openPopover(ev);
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.selected;
    const popover = overlay.querySelector('ai-select-popover');
    if (popover) {
      popover.options = this.createPopoverOptions(childOpts, value);
    }
  }
  createPopoverOptions(data, selectValue) {
    const popoverOptions = data.map(option => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || '',
        cssClass: optClass,
        option: value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: () => {
          this.selected = value;
          this.aiChange.emit({
            selected: value,
          });
          this.close();
        }
      };
    });
    return popoverOptions;
  }
  async openPopover(ev) {
    const value = this.selected;
    const popoverOpts = {
      component: 'ai-select-popover',
      cssClass: ['select-popover'],
      event: ev,
      componentProps: {
        selected: value,
        options: this.createPopoverOptions(this.childOpts, value)
      }
    };
    return popoverController.create(popoverOpts);
  }
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    this.isExpanded = false;
    return this.overlay.dismiss();
  }
  updateOptions() {
    // iterate all options, updating the selected prop
    let canSelect = true;
    const { selected, childOpts, compareWith } = this;
    for (const selectOption of childOpts) {
      const optValue = getOptionValue(selectOption);
      const isSelected = canSelect && isOptionSelected(selected, optValue, compareWith);
      selectOption.selected = isSelected;
      // if current option is selected and select is single-option, we can't select
      // any option more
      if (isSelected) {
        canSelect = false;
      }
    }
  }
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ai-select-option'));
  }
  getText() {
    return generateText(this.childOpts, this.selected, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    this.aiStyle.emit({
      'interactive': true,
      'select': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'interactive-disabled': this.disabled,
      'select-disabled': this.disabled
    });
  }
  render() {
    const { disabled, inputId, isExpanded, placeholder } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder != null) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    };
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    const displayLabel = selectText;
    return (h(Host, { onClick: this.onClick, role: "button", "aria-haspopup": "listbox", "aria-disabled": disabled ? 'true' : null, "aria-label": displayLabel, class: {
        'select-disabled': disabled,
        'ai-focused': isExpanded,
      } },
      h("div", { "aria-hidden": "true", class: selectTextClasses, part: textPart }, selectText),
      h("div", { class: "select-icon", role: "presentation", part: "icon" },
        h("div", { class: "select-icon-inner" })),
      h("label", null, displayLabel),
      h("button", { type: "button", disabled: disabled, id: inputId, "aria-haspopup": "listbox", "aria-expanded": `${isExpanded}`, onFocus: this.onFocus, onBlur: this.onBlur, ref: (focusEl => this.focusEl = focusEl) })));
  }
  static get is() { return "ai-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["select.css"]
  }; }
  static get properties() { return {
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u7981\u7528"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u9884\u8BBE\u6587\u6848"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "selected": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any | null",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u9009\u4E2D\u7684\u503C"
      },
      "attribute": "selected",
      "reflect": false
    },
    "compareWith": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | Function | null",
        "resolved": "Function | string",
        "references": {
          "Function": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u9009\u4E2D\u4E4B\u540E\u505A\u5BF9\u6BD4\u7684\u6761\u4EF6"
      },
      "attribute": "compare-with",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isExpanded": {}
  }; }
  static get events() { return [{
      "method": "aiChange",
      "name": "aiChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u9009\u4E2D\u9879\u6539\u53D8\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "aiCancel",
      "name": "aiCancel",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u53D6\u6D88\u9009\u62E9\u7684\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "aiFocus",
      "name": "aiFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u805A\u7126\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "aiBlur",
      "name": "aiBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u5931\u7126\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "aiStyle",
      "name": "aiStyle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u6837\u5F0F\u6539\u53D8"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "(event?: UIEvent) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "UIEvent": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "disabledChanged"
    }, {
      "propName": "placeholder",
      "methodName": "disabledChanged"
    }, {
      "propName": "selected",
      "methodName": "valueChanged"
    }]; }
}
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  }
  else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};
const getOptionValue = (el) => {
  const value = el.option;
  return (value === undefined)
    ? el.textContent || ''
    : value;
};
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  }
  else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  }
  else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(', ');
  }
  else {
    return textForValue(opts, value, compareWith) || '';
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find(opt => {
    return compareOptions(getOptionValue(opt), value, compareWith);
  });
  return selectOpt
    ? selectOpt.textContent
    : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
