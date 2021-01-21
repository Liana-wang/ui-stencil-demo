<template>
  <div class="hello">
    <div class="item">
      <span>姓名：</span>
      <AiInput
        placeholder="请输入姓名..."
        @aiChange="onAiInput"
        :value="name"
      />
      <div style="margin-top: 20px">
        <span>住址：</span>
        <AiInput
          placeholder="请输入住址..."
          @aiInput="changeAddress"
          :value="address"
        />
      </div>
      <div>
        <AiButton @aiClick="onClick" :disabled="!name || !address">
          确定
        </AiButton>
        <AiButton @aiClick="reset"> 重置 </AiButton>
        <p v-if="isConfirm && name">
          Welcome! {{ name }}, 您的地址是：{{ address }}
        </p>
      </div>
    </div>
    <div class="item">
      <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div class="select">
        <AiSelect
          :selected="selected"
          @aiChange="onSelectChange"
          compare-with="id"
          placeholder="请选择"
        >
          <AiSelectOption
            v-for="option in options"
            :option="option"
            :key="option.id"
          >
            {{ option.text }}
          </AiSelectOption>
        </AiSelect>
      </div>
    </div>
    <AiStringfy :data="options" />
  </div>
</template>

<script>
import {
  AiButton,
  AiInput,
  AiSelect,
  AiSelectOption,
  AiStringfy,
} from "@ai/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    AiButton,
    AiInput,
    AiSelect,
    AiSelectOption,
    AiStringfy,
  },
  data() {
    return {
      name: "",
      address: "",
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
    onAiInput(event) {
      console.log("input", event);
      this.name = event.target.value;

      if (this.isConfirm) {
        this.isConfirm = false;
      }
    },
    changeAddress(event) {
      this.address = event.target.value;
    },
    onClick(event) {
      console.log(event);
      this.isConfirm = true;
    },
    reset() {
      this.name = "";
      this.address = "";
      this.isConfirm = false;
    },
    onSelectChange(event) {
      console.log(event);
      this.selected = event.detail.selected;
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

.select {
  width: 200px;
  height: 30px;
  margin-left: 45%;
}
</style>
