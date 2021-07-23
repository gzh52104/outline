<template>
  <div>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      shape="round"
      disabled
      @click="gotoSearch"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "吴亦凡",
    };
  },
  methods: {
    gotoSearch() {
      // this.$router.push("/search?keyword="+this.keyword);
      // this.$router.push({
      //   path: "/search",
      //   query: { keyword: this.keyword },
      // });
      this.$router.push({
        name: "search",
        query: { keyword: this.keyword },
      });
    },
  },
};
</script>