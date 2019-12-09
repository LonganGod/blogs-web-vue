<template>
  <div class="life_box">
    <web-Header :isScroll="false"></web-Header>
    <web-article-list :isScroll="false" :articleConfig="articleConfig"></web-article-list>
    <web-Footer></web-Footer>
  </div>
</template>

<script>
  import web_header from "../../components/web_header"
  import web_footer from "../../components/web_footer"
  import web_article_list from "../../components/web_article_list"

  export default {
    name: "life",
    components: {
      'web-Header': web_header,
      'web-Footer': web_footer,
      'web-article-list': web_article_list
    },
    data() {
      return {
        articleConfig: {
          cateId: this.$route.query.cateId,
          pageNum: 1,
          articleNum: 5
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .life_box {
    .main_articles {
      margin-top: -80px;
    }
  }
</style>
