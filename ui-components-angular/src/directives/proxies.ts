/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ai/ui-components';

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
  inputs: ['defaultValue', 'placeholder', 'type', 'value']
})
@Component({
  selector: 'ai-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['defaultValue', 'placeholder', 'type', 'value'],
  outputs: ['aiChange', 'aiInput', 'aiBlur']
})
export class AiInput {
  /** 值改变 */
  aiChange!: IAiInput['aiChange'];
  /** 改变值 */
  aiInput!: IAiInput['aiInput'];
  /** 失焦 */
  aiBlur!: IAiInput['aiBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur']);
  }
}

import { AiPopover as IAiPopover } from '@ai/ui-components/dist/types/components/popover/popover';
export declare interface AiPopover extends Components.AiPopover {}
@ProxyCmp({
  inputs: ['backdropDismiss', 'component', 'componentProps'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ai-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backdropDismiss', 'component', 'componentProps'],
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
  inputs: ['compareWith', 'disabled', 'placeholder', 'value'],
  methods: ['open']
})
@Component({
  selector: 'ai-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['compareWith', 'disabled', 'placeholder', 'value'],
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
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ai-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'value']
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
