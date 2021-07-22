<template>
  <div class="todolist">
    <h4>TodoList</h4>
    <!-- webpack会把大写的组件编译成todo-head -->
    <TodoHead v-on:add="addItem"></TodoHead>
    <TodoBody :todolist="todolist"></TodoBody>
  </div>
</template>
<script>
import TodoHead from "./TodoHead.vue";
import TodoBody from "./TodoBody.vue";
import Bus from "./Bus";
import "bootstrap/dist/css/bootstrap.css";

export default {
  data() {
    Bus.$on("complete", this.completeItem);
    Bus.$on("remove", this.removeItem);
    // this.$root.$on("complete", this.completeItem);
    // this.$root.$on("remove", this.removeItem);
    return {
      todolist: [
        {
          id: 1,
          todo: "定个小目标。赚它一个亿越南盾",
          done: false,
          addtime: Date.now() + 1000,
        },
        {
          id: 2,
          todo: "迎娶白富美，走上人生巅峰",
          done: true,
          addtime: Date.now() + 2000,
        },
        {
          id: 3,
          todo: "出任CEO，达到疯癫状态",
          done: false,
          addtime: Date.now() + 3000,
        },
      ],
    };
  },
  components: {
    TodoHead,
    TodoBody,
  },
  methods: {
    addItem(todo) {
      const newItem = {
        id: parseInt(Math.random() * 100000),
        todo,
        done: false,
        addtime: Date.now(),
      };
      this.todolist.unshift(newItem);
    },
    removeItem(id) {
      this.todolist = this.todolist.filter((item) => item.id !== id);
    },
    completeItem(id) {
      this.todolist.forEach((item) => {
        if (item.id === id) {
          item.done = true;
        }
      });
    },
  },
};
</script>
<style>
</style>