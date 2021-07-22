<template>
  <tfoot>
    <tr>
      <td colspan="4">
        总数：{{ todolist.length }}，完成：{{ donelist.length }}，未完成：{{
          undonelist.length
        }}
        <br />
        index: {{ index }}, age:{{ age }}
      </td>
    </tr>
  </tfoot>
</template>
<script>
export default {
  // props: ["todolist"],
  props: {
    // todolist: Array, //等效于todolist:{type:Array}
    todolist: {
      type: Array,
      required: true, // 必填
    },
    // index: [Number, String],
    index: {
      type: [Number, String],
      // 基本数据类型默认值
      default: 1,
      // 引用数据类型默认值，必须为函数形式，达到复用效果
      // default:function(){
      //   return {}
      // }
    },
    age: {
      type: Number,
      validator(val) {
        return val >= 18 && val <= 30;
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    donelist() {
      return this.todolist.filter((item) => item.done);
    },
    undonelist() {
      return this.todolist.filter((item) => !item.done);
    },
  },
};
</script>