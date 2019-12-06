<template>
  <div class="main_articles w">
    <div class="article_list">
      <div v-for="item in articleList" class="article_item" :key="item.articleId">
        <p class="article_cate link" @click="goPage(`/article?articleId=${item.articleId}`)">{{item.articleCate}}</p>
        <h4 class="article_title link" @click="goPage(`/article?articleId=${item.articleId}`)">{{item.articleName}}</h4>
        <p class="article_info">
          <i class="el-icon-user-solid"></i> {{item.articleWriter}}
          <i class="el-icon-date"></i> {{item.createTime}}
        </p>
        <div class="article_img" @click="goPage(`/article?articleId=${item.articleId}`)">
          <img :src="item.articleImg" alt="">
        </div>
        <p class="article_abstract">{{item.articleAbstract}}</p>
        <div class="article_more" @click="goPage(`/article?articleId=${item.articleId}`)">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    </div>
    <div class="change_page prev_page">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="change_page next_page">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "web_article_list",
    // 是否激活滚动事件
    props: ['isScroll'],
    created() {
      this.getData()
    },
    mounted() {
      window.addEventListener('scroll', this.pageScroll)
      $('html, body').scrollTop(0)
    },
    data() {
      return {
        articleList: [
          {
            articleId: 1,
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-1.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleId: 2,
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-2.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleId: 3,
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-3.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleId: 4,
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-4.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleId: 5,
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-5.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleId: 6,
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../serverImage/article-6.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
        ]
      };
    },
    methods: {
      // 获取文章列表
      async getData() {
        let {data} = await this.$axios.get('/api/article/getArticleList', {
          params: {
            pageNum: 1,
            articleNum: 5
          }
        })
        console.log(data)
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
      goPage(path) {
        this.$router.push(path)
      },
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
