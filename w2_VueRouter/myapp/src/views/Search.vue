<template>
  <div>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      shape="round"
      @search="search"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in datalist" :key="item" :title="item" />
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      keyword: "",
      datalist: ["吴亦凡事件", "吴亦凡被诈骗"],
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    onLoad() {
      console.log("onLoad");
    },
  },
  created() {
    console.log("Search", this.$route);
    this.keyword = this.$route.query.keyword;

    // ajax请求
  },
};
</script>