import { Component, Host, h } from '@stencil/core';
export class AiControl {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "ai-control"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["control.css"]
  }; }
  static get styleUrls() { return {
    "$": ["control.css"]
  }; }
}
