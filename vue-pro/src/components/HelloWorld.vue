<template>
  <div class="hello">
    <span>姓名：</span>
    <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
    <ai-button @aiClick="onClick" :disabled="!name">确定</ai-button>
    <p v-if="isConfirm && name">Welcome! {{ name }}</p>
    <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
    <div>
      <ai-select :value="selected">
        <ai-select-option
          v-for="option in options"
          :value="option"
          :key="option.id"
          >{{ option.text }}</ai-select-option
        >
        <!-- <ai-select-option value="blonde">Blonde</ai-select-option>
        <ai-select-option value="black">Black</ai-select-option>
        <ai-select-option value="aa">aa</ai-select-option> -->
      </ai-select>
    </div>
  </div>
</template>

<script>
import {
  AiButton,
  AiInput,
  AiSelect,
  AiSelectOption,
} from "@ai/ui-components-vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      isConfirm: false,
      options: [
        {
          id: "11",
          text: "React",
        },
        {
          id: "22",
          text: "Vue",
        },
        {
          id: "33",
          text: "Angular",
        },
        {
          id: "44",
          text: "JavaScript",
        },
      ],
      selected: {
        id: "11",
        text: "React",
      },
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
  watch: {
    name: function (newName, oldName) {
      console.log(newName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
