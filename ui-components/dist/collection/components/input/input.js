import { Component, Host, Prop, State, Watch, Event, h } from '@stencil/core';
export class AiInput {
  constructor() {
    /**
     * 是否聚焦
     */
    this.hasFocus = false;
    /**
     * 是否禁用
     */
    this.disabled = false;
    /**
     * 预设文案
     */
    this.placeholder = '';
    /**
     * 是否只读
     */
    this.readonly = false;
    /**
     * 类型
     */
    this.type = 'text';
    /**
     * 输入值
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.aiInput.emit(ev);
    };
    /**
     * 失焦
     */
    this.onBlur = () => {
      this.hasFocus = false;
      this.aiBlur.emit();
    };
    /**
     * 聚焦
     */
    this.onFocus = () => {
      this.hasFocus = true;
      this.aiFocus.emit();
    };
  }
  valueChanged() {
    this.aiChange.emit({ value: this.value });
  }
  /**
   * 获取输入框的值
   */
  getValue() {
    return this.value || '';
  }
  /**
   * 输入框是否有值
   */
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    return (h(Host, { class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus
      } },
      h("div", { class: 'box' },
        h("input", { class: 'ai-input', type: this.type, placeholder: this.placeholder, onInput: this.onInput, value: this.value, readOnly: this.readonly, onBlur: this.onBlur, onFocus: this.onFocus }))));
  }
  static get is() { return "ai-input"; }
  static get originalStyleUrls() { return {
    "$": ["input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
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
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u9884\u8BBE\u6587\u6848"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "''"
    },
    "readonly": {
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
        "text": "\u662F\u5426\u53EA\u8BFB"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u7C7B\u578B"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u8F93\u5165\u503C"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "hasFocus": {}
  }; }
  static get events() { return [{
      "method": "aiChange",
      "name": "aiChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u503C\u6539\u53D8"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "aiInput",
      "name": "aiInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6539\u53D8\u503C"
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "aiBlur",
      "name": "aiBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u5931\u7126"
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
        "text": "\u805A\u7126"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
