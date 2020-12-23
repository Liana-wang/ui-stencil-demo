# ai-select



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                 | Default     |
| ------------- | -------------- | ----------- | -------------------- | ----------- |
| `compareWith` | `compare-with` | 选中之后做对比的条件  | `Function \| string` | `undefined` |
| `disabled`    | `disabled`     | 是否禁用        | `boolean`            | `false`     |
| `placeholder` | `placeholder`  | 预设文案        | `string`             | `undefined` |
| `value`       | `value`        | 选中的值        | `any`                | `undefined` |


## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `aiBlur`   | 派发失焦事件      | `CustomEvent<void>` |
| `aiCancel` | 派发取消选择的事件   | `CustomEvent<void>` |
| `aiChange` | 派发选中项改变事件   | `CustomEvent<any>`  |
| `aiFocus`  | 派发聚焦事件      | `CustomEvent<void>` |
| `aiStyle`  | 派发样式改变      | `CustomEvent<any>`  |


## Methods

### `open(event?: UIEvent) => Promise<any>`



#### Returns

Type: `Promise<any>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"icon"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
