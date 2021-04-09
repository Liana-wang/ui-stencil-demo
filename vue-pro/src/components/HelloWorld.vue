<template>
  <div class="hello">
    <div class="item">
      <span>姓名：</span>
      <AiInput placeholder="请输入..." @aiChange="onAiInput" :value="name" />
      <AiButton
        @aiClick="onClick"
        :disabled.prop="!name"
        :btn-value.prop="{ id: '111', text: 'aaa' }"
      >
        确定
      </AiButton>
      <p v-if="isConfirm && name">Welcome! {{ name }}</p>
      <div style="margin-top: 20px">
        <span>联动：</span>
        <AiInput placeholder="请输入..." @aiChange="onAiInput" :value="name" />
      </div>
    </div>
    <div class="item">
      <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div class="select">
        <AiSelect
          :selected.prop="selected"
          @aiChange="onSelectChange"
          compare-with="id"
          placeholder="请选择"
        >
          <AiSelectOption
            v-for="option in options"
            :option.prop="option"
            :key="option.id"
          >
            {{ option.text }}
          </AiSelectOption>
        </AiSelect>
      </div>
    </div>
    <div class="item">
      <AiStringfy :data="options"></AiStringfy>
    </div>
    <hr />
    <BtnTest />
    <hr />
    <InputTest />
  </div>
</template>

<script>
import {
  AiButton,
  AiInput,
  AiSelect,
  AiSelectOption,
  AiStringfy,
} from "@ai.s/ui-components-vue";
import BtnTest from "./BtnTest";
import InputTest from "./InputTest";

export default {
  name: "HelloWorld",
  components: {
    AiButton,
    AiInput,
    AiSelect,
    AiSelectOption,
    AiStringfy,
    BtnTest,
    InputTest,
  },
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
        id: "44",
        text: "JavaScript",
      },
    };
  },
  methods: {
    onClick: function (event) {
      console.log(event);
      this.isConfirm = true;
    },
    onAiInput: function (event) {
      this.name = event.target.value;
      console.log("input", this.name);

      if (this.isConfirm) {
        this.isConfirm = false;
      }
    },
    onSelectChange: function ({ selected }) {
      this.selected = selected;
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
