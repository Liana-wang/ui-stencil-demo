## 构建ui-components-angular

1、yarn install  安装依赖

2、yarn build  构建

## 在angular项目中使用ui-components-angular

1、在app.module中导入
```ts
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

2、在template中使用

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'btn-test',
    template: '<div><ai-button [type]="primary"></ai-button>></div>',
    styleUrls: []
})
export class BtnTest {

}

```