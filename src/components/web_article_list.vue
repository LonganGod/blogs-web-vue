<template>
  <div class="main_articles w">
    <div class="article_list">
      <div v-for="item in articleList" class="article_item" :key="item.articleId">
        <p class="article_cate link" @click="goPage('/cate', null, item.cateId)">{{item.cateName}}</p>
        <h4 class="article_title link" @click="goPage('/article', item.articleId, null)">
          {{item.articleTitle}}
        </h4>
        <p class="article_info">
          <i class="el-icon-user-solid"></i> {{item.adminName}}
          <i class="el-icon-date"></i> {{item.createTime | dateFormat}}
        </p>
        <div class="article_img" @click="goPage('/article', item.articleId, null)">
          <img :src="item.articleImg" alt="">
        </div>
        <p class="article_abstract">{{item.articleAbstract}}</p>
        <div class="article_more" @click="goPage('/article', item.articleId, null)">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    </div>
    <template v-if="articleConfig.pageNum > 1">
      <div class="change_page prev_page" @click="prev">
        <i class="el-icon-arrow-left"></i>
      </div>
    </template>
    <template v-if="(articleConfig.pageNum * articleConfig.articleNum) < totalArticle">
      <div class="change_page next_page" @click="next">
        <i class="el-icon-arrow-right"></i>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "web_article_list",
    // 是否激活滚动事件
    props: ['isScroll', 'articleConfig'],
    created() {
      this.getData()
    },
    mounted() {
      window.addEventListener('scroll', this.pageScroll)
      $('html, body').scrollTop(0)
    },
    data() {
      return {
        articleList: [],
        totalArticle: 0,
      };
    },
    methods: {
      // 获取文章列表
      async getData() {
        let {data} = await this.$axios.get('/api/article/getArticleList', {
          params: this.articleConfig
        })
        this.articleList = data.result
        this.totalArticle = data.total
      },
      // 清除样式-动画
      removeStyle(els) {
        for (let i = 0; i < els.length; i++) {
          els[i].removeAttr("style")
        }
      },
      // 滚动事件
      pageScroll() {
        if (this.isScroll) {
          if (window.scrollY >= 10) {
            $(".home_box .main_articles").css({opacity: 1, marginTop: '-80px'});
          } else {
            this.removeStyle([$(".home_box .main_articles")])
          }
        }
      },
      // 跳转页面
      goPage(path, articleId, cateId) {
        if (cateId) {
          this.$router.push({path: path, query: {cateId: cateId}})
        } else if (articleId) {
          this.$router.push({path: path, query: {articleId: articleId}})
        }
      },
      // 下一页
      next() {
        this.articleConfig.pageNum++
        this.getData()
        $('html, body').scrollTop(100)
      },
      // 上一页
      prev() {
        this.articleConfig.pageNum--
        this.getData()
        $('html, body').scrollTop(100)
      }
    }
  }
</script>

<style scoped lang="less">
  .main_articles {
    background-color: #fafafa;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.5s;
    padding: 50px 100px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 80px;

    .article_list {
      text-align: center;

      .article_item {
        margin-bottom: 80px;

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

        .article_img {
          cursor: pointer;
          box-shadow: 3px 6px 15px 0 rgba(0, 0, 0, 0.3);
          margin-bottom: 20px;

          img {
            width: 100%;
          }
        }

        .article_abstract {
          text-align: left;
        }

        .article_more {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #E2413A;
          margin: 30px auto 0;
          position: relative;
          cursor: pointer;
          box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, .2);

          &:hover {
            background-color: #e2524b;
          }

          &:before, &:after {
            content: '';
            position: absolute;
            width: 240px;
            height: 1px;
            background-color: #e0e0e0;
            top: 50%;
            cursor: auto;
          }

          &:before {
            left: 0;
            transform: translateX(-100%);
          }

          &:after {
            right: 0;
            transform: translateX(100%);
          }

          i {
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            color: #fff;
            opacity: .8;
            position: absolute;
            top: 52%;
            left: 52%;
            transform: translate(-50%, -50%);
          }
        }

        &:last-child {
          margin-bottom: 20px;
        }
      }
    }

    .change_page {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fafafa;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 -1px 6px 0 rgba(0, 0, 0, 0.12);
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      transition: all .5s;
      cursor: pointer;

      i {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #E2413A;
        position: absolute;
        top: 52%;
        left: 52%;
        transform: translate(-50%, -50%);
        transition: all .5s;
      }

      &:hover {
        background-color: #E2413A;

        i {
          color: #fafafa;
        }
      }
    }

    .prev_page {
      left: 100px;
    }

    .next_page {
      right: 100px;
    }
  }
</style>
