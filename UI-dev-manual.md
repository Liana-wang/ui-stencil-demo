# Stencil UI组件开发文档

该文档主要描述如何开发UI组件

# 新建组件

框架目录：

```tsx
// Web Component组件库
ui-components/ 
    src/
    	components/  // 组件
    	utils/  // 工具
    	index.html 
		index.ts
    package.json
	stencil.config.ts
	tsconfig.json


// angular目标库
ui-components-angular/
    src/
    	directives/  // ng对web组件的封装
    	component-ng-module.ts // 导出NgModule
		index.ts
	package.json
	tsconfig.json


// react 目标库
ui-components-react/
    src/
    	react-component-lib/  // 封装React组件的工具
    	components.ts  // 导出为React组件
		index.ts
	package.json
	rollup.config.js
	tsconfig.json


// vue2 目标库
ui-components-vue/
    src/
    	vue-component-lib/  // 封装VUE组件的工具
    	index.ts
		proxies.ts  // 导出Vue组件
	package.json
	rollup.config.js
	tsconfig.json


// vue3 目标库
ui-components-vue3/
    src/
    	vue-component-lib/  // 封装VUE组件的工具
	    ai-vue3.ts	// 在Vue3中使用web组件的插件
    	index.ts
		proxies.ts  // 导出Vue组件
	package.json
	rollup.config.js
	tsconfig.json
    
```



以ai-button为例，根据以下步骤进行创建：

## 一、安装依赖库

`yarn install` 安装依赖库

```json
"devDependencies": {
    "@stencil/angular-output-target": "^0.0.1",
    "@stencil/core": "^2.1.2",
    "@stencil/react-output-target": "^0.0.9",
    "@stencil/vue-output-target": "^0.0.3",
    "jest-cli": "26.0.1"
  }
```

注：@stencil/vue-output-target，Vue2版本为"0.0.3"， Vue3版本为"0.2.2"

## 二、创建组件

1. 使用stencil generate (yarn generate)创建组件文件
   根据提示依次填入信息：
   
   * Component tag name (dash-case): ai-button
   * 根据需要选择额外的文件，样式.css, 单元测试.spec.tsx, E2E测试.e2e.ts
   * 生成对应的文件和文件夹：
    ```
    ai-button/
        test/
            ai-button.spec.tsx
        ai-button.css
        ai-button.tsx
    ```
2. 根据需要添加属性和事件
```tsx
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ai-button',
  styleUrl: 'ai-button.css',
  shadow: true,
})
export class AiButton {

  render() {
    return (
      <Host>
        <button><slot></slot></button>
      </Host>
    );
  }
}
```

## 三、调试组件

1. 在stencil.config.ts文件中`outputTargets`可选择`www`类型为输出目标
2. 在scr/index.html中使用创建的组件（ai-button）
3. 使用yarn start启动服务即可

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <title>UI Components</title>

  <script type="module" src="/build/ui-components.esm.js"></script>
  <script nomodule src="/build/ui-components.js"></script>
</head>

<body>
  <p id="count">点击次数: 0</p>
  <ai-button id="btn-1">aaa</ai-button>
  <ai-button type="primary">hhh</ai-button>
</body>
<script type="text/javascript">
  let count = 0
  const btns = document.getElementsByTagName('ai-button')
  for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('aiClick', (e) => {
      document.getElementById('count').innerHTML = `点击次数: ${++count}`; 
      console.log(count)
    })
  }
</script>
</html>
```



## 四、构建框架组件

1. `yarn build` 构建dist并将组件打包为指定目标框架的组件，主要目标有React, Vue2, Vue3, Angular

```tsx
import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ui-components',
  ...
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@ai.s/ui-components',
      directivesProxyFile: '../ui-components-angular/src/directives/proxies.ts'
    }),
    reactOutputTarget({
      componentCorePackage: '@ai.s/ui-components',
      proxiesFile: '../ui-components-react/src/components.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@ai.s/ui-components',
      proxiesFile: '../ui-components-vue/src/proxies.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
```

2. 在各目标组件库内构建dist文件
  ```
  1. cd ui-components-react/ui-components-vue/ui-components-vue3/ui-components-angular
  2. yarn install // 安装@ai.s/ui-components
	"dependencies": {
    	"tslib": "^2.2.0",
    	"@ai.s/ui-components": "^0.0.2"
    },
  3. yarn build // 构建dist文件
  ```

3. 在各个框架项目内引用对应的组件库



## 复杂例子-select

### 使用方法：

```tsx
import * as React from 'react'
import { AiSelect, AiSelectOption } from '@ai.s/ui-components-react'

export default class SelectExm extends React.Component {
    state = {
        selected: {
            id: '22',
            text: 'Vue',
        }
    }

    options = [
        { id: "11", text: "React" },
        { id: "22", text: "Vue" },
        { id: "33", text: "Angular" },
        { id: "44", text: "JavaScript" },
    ]

    changeSelect = (ev) => {
        console.log(ev)
        this.setState({
            selected: ev.detail.selected
        })
    }

    render() {
        return (
            <div>
                <div className={'select-wrapper'}>
                    <AiSelect
                        selected={this.state.selected}
                        placeholder={'请选择'}
                        onAiChange={this.changeSelect}
                        compareWith={'id'}
                    >
                        {
                            this.options.map((option, index) => (
                              <AiSelectOption option={option} key={index}>{option.text}</AiSelectOption>
                            ))
                        }
                    </AiSelect>
                </div>
            </div>
        )
    }
}
```



### 关联组件：

ai-backdrop、ai-popover、ai-select、ai-select-option、ai-select-popover

`ai-select` 接收已选项并显示，触发展开下拉选项

`ai-select-options` 接收下拉选项的值，但不用于显示

`ai-popover` 弹出层，接收ai-backdrop和ai-select-popover

`ai-backdrop` 背景层，点击背景收起下拉选项

`ai-select-popover` 显示下拉选项

### 实现步骤：

1. 触发`ai-select`的onClick事件，创建弹出层ai-popover，将ai-select-popover传给ai-popover

```tsx
// onClick事件
@Method()
async open(event?: UIEvent): Promise<any> {
    if (this.disabled || this.isExpanded) {
      return undefined
    }

    const overlay = this.overlay = await this.createOverlay(event)  // 创建弹出层

    this.isExpanded = true

    await overlay.present()  // 展开弹出层

    return overlay
}

// 创建弹出层
private async createOverlay(ev: UIEvent) {
    const value = this.selected

    const popoverOpts = {
      component: 'ai-select-popover',
      cssClass: ['select-popover'],
      event: ev,
      componentProps: {
        selected: value,
        options: this.createPopoverOptions(this.childOpts, value) // 选项值
      }
    }

    // 创建ai-popover并给ai-popover传入popoverOpts
    return popoverController.create(popoverOpts)
}

// 创建选项值
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
        // 点击选项，更改已选项，关闭弹出层
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

  // 关闭弹出层
  private close(): Promise<boolean> {
    if (!this.overlay) {
      return Promise.resolve(false)
    }

    this.isExpanded = false

    return this.overlay.dismiss()
  }
```

2. 在ai-popover中插入ai-select-popover

```tsx
  /**
   * 弹出popover
   */  
  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return
    }
    const container = this.el.querySelector('.popover-content')
  
    const data = {
      ...this.componentProps,
      popover: this.el
    }

    // 在新建传入的component，并将其插入到container中
    this.usersElement = await attachComponent(container, this.component, ['popover-viewport'], data)

	// 按展开动画展开
    return present(this, enterAnimation, this.event)
  }
  
   /**
   * 关闭popover
   */
  @Method()
  async dismiss(data?: any, role?: string): Promise<boolean> {
    const shouldDismiss = await dismiss(this, data, role, leaveAnimation, this.event)

    if (shouldDismiss) {
      await detachComponent(this.usersElement)
    }

    return shouldDismiss
  }
  
  // 点击背景层，关闭popover
  private onBackdropTap = () => {
    this.dismiss(undefined, 'backdrop');
  }

render() {
    return (
      <Host
        style={{
          zIndex: `${20000 + this.overlayIndex}`,
        }}
        onAiBackdropTap={this.onBackdropTap}
      >
        <ai-backdrop tappable={this.backdropDismiss} />
        <div class="popover-wrapper ai-overlay-wrapper">
           {/* 小箭头 */}
          <div class="popover-arrow"></div>
           {/* 接收内容的容器 */}
          <div class="popover-content"></div>
        </div>
      </Host>
    )
  }
```

3. 在ai-select-popover中显示下拉选项

```tsx
@Prop() options: ReadonlyArray<any> = [];

render() {
    return (
      <Host>
        {
          this.options.map(option =>
            <div 
                class={{ 'item': true, 'selected': option.checked, 'disabled': option.disabled }} 
                onClick={() => option.handler()}  // 点击选项，关闭弹出层
           >
           	   {option.text}
           </div>
          )
        }
      </Host>
    );
  }
```



# 基础知识

## API

### Decorators装饰器

`@Component()` 声明一个web component
`@Prop` 声明暴露出去的property或attribute
`@State` 声明组件的内部状态
`@Watch` 在property和attribute改变时运行的钩子
`@Element` 声明对host元素的引用
`@Mthod` 声明一个公开的方法
`@Event` 声明一个可能被派发的DOM事件
`@Lissten` 监听DOM事件

### 生命周期

`connectedCallback()`
`disconnectedCallback()`
`componentWillLoad()`
`componentDidLoad()`
`componentShouldUpdate(newValue, oldValue, propName): boolean`
`componentWillRender()`
`componentDidRender()`
`componentWillUpdate()`
`componentDidUpdate()`
`render()`

### 其他

`Host` 用于给Host元素本身设置attribute和事件侦听器
`h()` 在render()中将JSX转换为DOM元素
`...`

## @Component()

每个stencil组件都必须使用@Component装饰器，提供HTML tag名称。一般还会使用styleUrl或者stylesUrls

```tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css'
})
export class TodoList {

}

```

@Component(opts: ComponentOptions)

```tsx
export interface ComponentOptions {
  tag: string;  // web component的tag名称，必须全局唯一
  scoped?: boolean;  // 默认为false，如果设置为true，则组件使用范围样式
  shadow?: boolean;  // 默认为false，如果设置为true，则使用shadow-DOM封装
  styleUrl?: string; // 样式对应的.css文件
  styleUrls?: string[] | d.ModeStyles;  // 与styleUrl类似
  styles?: string;  // 包含内联CSS
  assetsDirs?: string[];  // 所需的资源文件夹
  assetsDir?: string;  // 与assetsDirs类似
}

```

## @Prop()

Prop的类型可以是：`number`, `string`, `boolean`, `Object`, `Array`

```tsx
import { Prop } from '@stencil/core';

...
export class TodoList {
  @Prop() color: string;
  @Prop() favoriteNumber: number;
  @Prop() isSelected: boolean;
  @Prop() myHttpService: MyHttpService;
}
```

使用

```tsx
// In HTML
<todo-list color="blue" favorite-number="24" is-selected="true"></todo-list>
```

```tsx
// In JSX
<todo-list color="blue" favoriteNumber={24} isSelected="true"></todo-list>
```

Prop options

@Prop(options?: PropOptions)

```tsx
export interface PropOptions {
  attribute?: string; // attribute名称
  mutable?: boolean;  // 是否是可变的
  reflect?: boolean;  // props映射到attributes
}
```

## @State()

该装饰器用于管理组件内部数据。

使用

```tsx
import { Component, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-toggle-button'
})

export class MyToggleButton {
  @State() open: boolean;

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  render() {
    return <button>
      {this.open ? "On" : "Off"}
    </button>;
  }
}
```

## @Event()

使用该装饰器可指定组件派发的事件。

使用

```tsx
import { Event, EventEmitter } from '@stencil/core';

...
export class TodoList {

  @Event() todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}

```

Event Options

```tsx
export interface EventOptions {
  eventName?: string;  // 事件名称
 
  bubbles?: boolean; // 是否允许冒泡

  cancelable?: boolean; // 是否可取消该事件

  composed?: boolean; // 是否可在阴影DOM和常规DOM之间的边界冒泡
}
```

## @Element()

Element装饰器可返回HTMLElement的实例，则可在此组件内使用标注的DOM方法。

```tsx
import { Element } from '@stencil/core';

...
export class TodoList {

  @Element() el: HTMLElement;

  getListHeight(): number {
    return this.el.getBoundingClientRect().height;
  }
}
```

## Host 元素

宿主元素，可以在渲染函数根部使用，给Host元素本身设置属性和事件侦听器。

```tsx
@Component({tag: 'my-cmp'})
export class MyCmp {
  render() {
    return (
      <Host>
        <h1>Title</h1>
        <p>Message</p>
      </Host>
    );
  }
```

## 数据响应

当Props或State发生改变时，stencil仅比较更改的引用。当更新属性时，会Watch方法，将新旧值传递给该方法，初次加载组件时，不会触发Watch

Exm

```tsx
import { Prop, Watch } from '@stencil/core';

export class LoadingIndicator {
  @Prop() activated: boolean;

  @Watch('activated')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of activated is: ', newValue);
  }
}

```

== 更新Object和Array ==

改变原数组的操作，如push() unshift()等是不会触发组件更新的，需使用像map() filter()等或扩展运算符

## 函数组件

接收props，并将其装换为JSX

```tsx
import { FunctionalComponent, h } from '@stencil/core';

interface HelloProps {
  name: string;
}

export const Hello: FunctionalComponent<HelloProps> = ({ name }) => (
  <h1>Hello, {name}!</h1>
);
```

