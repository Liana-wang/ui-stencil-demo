'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ddea3caa.js');
const overlays = require('./overlays-6498908f.js');

const buttonCss = ":host{display:inline-block}.btn{position:relative;display:inline-block;height:32px;padding:4px 15px;font-weight:normal;white-space:nowrap;text-align:center;background-image:none;border:1px solid transparent;border-radius:2px;-webkit-box-shadow:0 2px 0 rgb(0 0 0 / 2%);box-shadow:0 2px 0 rgb(0 0 0 / 2%);font-size:14px;cursor:pointer;-webkit-transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.btn{padding-top:0.1px;line-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.btn,.btn:focus,.btn:active{outline:none}a,.btn:not([disabled]):hover{text-decoration:none}.btn:not([disabled]):active{outline:0;-webkit-box-shadow:none;box-shadow:none}.btn[disabled]{cursor:not-allowed}.btn[disabled],.btn[disabled]:active,.btn[disabled]:focus,.btn[disabled]:hover{color:rgba(0, 0, 0, .25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;-webkit-box-shadow:none;box-shadow:none}.btn-default{color:rgba(0, 0, 0, .85);background-color:#fff;border-color:#d9d9d9}.btn-default:hover,.btn-default:active,.btn-default:focus{color:#40a9ff;background:#fff;border-color:#40a9ff}.btn-primary{color:#fff;background:#1890ff;border-color:#1890ff;text-shadow:0 -1px 0 rgb(0 0 0 / 12%);-webkit-box-shadow:0 2px 0 rgb(0 0 0 / 5%);box-shadow:0 2px 0 rgb(0 0 0 / 5%)}.btn-primary:focus,.btn-primary:hover{color:#fff;background:#40a9ff;border-color:#40a9ff}.btn-dashed{color:rgba(0, 0, 0, .85);background:#fff;border-color:#d9d9d9;border-style:dashed}.btn-dashed:focus,.btn-dashed:hover{color:#40a9ff;background:#fff;border-color:#40a9ff}.btn-text{color:rgba(0, 0, 0, .85);background:0 0;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-text:active,.btn-text:hover,.btn-text:focus{color:rgba(0, 0, 0, .85);background:rgba(0, 0, 0, .028);border-color:transparent}.btn-text[disabled],.btn-text[disabled]:active,.btn-text[disabled]:hover,.btn-text[disabled]:focus{color:rgba(0, 0, 0, .25);background:0 0;border-color:transparent;text-shadow:none;-webkit-box-shadow:none;box-shadow:none}.btn-link{color:#1890ff;background:0 0;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link:hover,.btn-link:focus{color:#40a9ff;background:0 0;border-color:transparent}.btn-link:active{color:#096dd9;border-color:transparent}a.btn-link-disabled,a.btn-link-disabled:active,a.btn-link-disabled:hover,a.btn-link-disabled:focus,.btn-link[disabled],.btn-link[disabled]:active,.btn-link[disabled]:focus,.btn-link[disabled]:hover{color:rgba(0, 0, 0, .25);background:0 0;border-color:transparent;text-shadow:none;-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed}.btn-dangerous{color:#ff4d4f;background:#fff;border-color:#ff4d4f}.btn-dangerous:focus,.btn-dangerous:hover{color:#ff7875;background:#fff;border-color:#ff7875}.btn-dangerous.btn-primary{color:#fff;background:#ff4d4f;border-color:#ff4d4f;text-shadow:0 -1px 0 rgb(0 0 0 / 12%);-webkit-box-shadow:0 2px 0 rgb(0 0 0 / 5%);box-shadow:0 2px 0 rgb(0 0 0 / 5%)}.btn-dangerous.btn-primary:focus,.btn-dangerous.btn-primary:hover{color:#fff;background:#ff7875;border-color:#ff7875}.btn-dangerous.btn-text,.btn-dangerous.btn-link{color:#ff4d4f;background:0 0;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-dangerous[disabled],.btn-dangerous[disabled]:active,.btn-dangerous[disabled]:focus,.btn-dangerous[disabled]:hover{color:rgba(0, 0, 0, .25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;-webkit-box-shadow:none;box-shadow:none}a.btn-dangerous.btn-link-disabled,a.btn-dangerous.btn-link-disabled:active,a.btn-dangerous.btn-link-disabled:hover,a.btn-dangerous.btn-link-disabled:focus,.btn-dangerous.btn-text[disabled],.btn-dangerous.btn-text[disabled]:active,.btn-dangerous.btn-text[disabled]:focus,.btn-dangerous.btn-text[disabled]:hover,.btn-dangerous.btn-link[disabled],.btn-dangerous.btn-link[disabled]:active,.btn-dangerous.btn-link[disabled]:focus,.btn-dangerous.btn-link[disabled]:hover{color:rgba(0, 0, 0, .25);background:0 0;border-color:transparent;text-shadow:none;-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed}.btn-ghost{color:#fff;background:0 0 !important;border-color:#fff}.btn-ghost.btn-primary{color:#1890ff;background:0 0;border-color:#1890ff;text-shadow:none}.btn-ghost.btn-dangerous,.btn-ghost.btn-primary.btn-dangerous{color:#ff4d4f;background:transparent;border-color:#ff4d4f;text-shadow:none}.btn-ghost.btn-primary[disabled],.btn-ghost.btn-primary[disabled]:hover,.btn-ghost.btn-primary[disabled]:focus,.btn-ghost.btn-primary[disabled]:active,.btn-ghost.btn-dangerous[disabled],.btn-ghost.btn-dangerous[disabled]:hover,.btn-ghost.btn-dangerous[disabled]:focus,.btn-ghost.btn-dangerous[disabled]:active{color:rgba(0, 0, 0, 0.25);background:transparent !important;border-color:#d9d9d9;text-shadow:none;-webkit-box-shadow:none;box-shadow:none}.btn-circle{min-width:32px;padding-right:0;padding-left:0;text-align:center;border-radius:50%}.btn-round{height:32px;padding:4px 16px;font-size:14px;border-radius:32px}.btn-large{height:40px;padding:6.4px 15px;font-size:16px}.btn-small{height:24px;padding:0 7px}";

const AiButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiClick = index.createEvent(this, "aiClick", 7);
    /**
     * 类型
     */
    this.type = 'default';
    /**
     * 设置 button 原生的 type 值
     */
    this.htmlType = 'button';
    /**
     * 警告按钮
     */
    this.danger = false;
    /**
     * 幽灵按钮
     */
    this.ghost = false;
    /**
     * 适应父元素的宽度
     */
    this.block = false;
    /**
     * 是否禁用
     */
    this.disabled = false;
    this.handleClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
      }
      else {
        this.aiClick.emit(event);
      }
    };
  }
  render() {
    const classes = {
      'btn': true,
      [`btn-${this.type}`]: !!this.type,
      [`btn-ghost`]: this.ghost && this.type !== 'text' && this.type !== 'link',
      [`btn-${this.shap}`]: !!this.shap,
      [`btn-${this.size}`]: !!this.size,
      'btn-block': this.block,
      'btn-dangerous': this.danger,
    };
    if (this.href !== undefined) {
      return index.h("a", { href: this.href, target: this.target, class: Object.assign(Object.assign({}, classes), { 'btn-link-disabled': this.disabled }), onClick: this.handleClick }, index.h("slot", { name: 'btn-icon' }), index.h("slot", null));
    }
    return (index.h(index.Host, null, index.h("button", { type: this.htmlType, disabled: this.disabled, class: classes, onClick: this.handleClick }, index.h("slot", { name: 'btn-icon' }), index.h("slot", null))));
  }
};
AiButton.style = buttonCss;

const inputCss = ":host{display:inline-block;width:100%}::-webkit-input-placeholder{color:#c9c9c9}:-moz-placeholder{color:#c9c9c9}::-moz-placeholder{color:#c9c9c9}:-ms-input-placeholder{color:#c9c9c9}.ai-input:-moz-placeholder-shown{text-overflow:ellipsis}.ai-input:-ms-input-placeholder{text-overflow:ellipsis}.ai-input:placeholder-shown{text-overflow:ellipsis}.ai-input{position:relative;display:inline-block;width:100%;min-width:0;padding:4px 11px;margin:0;font-variant:tabular-nums;list-style:none;-webkit-font-feature-settings:'tnum';font-feature-settings:'tnum';color:rgba(0, 0, 0, 0.85);font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-transition:all 0.3s;transition:all 0.3s}.input-affix-wrapper{position:relative;display:-ms-inline-flexbox;display:inline-flex;width:100%;min-width:0;padding:4px 11px;color:rgba(0, 0, 0, .85);font-size:14px;line-height:1.5715;background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:2px;-webkit-transition:all .3s;transition:all .3s;-webkit-box-sizing:border-box;box-sizing:border-box}.input-affix-wrapper:hover,.input-affix-wrapper:focus,.input-affix-wrapper:active{border-color:#1890ff;border-right-width:1px;outline:none}.input-affix-wrapper:focus,.input-affix-wrapper:active{-webkit-box-shadow:0 0 0 2px #1890ff33;box-shadow:0 0 0 2px #1890ff33}.input-affix-wrapper.input-affix-wrapper-focus{border-color:#1890ff;border-right-width:1px;-webkit-box-shadow:0 0 0 2px #1890ff33;box-shadow:0 0 0 2px #1890ff33;outline:none}.ai-input[disabled],.input-affix-wrapper.input-disabled{color:rgba(0, 0, 0, .25);background-color:#f5f5f5;border-color:#d9d9d9;-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed;opacity:1}.input-affix-wrapper.input-boderless,.input-affix-wrapper.input-boderless.input-disabled,.input-affix-wrapper.input-boderless>.ai-input[disabled],.input-affix-wrapper.input-boderless:focus,.input-affix-wrapper.input-boderless:hover{background-color:transparent;border:none;-webkit-box-shadow:none;box-shadow:none}.input-affix-wrapper>input.ai-input,.input-affix-wrapper>input.ai-input:focus{padding:0;border:none;-webkit-box-shadow:none;box-shadow:none;outline:none}.input-prefix,.input-suffix{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center}.input-prefix{margin-right:4px}.input-suffix{margin-left:4px}.input-clear-icon{position:relative;display:inline-block;color:inherit;font-style:normal;text-align:center;text-transform:none;margin:0 4px;color:#fff;vertical-align:-1px;cursor:pointer;-webkit-transition:color 0.3s;transition:color 0.3s;background-color:rgba(0, 0, 0, 0.25);border:1px solid transparent;border-radius:50%;width:15px;height:15px;line-height:1;top:3px}.input-clear-icon:hover{background-color:rgba(0, 0, 0, 0.5)}";

const AiInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiChange = index.createEvent(this, "aiChange", 7);
    this.aiPressEnter = index.createEvent(this, "aiPressEnter", 7);
    this.aiInput = index.createEvent(this, "aiInput", 7);
    this.aiBlur = index.createEvent(this, "aiBlur", 7);
    this.aiFocus = index.createEvent(this, "aiFocus", 7);
    /**
     * 是否聚焦
     */
    this.focused = false;
    /**
     * 是否有边框
     */
    this.bordered = true;
    /**
     * 是否禁用
     */
    this.disabled = false;
    /**
     * 预设文案
     */
    this.placeholder = '';
    /**
     * 是否只读
     */
    this.readonly = false;
    /**
     * 输入值
     */
    this.value = '';
    /**
     * 输入值改变
     */
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.aiInput.emit(ev);
    };
    /**
     * 点击清除按钮
     */
    this.onClear = () => {
      this.value = '';
      this.input.focus();
    };
    /**
     * 失焦
     */
    this.onBlur = (e) => {
      this.focused = false;
      this.aiBlur.emit(e);
    };
    /**
     * 聚焦
     */
    this.onFocus = (e) => {
      this.focused = true;
      this.aiFocus.emit(e);
    };
    /**
     * 按下键盘键
     */
    this.handleKeyDown = (e) => {
      if (this.aiPressEnter && e.keyCode === 13) {
        this.aiPressEnter.emit(e);
      }
    };
  }
  valueChanged() {
    this.aiChange.emit({ value: this.value });
  }
  connectedCallback() {
    this.value = typeof this.defaultValue !== 'undefined' ? this.defaultValue : this.value;
  }
  render() {
    const renderInput = () => (index.h("input", { ref: (input) => this.input = input, class: 'ai-input', type: 'text', placeholder: this.placeholder, onInput: this.onInput, value: this.value, disabled: this.disabled, readOnly: this.readonly, maxLength: this.maxLength, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.handleKeyDown }));
    return (index.h(index.Host, null, index.h("span", { class: {
        'input-affix-wrapper': true,
        'input-affix-wrapper-focus': this.focused,
        'input-disabled': this.disabled,
        'input-boderless': !this.bordered,
      } }, this.hasPrefix && index.h("span", { class: 'input-prefix' }, index.h("slot", { name: 'prefix' })), renderInput(), this.allowClear && this.value !== '' && index.h("span", { class: 'input-clear-icon', onClick: this.onClear }, "x"), this.hasSuffix && index.h("span", { class: 'input-suffix' }, index.h("slot", { name: 'suffix' })))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
AiInput.style = inputCss;

const watchForOptions = (containerEl, tagName, onChange) => {
  /* tslint:disable-next-line */
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
const findCheckedOption = (el, tagName) => {
  if (el.nodeType !== 1) {
    return undefined;
  }
  const options = (el.tagName === tagName.toUpperCase())
    ? [el]
    : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.value === el.value);
};

const selectCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding:6px;display:-ms-flexbox;display:flex;position:relative;height:30px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:2}:host(:hover){border:1px solid #779eea}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ai-focused){border:1px solid #779eea;-webkit-box-shadow:0 0 0 2px rgba(119, 158, 234, .35);box-shadow:0 0 0 2px rgba(119, 158, 234, .35)}.select-placeholder{color:#444;opacity:0.8}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}button{position:absolute;inset:0px;width:100%;height:100%;margin:0px;padding:0px;border:0px;outline:0px;clip:rect(0px, 0px, 0px, 0px);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-icon{position:relative;opacity:.33;width:16px;height:16px;line-height:16px}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{position:absolute;left:3px;top:50%;margin-top:-2px;width:0px;height:0px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentcolor;pointer-events:none}label{left:0px;top:0px;margin:0px;position:absolute;width:100%;height:100%;border:0px;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}";

const AiSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiChange = index.createEvent(this, "aiChange", 7);
    this.aiCancel = index.createEvent(this, "aiCancel", 7);
    this.aiFocus = index.createEvent(this, "aiFocus", 7);
    this.aiBlur = index.createEvent(this, "aiBlur", 7);
    this.aiStyle = index.createEvent(this, "aiStyle", 7);
    this.inputId = `ai-sel-${selectIds++}`;
    /**
     * 是否处于展开状态
     */
    this.isExpanded = false;
    /**
     * 是否禁用
     */
    this.disabled = false;
    this.onClick = (ev) => {
      this.setFocus();
      this.open(ev);
    };
    this.onFocus = () => {
      this.aiFocus.emit();
    };
    this.onBlur = () => {
      this.aiBlur.emit();
    };
  }
  disabledChanged() {
    this.emitStyle();
  }
  valueChanged() {
    this.updateOptions();
    this.emitStyle();
  }
  async connectedCallback() {
    this.updateOptions();
    this.updateOverlayOptions();
    this.emitStyle();
    this.mutationO = watchForOptions(this.el, 'ai-select-option', async () => {
      this.updateOverlayOptions();
    });
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  /**
   * 显示下拉选项
   */
  async open(event) {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    const overlay = this.overlay = await this.createOverlay(event);
    this.isExpanded = true;
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.setFocus();
    });
    await overlay.present();
    return overlay;
  }
  createOverlay(ev) {
    return this.openPopover(ev);
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.selected;
    const popover = overlay.querySelector('ai-select-popover');
    if (popover) {
      popover.options = this.createPopoverOptions(childOpts, value);
    }
  }
  createPopoverOptions(data, selectValue) {
    const popoverOptions = data.map(option => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || '',
        cssClass: optClass,
        option: value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: () => {
          this.selected = value;
          this.aiChange.emit({
            selected: value,
          });
          this.close();
        }
      };
    });
    return popoverOptions;
  }
  async openPopover(ev) {
    const value = this.selected;
    const popoverOpts = {
      component: 'ai-select-popover',
      cssClass: ['select-popover'],
      event: ev,
      componentProps: {
        selected: value,
        options: this.createPopoverOptions(this.childOpts, value)
      }
    };
    return overlays.popoverController.create(popoverOpts);
  }
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    this.isExpanded = false;
    return this.overlay.dismiss();
  }
  updateOptions() {
    let canSelect = true;
    const { selected, childOpts, compareWith } = this;
    for (const selectOption of childOpts) {
      const optValue = getOptionValue(selectOption);
      const isSelected = canSelect && isOptionSelected(selected, optValue, compareWith);
      selectOption.selected = isSelected;
      if (isSelected) {
        canSelect = false;
      }
    }
  }
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ai-select-option'));
  }
  getText() {
    return generateText(this.childOpts, this.selected, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    this.aiStyle.emit({
      'interactive': true,
      'select': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'interactive-disabled': this.disabled,
      'select-disabled': this.disabled
    });
  }
  render() {
    const { disabled, inputId, isExpanded, placeholder } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder != null) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    };
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    const displayLabel = selectText;
    return (index.h(index.Host, { onClick: this.onClick, role: "button", "aria-haspopup": "listbox", "aria-disabled": disabled ? 'true' : null, "aria-label": displayLabel, class: {
        'select-disabled': disabled,
        'ai-focused': isExpanded,
      } }, index.h("div", { "aria-hidden": "true", class: selectTextClasses, part: textPart }, selectText), index.h("div", { class: "select-icon", role: "presentation", part: "icon" }, index.h("div", { class: "select-icon-inner" })), index.h("label", null, displayLabel), index.h("button", { type: "button", disabled: disabled, id: inputId, "aria-haspopup": "listbox", "aria-expanded": `${isExpanded}`, onFocus: this.onFocus, onBlur: this.onBlur, ref: (focusEl => this.focusEl = focusEl) })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"],
    "placeholder": ["disabledChanged"],
    "selected": ["valueChanged"]
  }; }
};
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  }
  else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};
const getOptionValue = (el) => {
  const value = el.option;
  return (value === undefined)
    ? el.textContent || ''
    : value;
};
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  }
  else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  }
  else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(', ');
  }
  else {
    return textForValue(opts, value, compareWith) || '';
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find(opt => {
    return compareOptions(getOptionValue(opt), value, compareWith);
  });
  return selectOpt
    ? selectOpt.textContent
    : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
AiSelect.style = selectCss;

exports.ai_button = AiButton;
exports.ai_input = AiInput;
exports.ai_select = AiSelect;
