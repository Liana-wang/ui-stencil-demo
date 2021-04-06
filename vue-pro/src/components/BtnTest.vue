<template>
  <div class="hello">
    <p>点击次数：{{ count }}</p>
    <p>
      <span>default样式：</span>
      <AiButton @aiClick="onClick"> Default Btn </AiButton>
      <AiButton @aiClick="onClick" :disabled="true"> Default Btn </AiButton>
      <span>default危险：</span>
      <AiButton @aiClick="onClick" :danger="true"> Default Btn </AiButton>
      <AiButton @aiClick="onClick" :disabled="true" :danger="true">
        Default Btn
      </AiButton>
    </p>
    <p>
      <span>primary样式：</span>
      <AiButton @aiClick="onClick" :type="'primary'"> Primary Btn </AiButton>
      <AiButton @aiClick="onClick" :disabled="true" :type="'primary'">
        Primary Btn
      </AiButton>
      <span>primary危险：</span>
      <AiButton @aiClick="onClick" :danger="true" :type="'primary'">
        Primary Btn
      </AiButton>
      <AiButton
        @aiClick="onClick"
        :disabled="true"
        :danger="true"
        :type="'primary'"
      >
        Primary Btn
      </AiButton>
    </p>
    <p>
      <span>dashed样式：</span>
      <AiButton @aiClick="onClick" :type="'dashed'"> Dashed Btn </AiButton>
      <AiButton @aiClick="onClick" :disabled="true" :type="'dashed'">
        Dashed Btn
      </AiButton>
      <span>dashed危险：</span>
      <AiButton @aiClick="onClick" :danger="true" :type="'dashed'">
        Dashed Btn
      </AiButton>
      <AiButton
        @aiClick="onClick"
        :disabled="true"
        :danger="true"
        :type="'dashed'"
      >
        Dashed Btn
      </AiButton>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ai-button {
  margin: 0 10px;
}
</style>
