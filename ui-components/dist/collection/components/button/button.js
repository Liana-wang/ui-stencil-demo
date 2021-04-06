import { Component, Host, Prop, Event, h } from '@stencil/core';
export class AiButton {
  constructor() {
    /**
     * 类型
     */
    this.type = 'default';
    /**
     * 设置 button 原生的 type 值
     */
    this.htmlType = 'button';
    /**
     * 警告按钮
     */
    this.danger = false;
    /**
     * 幽灵按钮
     */
    this.ghost = false;
    /**
     * 适应父元素的宽度
     */
    this.block = false;
    /**
     * 是否禁用
     */
    this.disabled = false;
    this.handleClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
      }
      else {
        this.aiClick.emit(event);
      }
    };
  }
  render() {
    const classes = {
      'btn': true,
      [`btn-${this.type}`]: !!this.type,
      [`btn-ghost`]: this.ghost && this.type !== 'text' && this.type !== 'link',
      [`btn-${this.shap}`]: !!this.shap,
      [`btn-${this.size}`]: !!this.size,
      'btn-block': this.block,
      'btn-dangerous': this.danger,
    };
    if (this.href !== undefined) {
      return h("a", { href: this.href, target: this.target, class: Object.assign(Object.assign({}, classes), { 'btn-link-disabled': this.disabled }), onClick: this.handleClick },
        h("slot", { name: 'btn-icon' }),
        h("slot", null));
    }
    return (h(Host, null,
      h("button", { type: this.htmlType, disabled: this.disabled, class: classes, onClick: this.handleClick },
        h("slot", { name: 'btn-icon' }),
        h("slot", null))));
  }
  static get is() { return "ai-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Type",
        "resolved": "\"dashed\" | \"default\" | \"link\" | \"primary\" | \"text\"",
        "references": {
          "Type": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u7C7B\u578B"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "htmlType": {
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
        "text": "\u8BBE\u7F6E button \u539F\u751F\u7684 type \u503C"
      },
      "attribute": "html-type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Size",
        "resolved": "\"large\" | \"small\"",
        "references": {
          "Size": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u5C3A\u5BF8"
      },
      "attribute": "size",
      "reflect": false
    },
    "danger": {
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
        "text": "\u8B66\u544A\u6309\u94AE"
      },
      "attribute": "danger",
      "reflect": false,
      "defaultValue": "false"
    },
    "ghost": {
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
        "text": "\u5E7D\u7075\u6309\u94AE"
      },
      "attribute": "ghost",
      "reflect": false,
      "defaultValue": "false"
    },
    "block": {
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
        "text": "\u9002\u5E94\u7236\u5143\u7D20\u7684\u5BBD\u5EA6"
      },
      "attribute": "block",
      "reflect": false,
      "defaultValue": "false"
    },
    "shap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Shap",
        "resolved": "\"circle\" | \"round\"",
        "references": {
          "Shap": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u6309\u94AE\u5F62\u72B6"
      },
      "attribute": "shap",
      "reflect": false
    },
    "href": {
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
        "text": "\u70B9\u51FB\u8DF3\u8F6C\u7684\u5730\u5740\uFF0C\u6307\u5B9A\u6B64\u5C5E\u6027 button \u7684\u884C\u4E3A\u548C a \u94FE\u63A5\u4E00\u81F4"
      },
      "attribute": "href",
      "reflect": false
    },
    "target": {
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
        "text": "\u76F8\u5F53\u4E8E a \u94FE\u63A5\u7684 target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548"
      },
      "attribute": "target",
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
    }
  }; }
  static get events() { return [{
      "method": "aiClick",
      "name": "aiClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u70B9\u51FB"
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
}
