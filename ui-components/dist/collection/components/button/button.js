import { Component, Host, Prop, Event, h } from '@stencil/core';
export class AiButton {
  constructor() {
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
    return (h(Host, null,
      h("button", { class: {
          'btn': true,
          'btn-disabled': this.disabled,
        }, onClick: this.handleClick },
        h("slot", { name: 'btn-icon' }),
        this.text ? this.text : h("slot", null))));
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
    "text": {
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
        "text": "\u6587\u5B57"
      },
      "attribute": "text",
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
      "optional": false,
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
