<template>
  <div class="hello">
    <div class="item">
      <span>姓名：</span>
      <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
      <ai-button
        @aiClick="onClick"
        :disabled="!name"
        :value="{ id: '11', text: 'assdas' }"
        >确定</ai-button
      >
      <p v-if="isConfirm && name">Welcome! {{ name }}</p>
      <div style="margin-top: 20px">
        <span>联动：</span>
        <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
      </div>
    </div>
    <div class="item">
      <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div class="select">
        <ai-select
          :value="selected"
          @aiChange="onSelectChange"
          compare-with="id"
        >
          <ai-select-option
            v-for="option in options"
            :value="option"
            :key="option.id"
          >
            {{ option.text }}
          </ai-select-option>
        </ai-select>
      </div>
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
    onSelectChange: function (Event) {
      console.log(event);
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
.item {
  padding: 10px;
  text-align: center;
}

.select {
  width: 200px;
  height: 30px;
  margin-left: 45%;
}
</style>
