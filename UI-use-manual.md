# Stencil UI组件使用文档

该文档主要描述如何使用UI组件

本次demo仅在React, Vue2, Vue3, Angualr框架中及原生HTML中做了验证。

# 安装组件库

## React

1. yarn add @ai.s/ui-components-react 或者 npm install @ai.s/ui-components-react
2. 使用组件

```jsx
import { AiButton } from '@ai.s/ui-components-react'
```

## Vue2

1. yarn add @ai.s/ui-components-vue 或者 npm install @ai.s/ui-components-vue
2. 使用组件

```jsx
import { AiButton } from '@ai.s/ui-components-vue'
```

## Vue3

1. yarn add @ai.s/ui-components-vue3 或者 npm install @ai.s/ui-components-vue3
2. 在main.js中导入AiVue3插件
```js
import { createApp } from "vue";
import App from "./App.vue";
import { AiVue3 } from '@ai.s/ui-components-vue3'

createApp(App).use(AiVue3, '#app');
```
3. 使用组件

```jsx
import { AiButton } from '@ai.s/ui-components-vue3'
```

## Angular

1. yarn add @ai.s/ui-components-angular 或者 npm install @ai.s/ui-components-angular
2. 在app.module.ts中导入ComponentNgModule
```js
import { NgModule } from '@angular/core';
import { ComponentNgModule } from '@ai.s/ui-components-angular'

@NgModule({
  ...,
  imports: [
    ...,
    ComponentNgModule,
  ],
  ...,
})
export class AppModule { }
```
3. 使用组件

```html
<ai-button (aiClick)="clickBtn($event)">点击</ai-button>
```

## HTML

使用script标签引入@ai.s/ui-components库后即可使用ui组件

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <title>UI Components</title>

  <script type="module" src="/node_modules/@ai.s/ui-components/ui-components.esm.js"></script>
</head>
<body>
  <ai-button>aaa</ai-button>
</body>
</html>

```

------


# ai-button

## API
### Properties

| Property   | Attribute   | Description                                           | Type                                                 | Default     |
| ---------- | ----------- | ----------------------------------------------------- | ---------------------------------------------------- | ----------- |
| `block`    | `block`     | 适应父元素的宽度                                      | `boolean`                                            | `false`     |
| `danger`   | `danger`    | 警告按钮                                              | `boolean`                                            | `false`     |
| `disabled` | `disabled`  | 是否禁用                                              | `boolean`                                            | `false`     |
| `ghost`    | `ghost`     | 幽灵按钮                                              | `boolean`                                            | `false`     |
| `href`     | `href`      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string`                                             | `-`         |
| `htmlType` | `html-type` | 设置 button 原生的 type 值                            | `string`                                             | `'button'`  |
| `shap`     | `shap`      | 按钮形状                                              | `"circle" | "round"`                                 | `-`         |
| `size`     | `size`      | 尺寸                                                  | `"large" | "small"`                                  | `-`         |
| `target`   | `target`    | 相当于 a 链接的 target 属性，href 存在时生效          | `string`                                             | `-`         |
| `type`     | `type`      | 类型                                                  | `"dashed" | "default" | "link" | "primary" | "text"` | `'default'` |

### Events

| Event     | Description | Type                      |
| --------- | ----------- | ------------------------- |
| `aiClick` | 点击          | `CustomEvent<MouseEvent>` |

## Use in React

###  [demo地址](https://codesandbox.io/s/react-aibutton-te18p?file=/src/BtnExm.js)

```jsx
// 按钮demo
import { useState } from 'react'
import { AiButton } from '@ai.s/ui-components-react'

function BtnTest() {
    const [count, setCount] = useState(0)

    const clickBtn = (event) => {
        setCount(count + 1)
        console.log(event)
    }

    return (
        <div className="item">
		        <div>
                <h3>button demo</h3>
                    <div>
                        <p>点击次数：{count}</p>
                        <p>
                            <span>primary样式: </span>
                            <AiButton onAiClick={clickBtn} type={'primary'}>Primary Btn</AiButton>
                        </p>
                    </div>
        		</div>
        </div>
    );
}

export default BtnTest;

```



## Use in Vue

### Vue2 [demo地址](https://codesandbox.io/s/vue-aibutton-5mujf?file=/src/components/BtnExm.vue)
```vue
<template>
  <div>
    <p>点击次数：{{ count }}</p>
    <p>
      <span>primary样式：</span>
      <AiButton @aiClick="onClick" :type="'primary'"> Primary Btn </AiButton>
    </p>
  </div>
</template>

<script>
import { AiButton } from "@ai.s/ui-components-vue";

export default {
  name: "BtnTest",
  components: {
    AiButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick: function (event) {
      console.log(event);
      this.count += 1;
    },
  },
};
</script>

```

### Vue3 [demo地址](https://codesandbox.io/s/vue3-aibutton-1hey2?file=/src/components/BtnExm.vue)

```vue
<template>
    <div>
        <p>点击次数：{{ count }}</p>
        <p>
            <span>primary样式：</span>
            <AiButton @aiClick="onClick" :type="'primary'">Primary Btn</AiButton>
        </p>
    </div>
</template>

<script>
import { AiButton } from "@ai.s/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BtnTest",
  components: {
    AiButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick(event) {
      this.count += 1;
      console.log(event);
    },
  },
});
</script>

```

## Use in Angular

### [demo地址](https://codesandbox.io/s/ng-aibutton-8yees?file=/src/app/app.component.html)

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'btn-test',
    template: '<div><p>{{count}}</p><ai-button (aiClick)="onClick($event)">点击</ai-button></div>',
    styleUrls: []
})
export class BtnTest {
    count = 0

    onClick(event: any) {
        console.log(event)
        this.count += 1
    }
}

```

## Use in Html

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <title>UI Components</title>

  <script type="module" src="/node_modules/@ai.s/ui-components/ui-components.esm.js"></script>
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

------



# ai-input

## API 
### Properties

| Property       | Attribute       | Description   | Type      | Default     |
| -------------- | --------------- | ------------- | --------- | ----------- |
| `allowClear`   | `allow-clear`   | 可以点击清除图标删除内容  | `boolean` | `-` |
| `bordered`     | `bordered`      | 是否有边框         | `boolean` | `true`      |
| `defaultValue` | `default-value` | 输入框默认内容       | `string`  | `-` |
| `disabled`     | `disabled`      | 是否禁用          | `boolean` | `false`     |
| `hasPrefix`    | `has-prefix`    | 是否带有前缀的 input | `boolean` | `-` |
| `hasSuffix`    | --              | 是否带有后缀的 input | `Element` | `-` |
| `maxLength`    | `max-length`    | 最大长度          | `number`  | `-` |
| `placeholder`  | `placeholder`   | 预设文案          | `string`  | `''`        |
| `readonly`     | `readonly`      | 是否只读          | `boolean` | `false`     |
| `value`        | `value`         | 输入值           | `string`  | `''`        |

### Events

| Event          | Description | Type                         |
| -------------- | ----------- | ---------------------------- |
| `aiBlur`       | 失焦          | `CustomEvent<MouseEvent>`    |
| `aiChange`     | 值改变         | `CustomEvent<any>`           |
| `aiFocus`      | 聚焦          | `CustomEvent<MouseEvent>`    |
| `aiInput`      | 改变值         | `CustomEvent<KeyboardEvent>` |
| `aiPressEnter` | 按下回车的回调     | `CustomEvent<KeyboardEvent>` |

## Use in React

### [demo地址](https://codesandbox.io/s/react-aiinput-oqp0n?file=/src/InputExm.js:161-162)

```jsx
// 输入框demo
import { useState } from 'react'
import { AiInput } from '@ai.s/ui-components-react'

function InputTest() {
    const [inputValue, setInputValue] = useState('')

    return (
      <div>
          <h3>input demo</h3>
          <div>
              <p>输入内容：{inputValue}</p>
              <AiInput 
                placeholder='请输入' 
                value={inputValue}
                onAiChange={({ detail }) => setInputValue(detail.value)} 
                />
          </div>
      </div>
    );
}

export default InputTest;

```


## Use in Vue

### Vue2 [demo地址](https://codesandbox.io/s/vue2-aiinput-2g4cs?file=/src/components/InputExm.vue)

```vue
// 输入框demo
<template>
  <div class="hello">
    <h3>Input demo</h3>
    <AiInput placeholder="请输入" :value="value" @aiChange="changeValue"/>
  </div>
</template>

<script>
import { AiInput } from "@ai.s/ui-components-vue";
export default {
  name: "InputTest",
  components: {
    AiInput,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
      changeValue: function(event) {
          console.log({event})
      }
  },
};
</script>

```

### Vue3 [demo地址](https://codesandbox.io/s/vue3-aiinput-i8wjr?file=/src/components/InputExm.vue)

```vue
<template>
  <div class="hello">
    <h3>input demo</h3>
    <AiInput placeholder="请输入" @aiChange="changeValue" :value="name"/>
  </div>
</template>

<script>

import { AiInput } from "@ai.s/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputTest",
  components: {
    AiInput,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    changeValue(event) {
      console.log(event);
    },
  },
});
</script>

```



## Use in Angular

### [demo地址](https://codesandbox.io/s/ng-aiinput-jci5b?file=/src/app/app.component.html)

```js
import { Component } from '@angular/core';

@Component({
    selector: 'input-test',
    templateUrl: ' <div><ai-input placeholder="请输入" [value]="value" (aiChange)="changeValue($event)"></ai-input></div>',
    styleUrls: []
})
export class InputTest {
    value = ''

    changeValue(event: any) {
        console.log(event)
        this.value = event.detail.value
    }
}

```

## Use in HTML

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <title>UI Components</title>

  <script type="module" src="/node_modules/@ai.s/ui-components/ui-components.esm.js"></script>
  <script nomodule src="/node_modules/@ai.s/ui-components/ui-components.js"></script>
</head>

<body>
  <ai-input></ai-input>
  <ai-input disabled></ai-input>
  <ai-input readonly></ai-input>
  <ai-input id="pre"><span slot="prefix">@</span></ai-input>
</body>
<script type="text/javascript">
  const inputs = document.getElementsByTagName('ai-input')

  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('aiChange', (e) => console.log({e}))
    inputs[i].defaultValue='aaa'
  }

  document.getElementById('pre').hasPrefix = true
</script>

</html>

```

------

# ai-select

## ai-select

### API
#### Properties

| Property      | Attribute      | Description | Type                 | Default     |
| ------------- | -------------- | ----------- | -------------------- | ----------- |
| `compareWith` | `compare-with` | 选中之后做对比的条件  | `Function | string` | `-` |
| `disabled`    | `disabled`     | 是否禁用        | `boolean`            | `false`     |
| `placeholder` | `placeholder`  | 预设文案        | `string`             | `-` |
| `selected`    | `selected`     | 选中的值        | `any`                | `-` |

#### Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `aiBlur`   | 派发失焦事件      | `CustomEvent<void>` |
| `aiCancel` | 派发取消选择的事件   | `CustomEvent<void>` |
| `aiChange` | 派发选中项改变事件   | `CustomEvent<any>`  |
| `aiFocus`  | 派发聚焦事件      | `CustomEvent<void>` |
| `aiStyle`  | 派发样式改变      | `CustomEvent<any>`  |

## ai-select-option

### API

#### Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `disabled` | `disabled` | 是否禁用        | `boolean` | `false`     |
| `option`   | `option`   | 选项的value    | `any`     | `-` |

## Use in React

### [demo地址](https://codesandbox.io/s/react-aiselect-bdtyg?file=/src/SelectExm.js)

```jsx
// Select demo
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
                <p>selected: {this.state.selected && this.state.selected.text}</p>
                <div className={'select-wrapper'}>
                    <AiSelect
                        selected={this.state.selected}
                        placeholder={'请选择'}
                        onAiChange={this.changeSelect}
                        compareWith={'id'}
                    >
                        {
                            this.options.map((option, index) => (
                              <AiSelectOption 
                                option={option} 
                                key={index}
                              >
                                {option.text}
                              </AiSelectOption>
                            ))
                        }
                    </AiSelect>
                </div>
            </div>
        )
    }
}
```



## Use in Vue

### Vue2 [demo地址](https://codesandbox.io/s/vue2-select-dm0vn?file=/src/components/SelectExm.vue)

```vue
<template>
  <div>
      <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div>
        <AiSelect
          :selected.prop="selected"
          @aiChange="onSelectChange"
          compare-with="id"
          placeholder="请选择"
        >
          <AiSelectOption
            v-for="option in options"
            :option.prop="option"
            :key="option.id"
          >
            {{ option.text }}
          </AiSelectOption>
        </AiSelect>
      </div>
    </div>
</template>

<script>
import {
  AiSelect,
  AiSelectOption,
} from "@ai.s/ui-components-vue";

export default {
  name: "HelloWorld",
  components: {
    AiSelect,
    AiSelectOption,
  },
  data() {
    return {
      options: [
        { id: "11", text: "React" },
        { id: "22", text: "Vue" },
        { id: "33", text: "Angular" },
        { id: "44", text: "JavaScript" },
      ],
      selected: { id: "44", text: "JavaScript" },
    };
  },
  methods: {
    onSelectChange: function ({ selected }) {
      this.selected = selected;
    },
  },
};
</script>

```


### Vue3 [demo地址](https://codesandbox.io/s/vue3-select-kcqf2?file=/src/components/SelectExm.vue)

```vue
<template>
  <div>
    <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div class="select">
        <AiSelect
          :selected="selected"
          @aiChange="onSelectChange"
          compare-with="id"
          placeholder="请选择"
        >
          <AiSelectOption
            v-for="option in options"
            :option="option"
            :key="option.id"
          >
            {{ option.text }}
          </AiSelectOption>
        </AiSelect>
      </div>
  </div>
</template>

<script>
import {
  AiSelect,
  AiSelectOption,
} from "@ai.s/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    AiSelect,
    AiSelectOption,
  },
  data() {
    return {
      options: [
        { id: "11", text: "React" },
        { id: "22", text: "Vue" },
        { id: "33", text: "Angular" },
        { id: "44", text: "JavaScript" },
      ],
      selected: { id: "44", text: "JavaScript" },
    };
  },
  methods: {
    onSelectChange(event) {
      console.log(event);
      this.selected = event.detail.selected;
    },
  },
});
</script>

```


## Use in Angular

### [demo地址](https://codesandbox.io/s/ng-aiselect-scnow?file=/src/app/app.component.html)

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h3>下拉框选中项: {{selected.text}}</h3>
    <ai-select 
        [selected]="selected" 
        (aiChange)="onSelectChange($event)" 
        [compareWith]="'id'"
        placeholder="请选择语言"
    >
        <ai-select-option 
            *ngFor="let item of options" 
            [option]="item"
        >
            {{item.text}}
        </ai-select-option>
    </ai-select>
</div>`,
  styleUrls: []
})
export class AppComponent {
  options = [
    { id: "11", text: "React" },
    { id: "22", text: "Vue" },
    { id: "33", text: "Angular" },
    { id: "44", text: "JavaScript" },
  ]

  selected = {
    id: "44",
    text: "JavaScript",
  }

  onSelectChange(event: any) {
    this.selected = event.detail.selected
    console.log('event', event)
  }
}

```

## Use in HTML

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <title>UI Components</title>

  <script type="module" src="/node_modules/@ai.s/ui-components/ui-components.esm.js"></script>
</head>

<body>

  <ai-select selected="aa">
    <ai-select-option option="aa">aa</ai-select-option>
    <ai-select-option option="bb">bb</ai-select-option>
    <ai-select-option option="cc">bb</ai-select-option>
  </ai-select>
</body>
<script type="text/javascript">
  const select = document.getElementsByTagName('ai-select')[0]
  select.addEventListener('aiChange', (ev) => console.log(ev.detail))
</script>

</html>

```
