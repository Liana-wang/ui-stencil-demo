# ai-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description   | Type      | Default     |
| -------------- | --------------- | ------------- | --------- | ----------- |
| `allowClear`   | `allow-clear`   | 可以点击清除图标删除内容  | `boolean` | `undefined` |
| `bordered`     | `bordered`      | 是否有边框         | `boolean` | `true`      |
| `defaultValue` | `default-value` | 输入框默认内容       | `string`  | `undefined` |
| `disabled`     | `disabled`      | 是否禁用          | `boolean` | `false`     |
| `hasPrefix`    | `has-prefix`    | 是否带有前缀的 input | `boolean` | `undefined` |
| `hasSuffix`    | --              | 是否带有后缀的 input | `Element` | `undefined` |
| `maxLength`    | `max-length`    | 最大长度          | `number`  | `undefined` |
| `placeholder`  | `placeholder`   | 预设文案          | `string`  | `''`        |
| `readonly`     | `readonly`      | 是否只读          | `boolean` | `false`     |
| `value`        | `value`         | 输入值           | `string`  | `''`        |


## Events

| Event          | Description | Type                         |
| -------------- | ----------- | ---------------------------- |
| `aiBlur`       | 失焦          | `CustomEvent<MouseEvent>`    |
| `aiChange`     | 值改变         | `CustomEvent<any>`           |
| `aiFocus`      | 聚焦          | `CustomEvent<MouseEvent>`    |
| `aiInput`      | 改变值         | `CustomEvent<KeyboardEvent>` |
| `aiPressEnter` | 按下回车的回调     | `CustomEvent<KeyboardEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
