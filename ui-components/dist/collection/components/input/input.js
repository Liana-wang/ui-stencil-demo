import { Component, Host, Prop, Watch, Event, h } from '@stencil/core';
export class AiInput {
  constructor() {
    /**
     * 预设文案
     */
    this.placeholder = '';
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
    this.onBlur = (ev) => {
      this.aiBlur.emit(ev);
    };
  }
  valueChanged() {
    this.aiChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'box' },
        h("input", { class: 'ai-input', type: this.type, placeholder: this.placeholder, onInput: this.onInput, value: this.value, onBlur: this.onBlur }))));
  }
  static get is() { return "ai-input"; }
  static get originalStyleUrls() { return {
    "$": ["input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "defaultValue": {
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
        "text": "\u9ED8\u8BA4\u503C"
      },
      "attribute": "default-value",
      "reflect": false
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
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
