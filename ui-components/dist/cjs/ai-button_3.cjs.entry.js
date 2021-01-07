'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78c9c8a6.js');
const overlays = require('./overlays-a8360bca.js');

const buttonCss = ":host{display:block}.btn{height:30px;padding:0 8px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;color:#505050;box-shadow:none;line-height:normal;text-align:center;outline:none;cursor:pointer;font-size:13px}.btn:hover{border-color:#d3d4db;background-color:rgba(228, 230, 237, 0.25)}.btn:active{background-color:rgba(228, 230, 237, 0.45)}.btn-disabled{border-color:rgba(211, 212, 219, 0.8);background-color:#fff;opacity:0.5;cursor:pointer}";

const AiButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiClick = index.createEvent(this, "aiClick", 7);
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
  connectedCallback() {
    console.log('btn-value', this.value);
  }
  render() {
    return (index.h(index.Host, null, index.h("span", null, this.value && this.value.text ? this.value.text : ''), index.h("button", { class: {
        'btn': true,
        'btn-disabled': this.disabled,
      }, onClick: this.handleClick }, index.h("slot", { name: 'btn-icon' }), this.text ? this.text : index.h("slot", null))));
  }
};
AiButton.style = buttonCss;

const inputCss = ":host{display:block}.box{position:relative;display:inline-block;width:198px;padding:4px 10px 5px 10px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff}.ai-input{padding:0;margin:0;box-shadow:none;border:none;line-height:normal;font-size:13px;outline:none}";

const AiInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiChange = index.createEvent(this, "aiChange", 7);
    this.aiInput = index.createEvent(this, "aiInput", 7);
    this.aiBlur = index.createEvent(this, "aiBlur", 7);
    /**
     * 预设文案
     */
    this.placeholder = '';
    /**
     * 类型
     */
    this.type = 'text';
    /**
     * 输入值
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.aiInput.emit(ev);
    };
    this.onBlur = (ev) => {
      this.aiBlur.emit(ev);
    };
  }
  valueChanged() {
    this.aiChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'box' }, index.h("input", { class: 'ai-input', type: this.type, placeholder: this.placeholder, onInput: this.onInput, value: this.value, onBlur: this.onBlur }))));
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

const selectCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding:6px;display:flex;position:relative;height:30px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;box-sizing:border-box;align-items:center;overflow:hidden;z-index:2}:host(:hover){border:1px solid #779eea}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ai-focused){border:1px solid #779eea;box-shadow:0 0 0 2px rgba(119, 158, 234, .35)}.select-placeholder{color:#444;opacity:0.8}label{display:flex;align-items:center;opacity:0}button{position:absolute;inset:0px;width:100%;height:100%;margin:0px;padding:0px;border:0px;outline:0px;clip:rect(0px, 0px, 0px, 0px);opacity:0;overflow:hidden;appearance:none}.select-icon{position:relative;opacity:.33;width:16px;height:16px;line-height:16px}.select-text{flex:1;min-width:16px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{position:absolute;left:3px;top:50%;margin-top:-2px;width:0px;height:0px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentcolor;pointer-events:none}label{left:0px;top:0px;margin:0px;position:absolute;width:100%;height:100%;border:0px;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}";

const AiSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aiChange = index.createEvent(this, "aiChange", 7);
    this.aiCancel = index.createEvent(this, "aiCancel", 7);
    this.aiFocus = index.createEvent(this, "aiFocus", 7);
    this.aiBlur = index.createEvent(this, "aiBlur", 7);
    this.aiStyle = index.createEvent(this, "aiStyle", 7);
    this.inputId = `ai-sel-${selectIds++}`;
    this.didInit = false;
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
    this.emitStyle();
    if (this.didInit) {
      this.aiChange.emit({
        value: this.value,
      });
    }
  }
  async connectedCallback() {
    console.log('this.value', this.value);
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
  componentDidLoad() {
    this.didInit = true;
  }
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
    const value = this.value;
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
        value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: () => {
          this.value = value;
          this.close();
        }
      };
    });
    return popoverOptions;
  }
  async openPopover(ev) {
    const value = this.value;
    const popoverOpts = {
      component: 'ai-select-popover',
      cssClass: ['select-popover'],
      event: ev,
      componentProps: {
        value,
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
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ai-select-option'));
  }
  getText() {
    return generateText(this.childOpts, this.value, this.compareWith);
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
    "value": ["valueChanged"]
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
  const value = el.value;
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
