# ai-popover



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute          | Description    | Type                                | Default     |
| ------------------------ | ------------------ | -------------- | ----------------------------------- | ----------- |
| `backdropDismiss`        | `backdrop-dismiss` | 点击背景时关闭        | `boolean`                           | `true`      |
| `component` _(required)_ | `component`        | 在popover中显示的组件 | `Function \| HTMLElement \| string` | `undefined` |
| `componentProps`         | --                 | 传递给弹出窗的数据      | `{ [key: string]: any; }`           | `undefined` |


## Events

| Event                  | Description  | Type                |
| ---------------------- | ------------ | ------------------- |
| `aiPopoverDidDismiss`  | 派发弹出层已销毁事件   | `CustomEvent<any>`  |
| `aiPopoverDidPresent`  | 派发完成事件       | `CustomEvent<void>` |
| `aiPopoverWillDismiss` | 派发弹出窗口关闭之前事件 | `CustomEvent<any>`  |
| `aiPopoverWillPresent` | 派发弹出之前事件     | `CustomEvent<void>` |


## Methods

### `dismiss(data?: any, role?: string) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `onDidDismiss() => Promise<any>`



#### Returns

Type: `Promise<any>`



### `onWillDismiss() => Promise<any>`



#### Returns

Type: `Promise<any>`



### `present() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
