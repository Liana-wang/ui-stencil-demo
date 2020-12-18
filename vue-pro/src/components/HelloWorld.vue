<template>
  <div class="hello">
    <span>姓名：</span>
    <ai-input placeholder="请输入..." @aiInput="onAiInput" />
    <ai-button @aiClick="onClick" :disabled="!name">确定</ai-button>
    <p v-if="isConfirm && name">Welcome! {{ name }}</p>
  </div>
</template>

<script>
import { AiButton, AiInput } from "@ai/ui-components-vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      isConfirm: false,
    };
  },
  methods: {
    onClick: function (event) {
      console.log(event);
      this.isConfirm = true;
    },
    onAiInput: function (event) {
      console.log("input", event);
      this.name = event.target.value;

      if (this.isConfirm) {
        this.isConfirm = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
