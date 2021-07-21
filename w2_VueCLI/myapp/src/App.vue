<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
    <!-- <HelloWorld/> -->
    <Todolist />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Todolist from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Todolist,
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
</style>
