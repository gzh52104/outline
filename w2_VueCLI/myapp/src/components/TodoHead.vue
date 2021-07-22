<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="todo"
      ref="input"
      v-on:keyup.enter="addItem"
    />
    <button class="btn btn-success" v-on:click="addItem">添加</button>
  </div>
</template>
<script>
export default {
  data() {
    console.log("todohead", this);
    return {
      todo: "",
    };
  },
  methods: {
    addItem() {
      this.$emit("add", this.todo);

      // 清空并自动获得焦点
      this.todo = "";

      this.$refs.input.focus();
    },
  },
};
</script>