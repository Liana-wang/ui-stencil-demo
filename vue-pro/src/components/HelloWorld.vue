<template>
  <div class="hello">
    <!-- <div class="item">
      <span>姓名：</span>
      <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
      <AiButton
        @aiClick="onClick"
        :disabled="!name"
        :value="{ id: '111', text: 'aaa' }"
      >
        确定
      </AiButton>
      <p v-if="isConfirm && name">Welcome! {{ name }}</p>
      <div style="margin-top: 20px">
        <span>联动：</span>
        <ai-input placeholder="请输入..." @aiInput="onAiInput" :value="name" />
      </div>
    </div> -->
    <div class="item">
      <p>选中项为：{{ selected ? selected.text : "" }}</p>
      <div class="select">
        <AiSelect
          :value="selected"
          @aiChange="onSelectChange"
          compare-with="id"
          placeholder="请选择"
        >
          <AiSelectOption
            v-for="option in options"
            :value="option"
            :key="option.id"
          >
            {{ option.text }}
          </AiSelectOption>
        </AiSelect>
      </div>
    </div>
    <!-- <div class="item">
      <my-button :value.prop="{ id: '111', text: 'aaa' }">测试</my-button>
    </div> -->
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
  components: {
    AiButton,
    AiInput,
    AiSelect,
    AiSelectOption,
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
