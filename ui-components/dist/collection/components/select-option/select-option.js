import { Component, Element, Host, Prop, h } from '@stencil/core';
export class AiSelectOption {
  constructor() {
    this.inputId = `ai-selopt-${selectOptionIds++}`;
    /**
     * 是否禁用
     */
    this.disabled = false;
  }
  render() {
    return (h(Host, { role: "option", id: this.inputId }));
  }
  static get is() { return "ai-select-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./select-option.css"]
  }; }
  static get styleUrls() { return {
    "$": ["select-option.css"]
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
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any | null",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u9009\u9879\u7684value"
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
let selectOptionIds = 0;
