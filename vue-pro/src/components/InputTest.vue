<template>
  <div class="hello">
    <h3>Input demo</h3>
    <AiInput placeholder="请输入" />
  </div>
</template>

<script>
import { AiInput } from "@ai.s/ui-components-vue";

export default {
  name: "InputTest",
  components: {
    AiInput,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ai-input {
  margin: 0 10px;
}
</style>
