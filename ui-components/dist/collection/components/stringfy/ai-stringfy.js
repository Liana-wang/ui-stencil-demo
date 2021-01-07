import { Component, Prop, h } from '@stencil/core';
export class AiStringfy {
  render() {
    return h("div", null, JSON.stringify(this.data));
  }
  static get is() { return "ai-stringfy"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ai-stringfy.css"]
  }; }
  static get styleUrls() { return {
    "$": ["ai-stringfy.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "data",
      "reflect": false
    }
  }; }
}
