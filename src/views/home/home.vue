<template>
  <div class="home_box">
    <web-Header :isScroll="true"></web-Header>
    <web-article-list :isScroll="true" :articleConfig="articleConfig"></web-article-list>
    <web-Footer></web-Footer>
  </div>
</template>

<script>
  import web_header from "../../components/web_header"
  import web_footer from "../../components/web_footer"
  import web_article_list from "../../components/web_article_list"

  export default {
    name: "home",
    components: {
      'web-Header': web_header,
      'web-Footer': web_footer,
      'web-article-list': web_article_list
    },
    data() {
      return {
        articleConfig: {
          cateId: null,
          pageNum: 1,
          articleNum: 5
        },
      }
    }
  };
</script>

<style scoped lang="less">
</style>
