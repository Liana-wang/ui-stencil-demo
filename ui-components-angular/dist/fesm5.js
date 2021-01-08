import { __decorate, __metadata, __extends } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@ai/ui-components/loader';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () {
                return this.el[item];
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            },
        });
    }));
});
/** @type {?} */
var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return (instance[eventName] = fromEvent(el, eventName)); }));
});
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    var decorator = (/**
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
var AiBackdrop = /** @class */ (function () {
    function AiBackdrop(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiBackdropTap']);
    }
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
    AiBackdrop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiBackdrop = __decorate([
        ProxyCmp({
            inputs: ['stopPropagation', 'tappable', 'visible']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiBackdrop);
    return AiBackdrop;
}());
var AiButton = /** @class */ (function () {
    function AiButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiClick']);
    }
    AiButton.decorators = [
        { type: Component, args: [{
                    selector: 'ai-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['btnValue', 'disabled', 'text'],
                    outputs: ['aiClick']
                },] },
    ];
    /** @nocollapse */
    AiButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiButton = __decorate([
        ProxyCmp({
            inputs: ['btnValue', 'disabled', 'text']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiButton);
    return AiButton;
}());
var AiControl = /** @class */ (function () {
    function AiControl(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AiControl.decorators = [
        { type: Component, args: [{
                    selector: 'ai-control',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    AiControl.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return AiControl;
}());
var AiInput = /** @class */ (function () {
    function AiInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiInput', 'aiBlur']);
    }
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
    AiInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiInput = __decorate([
        ProxyCmp({
            inputs: ['defaultValue', 'placeholder', 'type', 'value']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiInput);
    return AiInput;
}());
var AiPopover = /** @class */ (function () {
    function AiPopover(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
    }
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
    AiPopover.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiPopover = __decorate([
        ProxyCmp({
            inputs: ['backdropDismiss', 'component', 'componentProps', 'event'],
            methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiPopover);
    return AiPopover;
}());
var AiSelect = /** @class */ (function () {
    function AiSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
    }
    AiSelect.decorators = [
        { type: Component, args: [{
                    selector: 'ai-select',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['compareWith', 'disabled', 'placeholder', 'selected'],
                    outputs: ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']
                },] },
    ];
    /** @nocollapse */
    AiSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiSelect = __decorate([
        ProxyCmp({
            inputs: ['compareWith', 'disabled', 'placeholder', 'selected'],
            methods: ['open']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiSelect);
    return AiSelect;
}());
var AiSelectOption = /** @class */ (function () {
    function AiSelectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AiSelectOption.decorators = [
        { type: Component, args: [{
                    selector: 'ai-select-option',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['disabled', 'option']
                },] },
    ];
    /** @nocollapse */
    AiSelectOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiSelectOption = __decorate([
        ProxyCmp({
            inputs: ['disabled', 'option']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiSelectOption);
    return AiSelectOption;
}());
var AiSelectPopover = /** @class */ (function () {
    function AiSelectPopover(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AiSelectPopover.decorators = [
        { type: Component, args: [{
                    selector: 'ai-select-popover',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['options']
                },] },
    ];
    /** @nocollapse */
    AiSelectPopover.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiSelectPopover = __decorate([
        ProxyCmp({
            inputs: ['options']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiSelectPopover);
    return AiSelectPopover;
}());
var AiStringfy = /** @class */ (function () {
    function AiStringfy(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    AiStringfy.decorators = [
        { type: Component, args: [{
                    selector: 'ai-stringfy',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['data']
                },] },
    ];
    /** @nocollapse */
    AiStringfy.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    AiStringfy = __decorate([
        ProxyCmp({
            inputs: ['data']
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], AiStringfy);
    return AiStringfy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValueAccessor = /** @class */ (function () {
    function ValueAccessor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.handleChangeEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    ValueAccessor.prototype._handleBlurEvent = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    };
    ValueAccessor.propDecorators = {
        _handleBlurEvent: [{ type: HostListener, args: ['focusout',] }]
    };
    return ValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextValueAccessor = /** @class */ (function (_super) {
    __extends(TextValueAccessor, _super);
    function TextValueAccessor(el) {
        return _super.call(this, el) || this;
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
    TextValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return TextValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
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
var ComponentNgModule = /** @class */ (function () {
    function ComponentNgModule() {
    }
    ComponentNgModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: []
                },] },
    ];
    return ComponentNgModule;
}());

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, AiStringfy, ComponentNgModule, ProxyCmp as ɵa, TextValueAccessor as ɵb, ValueAccessor as ɵc };
