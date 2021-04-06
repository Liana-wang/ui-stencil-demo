<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <hr />
    <BtnTest />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BtnTest from "./components/BtnTest.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BtnTest,
  },
  data() {
    return {
      value: "aaa",
    };
  },
  methods: {
    onChange: function (event) {
      console.log(event);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ai-button {
  margin: 0 10px;
}
</style>
