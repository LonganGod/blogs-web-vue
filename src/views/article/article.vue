<template>
  <div class="article_box">
    <web-Header :false="false"></web-Header>
    <div class="article_content about_main w">
      <div class="article_item">
        <p class="article_cate link" @click="goPage('/cate', article.cateId)">
          {{article.cateName}}
        </p>
        <h4 class="article_title">{{article.articleTitle}}</h4>
        <p class="article_info">
          <i class="el-icon-user-solid"></i> {{article.adminName}}
          <i class="el-icon-date"></i> {{article.createTime | dateFormat}}
        </p>
        <p class="article_abstract">{{article.articleAbstract}}</p>
        <div class="article_main" v-html="article.articleContent"></div>
      </div>
    </div>
    <web-Footer></web-Footer>
  </div>
</template>

<script>
  import web_header from "../../components/web_header"
  import web_footer from "../../components/web_footer"

  export default {
    name: "article_box",
    created() {
      this.getData()
    },
    components: {
      'web-Header': web_header,
      'web-Footer': web_footer
    },
    data() {
      return {
        article: {}
      }
    },
    methods: {
      async getData() {
        let {data} = await this.$axios.get('/api/article/getArticleData', {
          params: {
            articleId: this.$route.query.articleId
          }
        })
        this.article = data.result
      },
      // 跳转页面
      goPage(path, cateId) {
        this.$router.push({path: path, query: {cateId: cateId}})
      },
    },
    updated() {
      let preStyle = {
        backgroundColor: '#23241f',
        color: '#fff',
        whiteSpace: 'pre-wrap',
        padding: '15px 30px',
        fontSize: '16px'
      }
      $('.article_main img').css({width: '100%'})
      $('.article_main pre.ql-syntax').css(preStyle)
    }
  }
</script>

<style scoped lang="less">
  .article_content {
    background-color: #fafafa;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.5s;
    padding: 50px 100px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 80px;
    margin-top: -80px;
    text-align: center;

    .article_item {
      .link {
        cursor: pointer;
        transition: all .2s;

        &:hover {
          color: #E2413A;
        }
      }

      .article_cate, .article_info, .article_abstract {
        color: #999;
        font-weight: 400;
        font-size: 15px;
        font-family: "Microsoft YaHei";
      }

      .article_title {
        color: #333;
        font-size: 30px;
        margin: 10px 0;
      }

      .article_info {
        margin-bottom: 25px;

        i:nth-child(2) {
          margin-left: 20px;
        }
      }

      .article_abstract {
        text-align: left;
        padding-left: 40px;
        border-left: 2px solid #E2413A;
        margin-bottom: 30px;
      }

      .article_main {
        text-align: left;
      }
    }
  }
</style>
