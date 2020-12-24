import { Component, ComponentInterface, Element, Prop, Method, Event, EventEmitter, Host, h } from '@stencil/core';
import { ComponentRef, ComponentProps } from '../../interface'
import { prepareOverlay, present, dismiss, eventMethod } from '../../utils/overlays'
import { attachComponent, detachComponent } from '../../utils/delegate'
import { deepReady } from '../../utils/transition'
import { enterAnimation } from './enter'
import { leaveAnimation } from './leave'

@Component({
  tag: 'ai-popover',
  styleUrl: 'popover.css',
  scoped: true
})
export class AiPopover implements ComponentInterface {
  private usersElement?: HTMLElement;

  presented = false;

  @Element() el!: any;

  /** @internal */
  @Prop() overlayIndex!: number;

  /**
   * 在popover中显示的组件
   */
  @Prop() component!: ComponentRef;

  /**
   * 传递给弹出窗的数据
   */
  @Prop() componentProps?: ComponentProps;

  /** 点击背景时关闭 */
  @Prop() backdropDismiss = true;

  /**
   * 触发动画的事件
   */
  @Prop() event: any;

  /** 派发完成事件 */
  @Event({ eventName: 'aiPopoverDidPresent' }) didPresent!: EventEmitter<void>;

  /** 派发弹出之前事件 */
  @Event({ eventName: 'aiPopoverWillPresent' }) willPresent!: EventEmitter<void>;

  /** 派发弹出窗口关闭之前事件 */
  @Event({ eventName: 'aiPopoverWillDismiss' }) willDismiss!: EventEmitter<any>;

  /** 派发弹出层已销毁事件 */
  @Event({ eventName: 'aiPopoverDidDismiss' }) didDismiss!: EventEmitter<any>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return
    }
    const container = this.el.querySelector('.popover-content')
    if (!container) {
      throw new Error('container is undefined')
    }

    const data = {
      ...this.componentProps,
      popover: this.el
    }

    this.usersElement = await attachComponent(container, this.component, ['popover-viewport', (this.el as any)['s-sc']], data)

    await deepReady(this.usersElement)

    return present(this, enterAnimation, this.event)
  }

  @Method()
  async dismiss(data?: any, role?: string): Promise<boolean> {
    const shouldDismiss = await dismiss(this, data, role, leaveAnimation, this.event)

    if (shouldDismiss) {
      await detachComponent(this.usersElement)
    }

    return shouldDismiss
  }

  @Method()
  onDidDismiss(): Promise<any> {
    return eventMethod(this.el, 'aiPopoverDidDismiss');
  }

  @Method()
  onWillDismiss(): Promise<any> {
    return eventMethod(this.el, 'aiPopoverWillDismiss');
  }

  private onDismiss = (ev: UIEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    this.dismiss();
  }

  private onBackdropTap = () => {
    this.dismiss(undefined, 'backdrop');
  }

  private onLifecycle = (modalEvent: CustomEvent) => {
    const el = this.usersElement

    const name = LIFECYCLE_MAP[modalEvent.type]

    if (el && name) {
      const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: modalEvent.detail
      })

      el.dispatchEvent(event)
    }
  }

  render() {
    const { onLifecycle } = this

    return (
      <Host
        style={{
          zIndex: `${20000 + this.overlayIndex}`,
        }}
        onAiPopoverDidPresent={onLifecycle}
        onAiPopoverWillPresent={onLifecycle}
        onAiPopoverWillDismiss={onLifecycle}
        onAiPopoverDidDismiss={onLifecycle}
        onAiDismiss={this.onDismiss}
        onAiBackdropTap={this.onBackdropTap}
      >
        <ai-backdrop tappable={this.backdropDismiss} />

        <div class="popover-wrapper ai-overlay-wrapper">
          <div class="popover-arrow"></div>
          <div class="popover-content"></div>
        </div>
      </Host>
    )
  }

}

const LIFECYCLE_MAP: any = {
  'aiPopoverDidPresent': 'aiViewDidEnter',
  'aiPopoverWillPresent': 'aiViewWillEnter',
  'aiPopoverWillDismiss': 'aiViewWillLeave',
  'aiPopoverDidDismiss': 'aiViewDidLeave',
};