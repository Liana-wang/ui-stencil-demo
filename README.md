# ui-stencil-demo

> A UI demo

## Build Setup

``` bash
# 构建ui组件库
cd ui-components
yarn install   // 安装依赖
yarn buid      // 构建根据outtarget生成react, vue, angular的ui库
yarn link      // 创建软连接

# 生成框架对应的uipackage 以react为例
cd ui-components-react
yarn install        // 安装依赖
yarn link @ai/ui-components   // 引入@ai/ui-components库
yarn build     // 构建dist目录
yarn link      // 创建软连接

# 在项目中使用ui-components 以react为例
cd react-pro
yarn install
yarn link @ai/ui-components-react
yarn start
```
