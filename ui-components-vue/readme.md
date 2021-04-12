## 构建ui-components-vue

1、yarn install

2、yarn build


## 使用ui-components-vue

```vue
<template>
  <div class="hello">
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