<template>
  <div class="article_box">
    <web-Header :false="false"></web-Header>
    <div class="article_content about_main w">
      <div class="article_item">
        <p class="article_cate link" @click="goPage(`/article?articleId=${article.articleId}`)">
          {{article.articleCate}}
        </p>
        <h4 class="article_title">{{article.articleName}}</h4>
        <p class="article_info">
          <i class="el-icon-user-solid"></i> {{article.articleWriter}}
          <i class="el-icon-date"></i> {{article.createTime}}
        </p>
        <p class="article_abstract">{{article.articleAbstract}}</p>
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
    components: {
      'web-Header': web_header,
      'web-Footer': web_footer
    },
    data() {
      return {
        article: {
          articleId: 1,
          articleName: 'GREEN LANTERN FOR GREEN WORLD!',
          articleWriter: 'Farhan Rizvi',
          articleCate: 'NATURE',
          articleLabel: '',
          articleImg: require('../../../../serverImage/article-1.jpg'),
          articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
            ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
            ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
            ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
          createTime: '2019-09-24',
        }
      }
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
    }
  }
</style>
