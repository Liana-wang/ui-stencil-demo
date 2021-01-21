# ai-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default  |
| ------------- | ------------- | ----------- | --------- | -------- |
| `disabled`    | `disabled`    | 是否禁用        | `boolean` | `false`  |
| `placeholder` | `placeholder` | 预设文案        | `string`  | `''`     |
| `readonly`    | `readonly`    | 是否只读        | `boolean` | `false`  |
| `type`        | `type`        | 类型          | `string`  | `'text'` |
| `value`       | `value`       | 输入值         | `string`  | `''`     |


## Events

| Event      | Description | Type                         |
| ---------- | ----------- | ---------------------------- |
| `aiBlur`   | 失焦          | `CustomEvent<void>`          |
| `aiChange` | 值改变         | `CustomEvent<any>`           |
| `aiFocus`  | 聚焦          | `CustomEvent<void>`          |
| `aiInput`  | 改变值         | `CustomEvent<KeyboardEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
