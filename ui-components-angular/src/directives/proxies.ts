/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ai/ui-components';

import { AiBackdrop as IAiBackdrop } from '@ai/ui-components/dist/types/components/backdrop/backdrop';
export declare interface AiBackdrop extends Components.AiBackdrop {}
@ProxyCmp({
  inputs: ['stopPropagation', 'tappable', 'visible']
})
@Component({
  selector: 'ai-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stopPropagation', 'tappable', 'visible'],
  outputs: ['aiBackdropTap']
})
export class AiBackdrop {
  /** 点击背景时出发的事件 */
  aiBackdropTap!: IAiBackdrop['aiBackdropTap'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiBackdropTap']);
  }
}

import { AiButton as IAiButton } from '@ai/ui-components/dist/types/components/button/button';
export declare interface AiButton extends Components.AiButton {}
@ProxyCmp({
  inputs: ['disabled', 'text']
})
@Component({
  selector: 'ai-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'text'],
  outputs: ['aiClick']
})
export class AiButton {
  /** 点击 */
  aiClick!: IAiButton['aiClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiClick']);
  }
}


export declare interface AiControl extends Components.AiControl {}

@Component({
  selector: 'ai-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AiControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { AiInput as IAiInput } from '@ai/ui-components/dist/types/components/input/input';
export declare interface AiInput extends Components.AiInput {}
@ProxyCmp({
  inputs: ['disabled', 'placeholder', 'readonly', 'type', 'value']
})
@Component({
  selector: 'ai-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'placeholder', 'readonly', 'type', 'value'],
  outputs: ['aiChange', 'aiInput', 'aiBlur', 'aiFocus']
})
export class AiInput {
  /** 值改变 */
  aiChange!: IAiInput['aiChange'];
  /** 改变值 */
  aiInput!: IAiInput['aiInput'];
  /** 失焦 */
  aiBlur!: IAiInput['aiBlur'];
  /** 聚焦 */
  aiFocus!: IAiInput['aiFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur', 'aiFocus']);
  }
}

import { AiPopover as IAiPopover } from '@ai/ui-components/dist/types/components/popover/popover';
export declare interface AiPopover extends Components.AiPopover {}
@ProxyCmp({
  inputs: ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ai-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop'],
  outputs: ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']
})
export class AiPopover {
  /** 派发完成事件 */
  aiPopoverDidPresent!: IAiPopover['didPresent'];
  /** 派发弹出之前事件 */
  aiPopoverWillPresent!: IAiPopover['willPresent'];
  /** 派发弹出窗口关闭之前事件 */
  aiPopoverWillDismiss!: IAiPopover['willDismiss'];
  /** 派发弹出层已销毁事件 */
  aiPopoverDidDismiss!: IAiPopover['didDismiss'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
  }
}

import { AiSelect as IAiSelect } from '@ai/ui-components/dist/types/components/select/select';
export declare interface AiSelect extends Components.AiSelect {}
@ProxyCmp({
  inputs: ['compareWith', 'disabled', 'placeholder', 'selected'],
  methods: ['open']
})
@Component({
  selector: 'ai-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['compareWith', 'disabled', 'placeholder', 'selected'],
  outputs: ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']
})
export class AiSelect {
  /** 派发选中项改变事件 */
  aiChange!: IAiSelect['aiChange'];
  /** 派发取消选择的事件 */
  aiCancel!: IAiSelect['aiCancel'];
  /** 派发聚焦事件 */
  aiFocus!: IAiSelect['aiFocus'];
  /** 派发失焦事件 */
  aiBlur!: IAiSelect['aiBlur'];
  /** 派发样式改变 */
  aiStyle!: IAiSelect['aiStyle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
  }
}


export declare interface AiSelectOption extends Components.AiSelectOption {}
@ProxyCmp({
  inputs: ['disabled', 'option']
})
@Component({
  selector: 'ai-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'option']
})
export class AiSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AiSelectPopover extends Components.AiSelectPopover {}
@ProxyCmp({
  inputs: ['options']
})
@Component({
  selector: 'ai-select-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options']
})
export class AiSelectPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AiStringfy extends Components.AiStringfy {}
@ProxyCmp({
  inputs: ['data']
})
@Component({
  selector: 'ai-stringfy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data']
})
export class AiStringfy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
