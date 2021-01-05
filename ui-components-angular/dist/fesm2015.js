import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@ai/ui-components/loader';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    (item) => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() {
                return this.el[item];
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) {
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                () => (this.el[item] = val)));
            },
        });
    }));
});
/** @type {?} */
const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    (methodName) => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    (eventName) => (instance[eventName] = fromEvent(el, eventName))));
});
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    const decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AiBackdrop = class AiBackdrop {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiBackdropTap']);
    }
};
AiBackdrop.decorators = [
    { type: Component, args: [{
                selector: 'ai-backdrop',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['stopPropagation', 'tappable', 'visible'],
                outputs: ['aiBackdropTap']
            },] },
];
/** @nocollapse */
AiBackdrop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiBackdrop = __decorate([
    ProxyCmp({
        inputs: ['stopPropagation', 'tappable', 'visible']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiBackdrop);
let AiButton = class AiButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiClick']);
    }
};
AiButton.decorators = [
    { type: Component, args: [{
                selector: 'ai-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'text', 'value'],
                outputs: ['aiClick']
            },] },
];
/** @nocollapse */
AiButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'text', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiButton);
class AiControl {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
AiControl.decorators = [
    { type: Component, args: [{
                selector: 'ai-control',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
AiControl.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
let AiInput = class AiInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur']);
    }
};
AiInput.decorators = [
    { type: Component, args: [{
                selector: 'ai-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['defaultValue', 'placeholder', 'type', 'value'],
                outputs: ['aiChange', 'aiInput', 'aiBlur']
            },] },
];
/** @nocollapse */
AiInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiInput = __decorate([
    ProxyCmp({
        inputs: ['defaultValue', 'placeholder', 'type', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiInput);
let AiPopover = class AiPopover {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
    }
};
AiPopover.decorators = [
    { type: Component, args: [{
                selector: 'ai-popover',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['backdropDismiss', 'component', 'componentProps', 'event'],
                outputs: ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']
            },] },
];
/** @nocollapse */
AiPopover.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiPopover = __decorate([
    ProxyCmp({
        inputs: ['backdropDismiss', 'component', 'componentProps', 'event'],
        methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiPopover);
let AiSelect = class AiSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
    }
};
AiSelect.decorators = [
    { type: Component, args: [{
                selector: 'ai-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['compareWith', 'disabled', 'placeholder', 'value'],
                outputs: ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']
            },] },
];
/** @nocollapse */
AiSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiSelect = __decorate([
    ProxyCmp({
        inputs: ['compareWith', 'disabled', 'placeholder', 'value'],
        methods: ['open']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiSelect);
let AiSelectOption = class AiSelectOption {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AiSelectOption.decorators = [
    { type: Component, args: [{
                selector: 'ai-select-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'value']
            },] },
];
/** @nocollapse */
AiSelectOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiSelectOption = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiSelectOption);
let AiSelectPopover = class AiSelectPopover {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AiSelectPopover.decorators = [
    { type: Component, args: [{
                selector: 'ai-select-popover',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['options']
            },] },
];
/** @nocollapse */
AiSelectPopover.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AiSelectPopover = __decorate([
    ProxyCmp({
        inputs: ['options']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AiSelectPopover);

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
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
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

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, ComponentNgModule, ProxyCmp as ɵa, TextValueAccessor as ɵb, ValueAccessor as ɵc };
