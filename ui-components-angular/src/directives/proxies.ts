/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ai/ui-components';

import { AiButton as IAiButton } from '@ai/ui-components/dist/types/components/ai-button/ai-button';
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
  /**  */
  aiClick!: IAiButton['aiClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiClick']);
  }
}

import { AiInput as IAiInput } from '@ai/ui-components/dist/types/components/ai-input/ai-input';
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
  /**  */
  aiChange!: IAiInput['aiChange'];
  /**  */
  aiInput!: IAiInput['aiInput'];
  /**  */
  aiBlur!: IAiInput['aiBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur']);
  }
}
