<template>
  <div id="app">
    <!-- 显示路由 -->
    <!-- <h1>VueRouter的使用</h1>
    <nav class="nav">
      <ul> -->
    <!-- <router-link
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        active-class="current"
        tag="span"
        replace
        >{{ item.text }}</router-link
      > -->
    <!-- <li v-for="item in menu" :key="item.path" @click="goto(item.path)">
          {{ item.text }}
        </li>
      </ul>
    </nav> -->
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        v-for="item in menu"
        :key="item.path"
        :icon="item.icon"
        :to="item.path"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      menu: [
        { path: "/home", text: "首页", icon: "wap-home-o" },
        { path: "/discover", text: "发现", icon: "search" },
        { path: "/cart", text: "购物车", icon: "cart-o" },
        { path: "/mine", text: "我", icon: "user-o" },
        // { path: "/login", text: "登录",icon:"wap-home-o" },
        // { path: "/reg", text: "注册",icon:"wap-home-o" },
      ],
    };
  },
  components: {},
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
  created() {
    console.log("App", this);
  },
};
</script>

<style>
.nav a {
  margin: 0 10px;
}
.nav .current {
  color: #f00;
}
</style>
