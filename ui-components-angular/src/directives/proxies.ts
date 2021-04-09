/* tslint:disable */
/* auto-generated angular directive proxies */
import { Component, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';

function proxyInputs(Cmp: any, inputs: string[]) {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.el[item] = val; },
    });
  });
}

function proxyMethods(Cmp: any, methods: string[]) {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.el.componentOnReady().then((el: any) => el[methodName].apply(el, args));
    };
  });
}

function proxyOutputs(instance: any, el: any, events: string[]) {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

import { Components } from '@ai.s/ui-components'

export declare interface AiBackdrop extends Components.AiBackdrop {}
@Component({ selector: 'ai-backdrop', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] })
export class AiBackdrop {
  aiBackdropTap!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiBackdropTap']);
  }
}
proxyInputs(AiBackdrop, ['stopPropagation', 'tappable', 'visible']);

export declare interface AiButton extends Components.AiButton {}
@Component({ selector: 'ai-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type'] })
export class AiButton {
  aiClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiClick']);
  }
}
proxyInputs(AiButton, ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type']);

export declare interface AiControl extends Components.AiControl {}
@Component({ selector: 'ai-control', changeDetection: 0, template: '<ng-content></ng-content>' })
export class AiControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AiInput extends Components.AiInput {}
@Component({ selector: 'ai-input', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['allowClear', 'bordered', 'defaultValue', 'disabled', 'hasPrefix', 'hasSuffix', 'maxLength', 'placeholder', 'readonly', 'value'] })
export class AiInput {
  aiChange!: EventEmitter<CustomEvent>;
  aiPressEnter!: EventEmitter<CustomEvent>;
  aiInput!: EventEmitter<CustomEvent>;
  aiBlur!: EventEmitter<CustomEvent>;
  aiFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiPressEnter', 'aiInput', 'aiBlur', 'aiFocus']);
  }
}
proxyInputs(AiInput, ['allowClear', 'bordered', 'defaultValue', 'disabled', 'hasPrefix', 'hasSuffix', 'maxLength', 'placeholder', 'readonly', 'value']);

export declare interface AiPopover extends Components.AiPopover {}
@Component({ selector: 'ai-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop'] })
export class AiPopover {
  aiPopoverDidPresent!: EventEmitter<CustomEvent>;
  aiPopoverWillPresent!: EventEmitter<CustomEvent>;
  aiPopoverWillDismiss!: EventEmitter<CustomEvent>;
  aiPopoverDidDismiss!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
  }
}
proxyMethods(AiPopover, ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']);
proxyInputs(AiPopover, ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop']);

export declare interface AiSelect extends Components.AiSelect {}
@Component({ selector: 'ai-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['compareWith', 'disabled', 'placeholder', 'selected'] })
export class AiSelect {
  aiChange!: EventEmitter<CustomEvent>;
  aiCancel!: EventEmitter<CustomEvent>;
  aiFocus!: EventEmitter<CustomEvent>;
  aiBlur!: EventEmitter<CustomEvent>;
  aiStyle!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
  }
}
proxyMethods(AiSelect, ['open']);
proxyInputs(AiSelect, ['compareWith', 'disabled', 'placeholder', 'selected']);

export declare interface AiSelectOption extends Components.AiSelectOption {}
@Component({ selector: 'ai-select-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'option'] })
export class AiSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(AiSelectOption, ['disabled', 'option']);

export declare interface AiSelectPopover extends Components.AiSelectPopover {}
@Component({ selector: 'ai-select-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['options'] })
export class AiSelectPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(AiSelectPopover, ['options']);

export declare interface AiStringfy extends Components.AiStringfy {}
@Component({ selector: 'ai-stringfy', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['data'] })
export class AiStringfy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(AiStringfy, ['data']);
