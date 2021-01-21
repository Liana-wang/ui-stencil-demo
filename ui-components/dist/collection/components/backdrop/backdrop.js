import { Component, Host, Prop, Event, Listen, h } from '@stencil/core';
import { GESTURE_CONTROLLER } from '../../utils/gesture';
export class AiBackdrop {
  constructor() {
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    /**
     * 背景是否可见，默认可见
     */
    this.visible = true;
    /**
     * 背景是否可点击，默认为true，会出发aiBackdropTap
     */
    this.tappable = true;
    /**
     * 点击背景时，是否阻止冒泡
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
    return (h(Host, { tabindex: "-1", class: {
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
        "text": "\u80CC\u666F\u662F\u5426\u53EF\u89C1\uFF0C\u9ED8\u8BA4\u53EF\u89C1"
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
        "text": "\u80CC\u666F\u662F\u5426\u53EF\u70B9\u51FB\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u4F1A\u51FA\u53D1aiBackdropTap"
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
        "text": "\u70B9\u51FB\u80CC\u666F\u65F6\uFF0C\u662F\u5426\u963B\u6B62\u5192\u6CE1"
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
        "text": "\u70B9\u51FB\u80CC\u666F\u65F6\u51FA\u53D1\u7684\u4E8B\u4EF6"
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
