import { Component, Host, Prop, State, Watch, Event, h } from '@stencil/core';
export class AiInput {
  constructor() {
    /**
     * 是否聚焦
     */
    this.focused = false;
    /**
     * 是否有边框
     */
    this.bordered = true;
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
     * 输入值
     */
    this.value = '';
    /**
     * 输入值改变
     */
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.aiInput.emit(ev);
    };
    /**
     * 点击清除按钮
     */
    this.onClear = () => {
      this.value = '';
      this.input.focus();
    };
    /**
     * 失焦
     */
    this.onBlur = (e) => {
      this.focused = false;
      this.aiBlur.emit(e);
    };
    /**
     * 聚焦
     */
    this.onFocus = (e) => {
      this.focused = true;
      this.aiFocus.emit(e);
    };
    /**
     * 按下键盘键
     */
    this.handleKeyDown = (e) => {
      if (this.aiPressEnter && e.keyCode === 13) {
        this.aiPressEnter.emit(e);
      }
    };
  }
  valueChanged() {
    this.aiChange.emit({ value: this.value });
  }
  connectedCallback() {
    this.value = typeof this.defaultValue !== 'undefined' ? this.defaultValue : this.value;
  }
  render() {
    const renderInput = () => (h("input", { ref: (input) => this.input = input, class: 'ai-input', type: 'text', placeholder: this.placeholder, onInput: this.onInput, value: this.value, disabled: this.disabled, readOnly: this.readonly, maxLength: this.maxLength, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.handleKeyDown }));
    return (h(Host, null,
      h("span", { class: {
          'input-affix-wrapper': true,
          'input-affix-wrapper-focus': this.focused,
          'input-disabled': this.disabled,
          'input-boderless': !this.bordered,
        } },
        this.hasPrefix && h("span", { class: 'input-prefix' },
          h("slot", { name: 'prefix' })),
        renderInput(),
        this.allowClear && this.value !== '' && h("span", { class: 'input-clear-icon', onClick: this.onClear }, "x"),
        this.hasSuffix && h("span", { class: 'input-suffix' },
          h("slot", { name: 'suffix' })))));
  }
  static get is() { return "ai-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "allowClear": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9"
      },
      "attribute": "allow-clear",
      "reflect": false
    },
    "bordered": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u6709\u8FB9\u6846"
      },
      "attribute": "bordered",
      "reflect": false,
      "defaultValue": "true"
    },
    "defaultValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9"
      },
      "attribute": "default-value",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u7981\u7528"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "maxLength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u6700\u5927\u957F\u5EA6"
      },
      "attribute": "max-length",
      "reflect": false
    },
    "hasPrefix": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u5E26\u6709\u524D\u7F00\u7684 input"
      },
      "attribute": "has-prefix",
      "reflect": false
    },
    "hasSuffix": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "JSX.Element",
        "resolved": "Element",
        "references": {
          "JSX": {
            "location": "import",
            "path": "@stencil/core"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u5E26\u6709\u540E\u7F00\u7684 input"
      }
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
      "optional": true,
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u662F\u5426\u53EA\u8BFB"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
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
    "focused": {}
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
      "method": "aiPressEnter",
      "name": "aiPressEnter",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"
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
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
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
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
