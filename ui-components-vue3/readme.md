## 构建ui-components-vue3

1、yarn install

2、yarn build

## 使用ui-components-vue3

1、在main.js中引入插件：

```js
import { createApp } from "vue";
import App from "./App.vue";

import { AiVue3 } from '@ai.s/ui-components-vue3'

createApp(App).use(AiVue3, '#app');
```

2、在组件中使用

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