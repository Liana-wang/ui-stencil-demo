import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, State, Watch, Method, h } from '@stencil/core';
import { watchForOptions } from '../../utils/watch-options'
import { popoverController } from '../../utils/overlays'

@Component({
  tag: 'ai-select',
  styleUrl: 'select.css',
  shadow: true,
})
export class AiSelect implements ComponentInterface {
  private inputId = `ai-sel-${selectIds++}`;
  private overlay?: any;
  private focusEl?: HTMLButtonElement;
  private mutationO?: MutationObserver;

  @Element() el!: any;

  /**
   * 是否处于展开状态
   */
  @State() isExpanded = false;

  /**
   * 是否禁用
   */
  @Prop() disabled = false;

  /**
   * 预设文案
   */
  @Prop() placeholder?: string | null;

  @Watch('disabled')
  @Watch('placeholder')
  disabledChanged() {
    this.emitStyle();
  }

  /**
   * 选中的值
   */
  @Prop({ mutable: true }) selected?: any | null;

  @Watch('selected')
  valueChanged() {
    this.updateOptions()
    this.emitStyle()
  }

  /**
   * 选中之后做对比的条件
   */
  @Prop() compareWith?: string | Function | null;

  /**
   * 派发选中项改变事件
   */
  @Event() aiChange!: EventEmitter<any>;

  /**
   * 派发取消选择的事件
   */
  @Event() aiCancel!: EventEmitter<void>;

  /**
   * 派发聚焦事件
   */
  @Event() aiFocus!: EventEmitter<void>;

  /**
   * 派发失焦事件
   */
  @Event() aiBlur!: EventEmitter<void>;

  /**
   * 派发样式改变
   */
  @Event() aiStyle!: EventEmitter<any>;

  async connectedCallback() {
    this.updateOptions()
    this.updateOverlayOptions()

    this.emitStyle()

    this.mutationO = watchForOptions(this.el, 'ai-select-option', async () => {
      this.updateOverlayOptions()
    })
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect()

      this.mutationO = undefined
    }
  }

  /**
   * 显示下拉选项
   */
  @Method()
  async open(event?: UIEvent): Promise<any> {
    if (this.disabled || this.isExpanded) {
      return undefined
    }

    const overlay = this.overlay = await this.createOverlay(event)

    this.isExpanded = true

    overlay.onDidDismiss().then(() => {
      this.overlay = undefined

      this.isExpanded = false
      this.setFocus()
    })

    await overlay.present()

    return overlay
  }

  private createOverlay(ev?: UIEvent): Promise<any> {
    return this.openPopover(ev!)
  }

  private updateOverlayOptions(): void {
    const overlay = (this.overlay as any)

    if (!overlay) {
      return
    }
    const childOpts = this.childOpts

    const value = this.selected

    const popover = overlay.querySelector('ai-select-popover')

    if (popover) {
      popover.options = this.createPopoverOptions(childOpts, value)
    }
  }

  private createPopoverOptions(data: ReadonlyArray<any>, selectValue: any): ReadonlyArray<any> {
    const popoverOptions = data.map(option => {
      const value = getOptionValue(option)

      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ')

      const optClass = `${OPTION_CLASS} ${copyClasses}`

      return {
        text: option.textContent || '',
        cssClass: optClass,
        option: value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: () => {
          this.selected = value
          this.aiChange.emit({
            selected: value,
          })
          this.close()
        }
      }
    })

    return popoverOptions
  }

  private async openPopover(ev: UIEvent) {
    const value = this.selected

    const popoverOpts = {
      component: 'ai-select-popover',
      cssClass: ['select-popover'],
      event: ev,
      componentProps: {
        selected: value,
        options: this.createPopoverOptions(this.childOpts, value)
      }
    }

    return popoverController.create(popoverOpts)
  }

  private close(): Promise<boolean> {
    if (!this.overlay) {
      return Promise.resolve(false)
    }

    this.isExpanded = false

    return this.overlay.dismiss()
  }

  private updateOptions() {
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

  private hasValue(): boolean {
    return this.getText() !== '';
  }

  private get childOpts(): ReadonlyArray<any> {
    return Array.from(this.el.querySelectorAll('ai-select-option'));
  }

  private getText(): string {
    return generateText(this.childOpts, this.selected, this.compareWith);
  }

  private setFocus() {
    if (this.focusEl) {
      this.focusEl.focus()
    }
  }

  private emitStyle() {
    this.aiStyle.emit({
      'interactive': true,
      'select': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'interactive-disabled': this.disabled,
      'select-disabled': this.disabled
    })
  }

  private onClick = (ev: UIEvent) => {
    this.setFocus()

    this.open(ev)
  }
  private onFocus = () => {
    this.aiFocus.emit()
  }

  private onBlur = () => {
    this.aiBlur.emit()
  }

  render() {
    const { disabled, inputId, isExpanded, placeholder } = this

    const displayValue = this.getText()

    let addPlaceholderClass = false

    let selectText = displayValue

    if (selectText === '' && placeholder != null) {
      selectText = placeholder
      addPlaceholderClass = true
    }

    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    }

    const textPart = addPlaceholderClass ? 'placeholder' : 'text'

    const displayLabel = selectText

    return (
      <Host
        onClick={this.onClick}
        role="button"
        aria-haspopup="listbox"
        aria-disabled={disabled ? 'true' : null}
        aria-label={displayLabel}
        class={{
          'select-disabled': disabled,
          'ai-focused': isExpanded,
        }}
      >
        <div aria-hidden="true" class={selectTextClasses} part={textPart}>
          {selectText}
        </div>
        <div class="select-icon" role="presentation" part="icon">
          <div class="select-icon-inner"></div>
        </div>
        <label>
          {displayLabel}
        </label>
        <button
          type="button"
          disabled={disabled}
          id={inputId}
          aria-haspopup="listbox"
          aria-expanded={`${isExpanded}`}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(focusEl => this.focusEl = focusEl)}
        ></button>
      </Host>
    );
  }
}

const isOptionSelected = (currentValue: any[] | any, compareValue: any, compareWith?: any) => {
  if (currentValue === undefined) {
    return false
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith))
  } else {
    return compareOptions(currentValue, compareValue, compareWith)
  }
}

const getOptionValue = (el: any) => {
  const value = el.option

  return (value === undefined)
    ? el.textContent || ''
    : value
}

const compareOptions = (currentValue: any, compareValue: any, compareWith: any): boolean => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue)
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith]
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue
  }
}

const generateText = (opts: ReadonlyArray<any>, value: any | any[], compareWith?: any) => {
  if (value === undefined) {
    return ''
  }

  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(', ')
  } else {
    return textForValue(opts, value, compareWith) || ''
  }
}

const textForValue = (opts: ReadonlyArray<any>, value: any, compareWith?: any): string | null => {
  const selectOpt = opts.find(opt => {
    return compareOptions(getOptionValue(opt), value, compareWith);
  })

  return selectOpt
    ? selectOpt.textContent
    : null
}

let selectIds = 0

const OPTION_CLASS = 'select-interface-option';