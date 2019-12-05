<template>
  <div class="home_box">
    <web-Header :hash="hash"></web-Header>
    <web-article-list :hash="hash"></web-article-list>
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
        hash: location.hash.split('#')[1]
      }
    }
  };
</script>

<style scoped lang="less">
</style>
