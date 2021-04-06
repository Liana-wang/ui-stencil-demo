import { ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Components } from '@ai.s/ui-components';
export declare interface AiBackdrop extends Components.AiBackdrop {
}
export declare class AiBackdrop {
    aiBackdropTap: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiButton extends Components.AiButton {
}
export declare class AiButton {
    aiClick: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiControl extends Components.AiControl {
}
export declare class AiControl {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiInput extends Components.AiInput {
}
export declare class AiInput {
    aiChange: EventEmitter<CustomEvent>;
    aiInput: EventEmitter<CustomEvent>;
    aiBlur: EventEmitter<CustomEvent>;
    aiFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiPopover extends Components.AiPopover {
}
export declare class AiPopover {
    aiPopoverDidPresent: EventEmitter<CustomEvent>;
    aiPopoverWillPresent: EventEmitter<CustomEvent>;
    aiPopoverWillDismiss: EventEmitter<CustomEvent>;
    aiPopoverDidDismiss: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiSelect extends Components.AiSelect {
}
export declare class AiSelect {
    aiChange: EventEmitter<CustomEvent>;
    aiCancel: EventEmitter<CustomEvent>;
    aiFocus: EventEmitter<CustomEvent>;
    aiBlur: EventEmitter<CustomEvent>;
    aiStyle: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiSelectOption extends Components.AiSelectOption {
}
export declare class AiSelectOption {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiSelectPopover extends Components.AiSelectPopover {
}
export declare class AiSelectPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
export declare interface AiStringfy extends Components.AiStringfy {
}
export declare class AiStringfy {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
