import { Component, Host, Prop, Event, Listen, h } from '@stencil/core';
import { GESTURE_CONTROLLER } from '../../utils/gesture';
export class AiBackdrop {
  constructor() {
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    /**
     * If `true`, the backdrop will be visible.
     */
    this.visible = true;
    /**
     * If `true`, the backdrop will can be clicked and will emit the `aiBackdropTap` event.
     */
    this.tappable = true;
    /**
     * If `true`, the backdrop will stop propagation on tap.
     */
    this.stopPropagation = true;
  }
  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }
  disconnectedCallback() {
    this.blocker.unblock();
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.aiBackdropTap.emit();
    }
  }
  render() {
    return (h(Host, { tabindex: "-1", "aria-hidden": "true", class: {
        'backdrop-hide': !this.visible,
        'backdrop-no-tappable': !this.tappable,
      } }));
  }
  static get is() { return "ai-backdrop"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["backdrop.css"]
  }; }
  static get styleUrls() { return {
    "$": ["backdrop.css"]
  }; }
  static get properties() { return {
    "visible": {
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
        "text": "If `true`, the backdrop will be visible."
      },
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "true"
    },
    "tappable": {
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
        "text": "If `true`, the backdrop will can be clicked and will emit the `aiBackdropTap` event."
      },
      "attribute": "tappable",
      "reflect": false,
      "defaultValue": "true"
    },
    "stopPropagation": {
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
        "text": "If `true`, the backdrop will stop propagation on tap."
      },
      "attribute": "stop-propagation",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "aiBackdropTap",
      "name": "aiBackdropTap",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the backdrop is tapped."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onMouseDown",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
