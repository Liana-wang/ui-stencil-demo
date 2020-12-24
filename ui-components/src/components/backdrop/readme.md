# ai-backdrop



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                          | Type      | Default |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------ | --------- | ------- |
| `stopPropagation` | `stop-propagation` | If `true`, the backdrop will stop propagation on tap.                                | `boolean` | `true`  |
| `tappable`        | `tappable`         | If `true`, the backdrop will can be clicked and will emit the `aiBackdropTap` event. | `boolean` | `true`  |
| `visible`         | `visible`          | If `true`, the backdrop will be visible.                                             | `boolean` | `true`  |


## Events

| Event           | Description                          | Type                |
| --------------- | ------------------------------------ | ------------------- |
| `aiBackdropTap` | Emitted when the backdrop is tapped. | `CustomEvent<void>` |


## Dependencies

### Used by

 - [ai-popover](../popover)

### Graph
```mermaid
graph TD;
  ai-popover --> ai-backdrop
  style ai-backdrop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
