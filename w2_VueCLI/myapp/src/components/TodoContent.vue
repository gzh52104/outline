<template>
  <tbody>
    <!-- <TodoItem
      v-for="(item, idx) in todolist"
      :item="item"
      :idx="idx"
      :removeitem="removeitem"
      :completeitem="completeitem"
      :key="item.id"
    ></TodoItem> -->
    <slot/>
  </tbody>
</template>
<script>
// import TodoItem from "./TodoItem.vue";
export default {
  // props: ["todolist", "removeitem", "completeitem"],
  data() {
    return {};
  },
  // components: {
  //   TodoItem,
  // },
};
</script>