<template>
  <tr>
    <th scope="row">{{ idx + 1 }}</th>
    <td>{{ item.todo }}</td>
    <td>{{ item.done ? "是" : "否" }}</td>
    <td>
      <div class="btn-group">
        <!-- <button type="button" class="btn btn-outline-primary btn-sm"
                        @click="completeitem(item.id)">完成</button>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeitem(item.id)">删除</button> -->
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          @click="handleComplete(item.id)"
        >
          完成
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          @click="handleRemove(item.id)"
        >
          删除
        </button>
      </div>
    </td>
  </tr>
</template>
<script>
import Bus from "./Bus";

export default {
  props: ["item", "idx", "removeitem", "completeitem"],
  data() {
    console.log("todoitem", this);
    return {};
  },
  template: "#todoitem",
  methods: {
    handleComplete(id) {
      Bus.$emit("complete", id);
      //   this.$root.$emit("complete", id);
    },
    handleRemove(id) {
      Bus.$emit("remove", id);
      //   this.$root.$emit("remove", id);
    },
  },
};
</script>