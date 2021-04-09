<template>
  <div class="hello">
    <h3>input demo</h3>
    <AiInput placeholder="请输入" />
  </div>
</template>

<script>
import { AiInput } from "@ai.s/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
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
    onClick(event) {
      this.count += 1;
      console.log(event);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding: 10px;
  text-align: center;
}
</style>
