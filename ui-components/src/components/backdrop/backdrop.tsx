import { Component, ComponentInterface, Host, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';
import { GESTURE_CONTROLLER } from '../../utils/gesture'

@Component({
  tag: 'ai-backdrop',
  styleUrl: 'backdrop.css',
  shadow: true,
})
export class AiBackdrop implements ComponentInterface {
  private blocker = GESTURE_CONTROLLER.createBlocker({
    disableScroll: true
  });

  /**
   * 背景是否可见，默认可见
   */
  @Prop() visible = true;

  /**
   * 背景是否可点击，默认为true，会出发aiBackdropTap
   */
  @Prop() tappable = true;

  /**
   * 点击背景时，是否阻止冒泡
   */
  @Prop() stopPropagation = true;

  /**
   * 点击背景时出发的事件
   */
  @Event() aiBackdropTap!: EventEmitter<void>;

  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }

  disconnectedCallback() {
    this.blocker.unblock();
  }

  @Listen('click', { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent) {
    this.emitTap(ev);
  }

  private emitTap(ev: Event) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.aiBackdropTap.emit();
    }
  }

  render() {
    return (
      <Host
        tabindex="-1"
        class={{
          'backdrop-hide': !this.visible,
          'backdrop-no-tappable': !this.tappable,
        }}
      >
      </Host>
    );
  }
}
