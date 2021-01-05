import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from '@ai/ui-components';
import { AiBackdrop as IAiBackdrop } from '@ai/ui-components/dist/types/components/backdrop/backdrop';
export declare interface AiBackdrop extends Components.AiBackdrop {
}
export declare class AiBackdrop {
    protected z: NgZone;
    /** Emitted when the backdrop is tapped. */
    aiBackdropTap: IAiBackdrop['aiBackdropTap'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { AiButton as IAiButton } from '@ai/ui-components/dist/types/components/button/button';
export declare interface AiButton extends Components.AiButton {
}
export declare class AiButton {
    protected z: NgZone;
    /** 点击 */
    aiClick: IAiButton['aiClick'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface AiControl extends Components.AiControl {
}
export declare class AiControl {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { AiInput as IAiInput } from '@ai/ui-components/dist/types/components/input/input';
export declare interface AiInput extends Components.AiInput {
}
export declare class AiInput {
    protected z: NgZone;
    /** 值改变 */
    aiChange: IAiInput['aiChange'];
    /** 改变值 */
    aiInput: IAiInput['aiInput'];
    /** 失焦 */
    aiBlur: IAiInput['aiBlur'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { AiPopover as IAiPopover } from '@ai/ui-components/dist/types/components/popover/popover';
export declare interface AiPopover extends Components.AiPopover {
}
export declare class AiPopover {
    protected z: NgZone;
    /** 派发完成事件 */
    aiPopoverDidPresent: IAiPopover['didPresent'];
    /** 派发弹出之前事件 */
    aiPopoverWillPresent: IAiPopover['willPresent'];
    /** 派发弹出窗口关闭之前事件 */
    aiPopoverWillDismiss: IAiPopover['willDismiss'];
    /** 派发弹出层已销毁事件 */
    aiPopoverDidDismiss: IAiPopover['didDismiss'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { AiSelect as IAiSelect } from '@ai/ui-components/dist/types/components/select/select';
export declare interface AiSelect extends Components.AiSelect {
}
export declare class AiSelect {
    protected z: NgZone;
    /** 派发选中项改变事件 */
    aiChange: IAiSelect['aiChange'];
    /** 派发取消选择的事件 */
    aiCancel: IAiSelect['aiCancel'];
    /** 派发聚焦事件 */
    aiFocus: IAiSelect['aiFocus'];
    /** 派发失焦事件 */
    aiBlur: IAiSelect['aiBlur'];
    /** 派发样式改变 */
    aiStyle: IAiSelect['aiStyle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface AiSelectOption extends Components.AiSelectOption {
}
export declare class AiSelectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface AiSelectPopover extends Components.AiSelectPopover {
}
export declare class AiSelectPopover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
