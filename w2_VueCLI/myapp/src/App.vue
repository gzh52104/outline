<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
    <!-- <HelloWorld/> -->
    <Todolist />
    <Lifecycle />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Todolist from "./components/TodoList.vue";
import Lifecycle from "./components/Lifecycle.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Todolist,
    Lifecycle,
  },
  // beforeCreate() {
  //   console.log("App.beforeCreate");
  // },
  // created() {
  //   console.log("App.created");
  // },
  // beforeMount() {
  //   console.log("App.beforeMount");
  // },
  // mounted() {
  //   console.log("App.mounted");
  // },
  // beforeUpdate() {
  //   console.log("App.beforeUpdate");
  // },
  // updated() {
  //   console.log("App.updated");
  // },
};
</script>

<style>
</style>
