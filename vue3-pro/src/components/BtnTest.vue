<template>
  <div class="hello">
    <div class="item">
      <p>点击次数：{{ count }}</p>
      <div>
        <p>
          <span>default样式：</span>
          <AiButton @aiClick="onClick">Default Btn</AiButton>
          <AiButton @aiClick="onClick" :disabled="true"> Default Btn </AiButton>
          <span>default危险</span>
          <AiButton @aiClick="onClick" :danger="true"> Default Btn </AiButton>
          <AiButton @aiClick="onClick" :disabled="true" :danger="true">
            Default Btn
          </AiButton>
        </p>
        <p>
          <span>primary样式：</span>
          <AiButton @aiClick="onClick" :type="'primary'">Primary Btn</AiButton>
          <AiButton @aiClick="onClick" :type="'primary'" :disabled="true">
            Primary Btn
          </AiButton>
          <span>primary危险</span>
          <AiButton @aiClick="onClick" :type="'primary'" :danger="true">
            Primary Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'primary'"
            :disabled="true"
            :danger="true"
          >
            Primary Btn
          </AiButton>
        </p>
        <p>
          <span>dashed样式：</span>
          <AiButton @aiClick="onClick" :type="'dashed'">Dashed Btn</AiButton>
          <AiButton @aiClick="onClick" :type="'dashed'" :disabled="true">
            Dashed Btn
          </AiButton>
          <span>dashed危险</span>
          <AiButton @aiClick="onClick" :type="'dashed'" :danger="true">
            Dashed Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'dashed'"
            :disabled="true"
            :danger="true"
          >
            Dashed Btn
          </AiButton>
        </p>
        <p>
          <span>text样式：</span>
          <AiButton @aiClick="onClick" :type="'text'">Text Btn</AiButton>
          <AiButton @aiClick="onClick" :type="'text'" :disabled="true">
            Text Btn
          </AiButton>
          <span>text危险</span>
          <AiButton @aiClick="onClick" :type="'text'" :danger="true">
            Text Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'text'"
            :disabled="true"
            :danger="true"
          >
            Text Btn
          </AiButton>
        </p>
        <p>
          <span>link样式：</span>
          <AiButton
            @aiClick="onClick"
            :type="'link'"
            :href="'http://www.baidu.com'"
            :target="'blank'"
          >
            Link Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'link'"
            :href="'http://www.baidu.com'"
            :target="'blank'"
            :disabled="true"
          >
            Link Btn
          </AiButton>
          <span>link危险</span>
          <AiButton
            @aiClick="onClick"
            :type="'link'"
            :href="'http://www.baidu.com'"
            :target="'blank'"
            :danger="true"
          >
            Link Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'link'"
            :href="'http://www.baidu.com'"
            :target="'blank'"
            :disabled="true"
            :danger="true"
          >
            Link Btn
          </AiButton>
        </p>
        <p>
          <span>circle样式：</span>
          <AiButton @aiClick="onClick" :shap="'circle'">C</AiButton>
          <AiButton @aiClick="onClick" :shap="'circle'" :disabled="true">
            C
          </AiButton>
          <span>primary危险</span>
          <AiButton @aiClick="onClick" :shap="'circle'" :danger="true">
            C
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :shap="'circle'"
            :disabled="true"
            :danger="true"
          >
            C
          </AiButton>
        </p>
        <p>
          <span>round样式：</span>
          <AiButton @aiClick="onClick" :shap="'round'" :type="'primary'"
            >Round Btn</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :shap="'round'"
            :type="'primary'"
            :disabled="true"
          >
            Round Btn
          </AiButton>
          <span>primary危险</span>
          <AiButton
            @aiClick="onClick"
            :shap="'round'"
            :type="'primary'"
            :danger="true"
          >
            Round Btn
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :shap="'round'"
            :type="'primary'"
            :disabled="true"
            :danger="true"
          >
            Round Btn
          </AiButton>
        </p>
      </div>
      <div class="ghost-content">
        <p>幽灵按钮</p>
        <p>
          <span>幽灵default：</span>
          <AiButton @aiClick="onClick" :ghost="true">Ghost default</AiButton>
          <AiButton @aiClick="onClick" :ghost="true" :disabled="true">
            Ghost default
          </AiButton>
          <span>default危险</span>
          <AiButton @aiClick="onClick" :ghost="true" :danger="true">
            Ghost default
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost default
          </AiButton>
        </p>
        <p>
          <span>幽灵primary：</span>
          <AiButton @aiClick="onClick" :ghost="true" :type="'primary'"
            >Ghost primary</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'primary'"
            :disabled="true"
          >
            Ghost primary
          </AiButton>
          <span>primary危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'primary'"
            :danger="true"
          >
            Ghost primary
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'primary'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost primary
          </AiButton>
        </p>
        <p>
          <span>幽灵dashed：</span>
          <AiButton @aiClick="onClick" :ghost="true" :type="'dashed'"
            >Ghost dashed</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'dashed'"
            :disabled="true"
          >
            Ghost dashed
          </AiButton>
          <span>dashed危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'dashed'"
            :danger="true"
          >
            Ghost dashed
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'dashed'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost dashed
          </AiButton>
        </p>
        <p>
          <span>幽灵text：</span>
          <AiButton @aiClick="onClick" :ghost="true" :type="'text'"
            >Ghost text</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'text'"
            :disabled="true"
          >
            Ghost text
          </AiButton>
          <span>text危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'text'"
            :danger="true"
          >
            Ghost text
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'text'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost text
          </AiButton>
        </p>
        <p>
          <span>幽灵link：</span>
          <AiButton @aiClick="onClick" :ghost="true" :type="'link'"
            >Ghost link</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'link'"
            :disabled="true"
          >
            Ghost link
          </AiButton>
          <span>link危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :type="'link'"
            :danger="true"
          >
            Ghost link
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :type="'link'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost link
          </AiButton>
        </p>
        <p>
          <span>幽灵circle：</span>
          <AiButton @aiClick="onClick" :ghost="true" :shap="'circle'"
            >G</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :shap="'circle'"
            :disabled="true"
          >
            G
          </AiButton>
          <span>circle危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :shap="'circle'"
            :danger="true"
          >
            G
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :shap="'circle'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            G
          </AiButton>
        </p>
        <p>
          <span>幽灵round：</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :shap="'round'"
            :type="'primary'"
            >Ghost round</AiButton
          >
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :shap="'round'"
            :type="'primary'"
            :disabled="true"
          >
            Ghost round
          </AiButton>
          <span>round危险</span>
          <AiButton
            @aiClick="onClick"
            :ghost="true"
            :shap="'round'"
            :type="'primary'"
            :danger="true"
          >
            Ghost round
          </AiButton>
          <AiButton
            @aiClick="onClick"
            :shap="'round'"
            :type="'primary'"
            :ghost="true"
            :disabled="true"
            :danger="true"
          >
            Ghost round
          </AiButton>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { AiButton } from "@ai.s/ui-components-vue3";
import { defineComponent } from "vue";

export default defineComponent({
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

.ghost-content {
  width: 1000px;
  background-color: rgb(190, 200, 200);
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
