import { Component, ChangeDetectorRef, ElementRef, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@ai.s/ui-components/loader';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function proxyInputs(Cmp, inputs) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.el[item] = val; },
        });
    }));
}
/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function proxyMethods(Cmp, methods) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.el.componentOnReady().then((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el[methodName].apply(el, args)));
        });
    }));
}
/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function proxyOutputs(instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
}
class AiBackdrop {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiBackdropTap']);
    }
}
AiBackdrop.decorators = [
    { type: Component, args: [{ selector: 'ai-backdrop', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] },] },
];
/** @nocollapse */
AiBackdrop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiBackdrop, ['stopPropagation', 'tappable', 'visible']);
class AiButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiClick']);
    }
}
AiButton.decorators = [
    { type: Component, args: [{ selector: 'ai-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type'] },] },
];
/** @nocollapse */
AiButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiButton, ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type']);
class AiControl {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
AiControl.decorators = [
    { type: Component, args: [{ selector: 'ai-control', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
AiControl.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class AiInput {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur', 'aiFocus']);
    }
}
AiInput.decorators = [
    { type: Component, args: [{ selector: 'ai-input', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'placeholder', 'readonly', 'type', 'value'] },] },
];
/** @nocollapse */
AiInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiInput, ['disabled', 'placeholder', 'readonly', 'type', 'value']);
class AiPopover {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
    }
}
AiPopover.decorators = [
    { type: Component, args: [{ selector: 'ai-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop'] },] },
];
/** @nocollapse */
AiPopover.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(AiPopover, ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']);
proxyInputs(AiPopover, ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop']);
class AiSelect {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
    }
}
AiSelect.decorators = [
    { type: Component, args: [{ selector: 'ai-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['compareWith', 'disabled', 'placeholder', 'selected'] },] },
];
/** @nocollapse */
AiSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(AiSelect, ['open']);
proxyInputs(AiSelect, ['compareWith', 'disabled', 'placeholder', 'selected']);
class AiSelectOption {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
AiSelectOption.decorators = [
    { type: Component, args: [{ selector: 'ai-select-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'option'] },] },
];
/** @nocollapse */
AiSelectOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiSelectOption, ['disabled', 'option']);
class AiSelectPopover {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
AiSelectPopover.decorators = [
    { type: Component, args: [{ selector: 'ai-select-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['options'] },] },
];
/** @nocollapse */
AiSelectPopover.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiSelectPopover, ['options']);
class AiStringfy {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
AiStringfy.decorators = [
    { type: Component, args: [{ selector: 'ai-stringfy', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['data'] },] },
];
/** @nocollapse */
AiStringfy.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(AiStringfy, ['data']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ValueAccessor.propDecorators = {
    _handleBlurEvent: [{ type: HostListener, args: ['focusout',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
}
TextValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ai-input',
                host: {
                    '(aiChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    // proxies
    AiButton,
    AiInput,
    AiControl,
    AiSelect,
    AiBackdrop,
    AiPopover,
    AiSelectOption,
    AiSelectPopover,
    AiStringfy,
    // Value Accessors
    TextValueAccessor,
];
class ComponentNgModule {
}
ComponentNgModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] },
];

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, AiStringfy, ComponentNgModule, TextValueAccessor as ɵa, ValueAccessor as ɵb };
