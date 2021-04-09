import { Component, ChangeDetectorRef, ElementRef, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@ai.s/ui-components/loader';
import { __extends } from 'tslib';
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
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) { this.el[item] = val; },
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
            /** @type {?} */
            var args = arguments;
            return this.el.componentOnReady().then((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el[methodName].apply(el, args); }));
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
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
}
var AiBackdrop = /** @class */ (function () {
    function AiBackdrop(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiBackdropTap']);
    }
    AiBackdrop.decorators = [
        { type: Component, args: [{ selector: 'ai-backdrop', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] },] },
    ];
    /** @nocollapse */
    AiBackdrop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiBackdrop;
}());
proxyInputs(AiBackdrop, ['stopPropagation', 'tappable', 'visible']);
var AiButton = /** @class */ (function () {
    function AiButton(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiClick']);
    }
    AiButton.decorators = [
        { type: Component, args: [{ selector: 'ai-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type'] },] },
    ];
    /** @nocollapse */
    AiButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiButton;
}());
proxyInputs(AiButton, ['block', 'danger', 'disabled', 'ghost', 'href', 'htmlType', 'shap', 'size', 'target', 'type']);
var AiControl = /** @class */ (function () {
    function AiControl(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
    AiControl.decorators = [
        { type: Component, args: [{ selector: 'ai-control', changeDetection: 0, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    AiControl.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiControl;
}());
var AiInput = /** @class */ (function () {
    function AiInput(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiPressEnter', 'aiInput', 'aiBlur', 'aiFocus']);
    }
    AiInput.decorators = [
        { type: Component, args: [{ selector: 'ai-input', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['allowClear', 'bordered', 'defaultValue', 'disabled', 'hasPrefix', 'hasSuffix', 'maxLength', 'placeholder', 'readonly', 'value'] },] },
    ];
    /** @nocollapse */
    AiInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiInput;
}());
proxyInputs(AiInput, ['allowClear', 'bordered', 'defaultValue', 'disabled', 'hasPrefix', 'hasSuffix', 'maxLength', 'placeholder', 'readonly', 'value']);
var AiPopover = /** @class */ (function () {
    function AiPopover(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiPopoverDidPresent', 'aiPopoverWillPresent', 'aiPopoverWillDismiss', 'aiPopoverDidDismiss']);
    }
    AiPopover.decorators = [
        { type: Component, args: [{ selector: 'ai-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop'] },] },
    ];
    /** @nocollapse */
    AiPopover.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiPopover;
}());
proxyMethods(AiPopover, ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']);
proxyInputs(AiPopover, ['backdropDismiss', 'component', 'componentProps', 'event', 'overlayIndex', 'showBackdrop']);
var AiSelect = /** @class */ (function () {
    function AiSelect(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['aiChange', 'aiCancel', 'aiFocus', 'aiBlur', 'aiStyle']);
    }
    AiSelect.decorators = [
        { type: Component, args: [{ selector: 'ai-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['compareWith', 'disabled', 'placeholder', 'selected'] },] },
    ];
    /** @nocollapse */
    AiSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiSelect;
}());
proxyMethods(AiSelect, ['open']);
proxyInputs(AiSelect, ['compareWith', 'disabled', 'placeholder', 'selected']);
var AiSelectOption = /** @class */ (function () {
    function AiSelectOption(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
    AiSelectOption.decorators = [
        { type: Component, args: [{ selector: 'ai-select-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'option'] },] },
    ];
    /** @nocollapse */
    AiSelectOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiSelectOption;
}());
proxyInputs(AiSelectOption, ['disabled', 'option']);
var AiSelectPopover = /** @class */ (function () {
    function AiSelectPopover(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
    AiSelectPopover.decorators = [
        { type: Component, args: [{ selector: 'ai-select-popover', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['options'] },] },
    ];
    /** @nocollapse */
    AiSelectPopover.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiSelectPopover;
}());
proxyInputs(AiSelectPopover, ['options']);
var AiStringfy = /** @class */ (function () {
    function AiStringfy(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
    AiStringfy.decorators = [
        { type: Component, args: [{ selector: 'ai-stringfy', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['data'] },] },
    ];
    /** @nocollapse */
    AiStringfy.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return AiStringfy;
}());
proxyInputs(AiStringfy, ['data']);

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

export { AiBackdrop, AiButton, AiControl, AiInput, AiPopover, AiSelect, AiSelectOption, AiSelectPopover, AiStringfy, ComponentNgModule, TextValueAccessor as ɵa, ValueAccessor as ɵb };
