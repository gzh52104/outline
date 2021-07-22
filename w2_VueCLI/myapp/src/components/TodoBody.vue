<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">代办事项</th>
        <th scope="col">是否完成</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <TodoContent :todolist="todolist"></TodoContent>
    <TodoFoot :todolist="todolist" index="10" :age="31"></TodoFoot>
  </table>
</template>
<script>
import TodoContent from "./TodoContent.vue";
import TodoFoot from "./TodoFoot.vue";
export default {
  // 接受父组件传入数据
  // props中的属性在组件实例化时会自动写入组件实例
  props: ["todolist"],
  data() {
    console.log("todobody", this);
    return {};
  },
  components: {
    TodoContent,
    TodoFoot,
  },
};
</script>