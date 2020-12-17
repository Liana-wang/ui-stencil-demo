<template>
  <div class="hello">
    <span>{{ msg }}</span>
    <ai-button @click="onClick">Vue-Click</ai-button>
    <ai-input placeholder="请输入..." @aiInput="onAiInput" />
  </div>
</template>

<script>
import { AiButton, AiInput } from "@ai/ui-components-vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    onClick: function (event) {
      console.log(event);
    },
    onAiInput: function (event) {
      console.log("input", event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
