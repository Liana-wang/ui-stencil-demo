import { Component, Element, Prop, Method, Event, Host, h } from '@stencil/core';
import { prepareOverlay, present, dismiss, eventMethod } from '../../utils/overlays';
import { attachComponent, detachComponent } from '../../utils/delegate';
import { deepReady } from '../../utils/transition';
import { enterAnimation } from './enter';
import { leaveAnimation } from './leave';
export class AiPopover {
  constructor() {
    this.presented = false;
    /** 点击背景时关闭 */
    this.backdropDismiss = true;
    /**
     * 是否显示背景
     */
    this.showBackdrop = false;
    this.onDismiss = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.dismiss();
    };
    this.onBackdropTap = () => {
      this.dismiss(undefined, 'backdrop');
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const event = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(event);
      }
    };
    prepareOverlay(this.el);
  }
  /**
   * 弹出popover
   */
  async present() {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector('.popover-content');
    if (!container) {
      throw new Error('container is undefined');
    }
    const data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });
    this.usersElement = await attachComponent(container, this.component, ['popover-viewport'], data);
    await deepReady(this.usersElement);
    return present(this, enterAnimation, this.event);
  }
  /**
   * 关闭popover
   */
  async dismiss(data, role) {
    const shouldDismiss = await dismiss(this, data, role, leaveAnimation, this.event);
    if (shouldDismiss) {
      await detachComponent(this.usersElement);
    }
    return shouldDismiss;
  }
  /**
   * popover已经销毁
   */
  onDidDismiss() {
    return eventMethod(this.el, 'aiPopoverDidDismiss');
  }
  /** popover即将销毁 */
  onWillDismiss() {
    return eventMethod(this.el, 'aiPopoverWillDismiss');
  }
  render() {
    const { onLifecycle } = this;
    return (h(Host, { style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, onAiPopoverDidPresent: onLifecycle, onAiPopoverWillPresent: onLifecycle, onAiPopoverWillDismiss: onLifecycle, onAiPopoverDidDismiss: onLifecycle, onAiDismiss: this.onDismiss, onAiBackdropTap: this.onBackdropTap },
      h("ai-backdrop", { tappable: this.backdropDismiss }),
      h("div", { class: "popover-wrapper ai-overlay-wrapper" },
        h("div", { class: "popover-arrow" }),
        h("div", { class: "popover-content" }))));
  }
  static get is() { return "ai-popover"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["popover.css"]
  }; }
  static get styleUrls() { return {
    "$": ["popover.css"]
  }; }
  static get properties() { return {
    "overlayIndex": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "index\u503C"
      },
      "attribute": "overlay-index",
      "reflect": false
    },
    "component": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ComponentRef",
        "resolved": "Function | HTMLElement | string",
        "references": {
          "ComponentRef": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u5728popover\u4E2D\u663E\u793A\u7684\u7EC4\u4EF6"
      },
      "attribute": "component",
      "reflect": false
    },
    "componentProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ComponentProps",
        "resolved": "{ [key: string]: any; }",
        "references": {
          "ComponentProps": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "\u4F20\u9012\u7ED9\u5F39\u51FA\u7A97\u7684\u6570\u636E"
      }
    },
    "backdropDismiss": {
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
        "text": "\u70B9\u51FB\u80CC\u666F\u65F6\u5173\u95ED"
      },
      "attribute": "backdrop-dismiss",
      "reflect": false,
      "defaultValue": "true"
    },
    "showBackdrop": {
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
        "text": "\u662F\u5426\u663E\u793A\u80CC\u666F"
      },
      "attribute": "show-backdrop",
      "reflect": false,
      "defaultValue": "false"
    },
    "event": {
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
        "text": "\u89E6\u53D1\u52A8\u753B\u7684\u4E8B\u4EF6"
      },
      "attribute": "event",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "didPresent",
      "name": "aiPopoverDidPresent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u5B8C\u6210\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "willPresent",
      "name": "aiPopoverWillPresent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u5F39\u51FA\u4E4B\u524D\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "willDismiss",
      "name": "aiPopoverWillDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u5F39\u51FA\u7A97\u53E3\u5173\u95ED\u4E4B\u524D\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "didDismiss",
      "name": "aiPopoverDidDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\u6D3E\u53D1\u5F39\u51FA\u5C42\u5DF2\u9500\u6BC1\u4E8B\u4EF6"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "present": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "\u5F39\u51FApopover",
        "tags": []
      }
    },
    "dismiss": {
      "complexType": {
        "signature": "(data?: any, role?: string) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "\u5173\u95EDpopover",
        "tags": []
      }
    },
    "onDidDismiss": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "popover\u5DF2\u7ECF\u9500\u6BC1",
        "tags": []
      }
    },
    "onWillDismiss": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "popover\u5373\u5C06\u9500\u6BC1",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
const LIFECYCLE_MAP = {
  'aiPopoverDidPresent': 'aiViewDidEnter',
  'aiPopoverWillPresent': 'aiViewWillEnter',
  'aiPopoverWillDismiss': 'aiViewWillLeave',
  'aiPopoverDidDismiss': 'aiViewDidLeave',
};
