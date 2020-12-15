<template>
  <div class="hello">
    <span>{{msg}}</span>
    <my-button @click="onClick">vue-Click</my-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    onClick: function(event){
      console.log(event)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
