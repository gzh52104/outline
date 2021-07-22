<template>
  <div id="box">
    <h4>组件生命周期</h4>
    count:{{ count }}

    <button @click="changeCount">修改count</button>
    <button @click="destroy">销毁</button>
  </div>
</template>
<script>
export default {
  data() {
    console.log("data");
    return {
      count: 10,
      qty: 1,
      timer: null,
      xhr: null,
    };
  },
  methods: {
    destroy() {
      this.$destroy();
    },
    changeCount() {
      //   this.count++;
      this.count = 10;
      console.log("changeCount", this.count);
    },
  },

  // 生命周期函数（钩子函数）
  // 钩子函数会在特定的阶段自动自行
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  created() {
    console.log("created", this.count);

    // ajax
    this.xhr = new XMLHttpRequest();
    console.log("xhr", xhr);
    // xhr.open()
    // xhr.send()
  },

  beforeMount() {
    const box = document.getElementById("box");
    console.log("beforeMount", this.$el, box);
  },
  mounted() {
    const box = document.getElementById("box");

    console.log("mounted", this.$el, box);

    this.timer = setInterval(() => {
      console.log("666");
    }, 2000);
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },

  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");

    // 清除定时器
    clearInterval(this.timer);

    // 取消ajax请求
    this.xhr.abort();
  },
};

// new Vue({
//   // el:'#app'
// }).$mount('#app')
</script>