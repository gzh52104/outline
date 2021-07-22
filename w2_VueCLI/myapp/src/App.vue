<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
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
</style>
