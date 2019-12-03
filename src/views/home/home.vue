<template>
  <div class="home_box">
    <div class="main_nav clearfix">
      <div class="logo left">
        <img class="left" src="../../assets/images/logo.png" />
        <span class="left">个人博客</span>
      </div>
      <div class="nav_list right">
        <!--<div class="nav_icon right" @click="showNav">-->
        <!--  <span></span>-->
        <!--  <span></span>-->
        <!--  <span></span>-->
        <!--</div>-->
        <ul class="nav_list_ul right">
          <li :class="item.id == selectedNav ? ['nav_item', 'left', 'active'] : ['nav_item' ,'left']"
              v-for="item in navList" @click="goPage(item.navPath)" :key="item.id">
            {{item.navName}}
          </li>
        </ul>
      </div>
    </div>
    <div class="main_title" :style="main_title_style">
      <div class="main_title_logo">
        <span class="iconfont icon-zuanshi"></span>
      </div>
      <div class="main_title_content w">
        <h1>越学习，越发现自己的无知</h1>
        <p>光看别人的技术文档是不够的，提到的一些概念的东西也未必理解，因此还是需要动手去做一下demo，自然就能理解这个概念。</p>
      </div>
      <div class="main_title_next" @click="goNext">
        <i :class="arrayOpacity % 3 == 1 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"></i>
        <i :class="arrayOpacity % 3 == 2 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"></i>
        <i :class="arrayOpacity % 3 == 0 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"></i>
      </div>
    </div>
    <div class="main_articles w">
      <div class="article_list">
        <div v-for="item in articleList" class="article_item">
          <p class="article_cate link">{{item.articleCate}}</p>
          <h4 class="article_title link">{{item.articleName}}</h4>
          <p class="article_info">
            <i class="el-icon-user-solid"></i> {{item.articleWriter}}
            <i class="el-icon-date"></i> {{item.createTime}}
          </p>
          <div class="article_img">
            <img :src="item.articleImg" alt="">
          </div>
          <p class="article_abstract">{{item.articleAbstract}}</p>
          <div class="article_more">
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
    <web-Footer></web-Footer>
  </div>
</template>

<script>
  import web_Footer from '../../components/web_footer'

  export default {
    name: "home",
    components: {
      'web-Footer': web_Footer
    },
    created() {
    },
    mounted() {
      setInterval(() => {
        this.arrayOpacity++;
      }, 400)
      window.addEventListener('scroll', this.pageScroll)
    },
    data() {
      return {
        main_title_style: {
          height: window.innerHeight + "px"
        },
        arrayOpacity: 1,
        isShowNav: false,
        navList: [
          {
            id: 1,
            navName: '首页',
            navPath: '/'
          },
          {
            id: 2,
            navName: '关于我',
            navPath: '/'
          },
          {
            id: 3,
            navName: '慢生活',
            navPath: '/'
          },
          {
            id: 4,
            navName: '学无止境',
            navPath: '/'
          },
          {
            id: 5,
            navName: '时间轴',
            navPath: '/'
          },
          {
            id: 6,
            navName: '留言',
            navPath: '/'
          },
        ],
        selectedNav: 1,
        articleList: [
          {
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-1.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-2.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-3.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-4.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-5.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../../imgService/article-6.jpg'),
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
      // 清除样式-动画
      removeStyle(els) {
        for (let i = 0; i < els.length; i++) {
          els[i].removeAttr("style")
        }
      },
      // 滚动事件
      pageScroll() {
        if (window.scrollY >= 10) {
          $(".main_nav").css({height: "120px", opacity: 1});
          $(".main_title_logo").css({opacity: 0});
          $(".main_title_content").css({opacity: 0});
          $(".main_title_next").css({opacity: 0});
          $(".main_articles").css({opacity: 1, transform: "translateY(-80px)"});
          this.main_title_style = {
            height: "600px"
          };
        } else {
          this.removeStyle([
            $(".main_nav"),
            $(".main_title_logo"),
            $(".main_title_content"),
            $(".main_title_next"),
            $(".main_articles"),
            $('.nav_icon span'),
            $('.nav_list_ul')
          ])
          this.isShowNav = false
          this.main_title_style = {
            height: window.innerHeight + "px"
          }
        }
      },
      // 展示导航
      showNav() {
        this.isShowNav = !this.isShowNav
        if (this.isShowNav) {
          $('.nav_icon span').eq(1).css({transform: 'translate(100%, -50%)', opacity: 0})
          $('.nav_icon span').eq(0).css({transform: 'rotate(45deg)'})
          $('.nav_icon span').eq(2).css({transform: 'rotate(-45deg)'})
          $('.nav_list_ul').css({transform: 'translateY(0px)', opacity: 1})
        } else {
          this.removeStyle([$('.nav_icon span'), $('.nav_list_ul')])
        }
      },
      // 跳转页面
      goPage(path) {
        this.$router.push(path)
      },
      // 向下滚动
      goNext() {
        $('html, body').animate({
          scrollTop: 100
        }, 300)
      }
    }
  };
</script>

<style scoped lang="less">
  .main_nav {
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 180px;
    background-color: rgba(0, 0, 0, 0.65);
    opacity: 0;
    transition: all 0.5s;
    box-sizing: border-box;
    padding: 35px 150px;

    .logo {
      height: 50px;

      img {
        height: 100%;
      }

      span {
        margin-left: 15px;
        line-height: 60px;
        font-size: 30px;
        color: #fff;
      }
    }

    .nav_list {
      line-height: 50px;

      .nav_icon {
        width: 40px;
        height: 32px;
        position: relative;
        margin-top: 10px;
        cursor: pointer;

        span {
          width: 100%;
          height: 3px;
          background-color: #fff;
          border-radius: 3px;
          position: absolute;
          left: 0;
          transform-origin: left;
          transition: all .3s .1s;
        }

        span:nth-child(1) {
          top: 0;
        }

        span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
          transition-delay: 0s;
        }

        span:nth-child(3) {
          bottom: 0;
        }
      }

      .nav_list_ul {
        margin-right: 30px;
        /*transform: translateY(-20px);*/
        transition: all .3s;
        /*opacity: 0;*/

        .nav_item {
          color: #fff;
          cursor: pointer;
          margin: 0 20px;
          font-size: 18px;
          letter-spacing: 3px;
          position: relative;
        }

        .nav_item.active:before {
          content: '';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 5px;
          background-color: #fff;
        }
      }
    }
  }

  .main_title {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/images/bg1.jpg") no-repeat top;
    background-size: cover;
    padding: 200px 0 0;
    box-sizing: border-box;
    transition: all 0.5s;
    position: relative;

    div {
      transition: all 0.3s;
    }

    .main_title_logo {
      width: 118px;
      height: 118px;
      line-height: 118px;
      text-align: center;
      border-radius: 50%;
      margin: 0 auto;
      border: 1.3px solid #fff;
      box-sizing: border-box;

      .iconfont {
        font-size: 48px;
        color: #fff;
        font-weight: 400;
      }
    }

    .main_title_content {
      padding: 70px 100px;
      margin: 80px auto 0;
      border-top: 1.3px solid #fff;
      border-bottom: 1.3px solid #fff;
      box-sizing: border-box;
      position: relative;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        width: 1.3px;
        height: 81px;
        background-color: #fff;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
      }

      h1 {
        font-size: 40px;
        font-weight: 400;
        letter-spacing: 5px;
        color: #fff;
        margin-bottom: 30px;
      }

      p {
        line-height: 2;
        font-weight: 200;
        font-size: 18px;
        color: #fff;
      }
    }

    .main_title_next {
      cursor: pointer;
      position: absolute;
      bottom: 60px;
      left: 50%;
      text-align: center;
      transform: translateX(-50%);

      .opacity {
        color: rgba(255, 255, 255, 0.6);
      }

      i {
        display: block;
        color: #fff;
        font-weight: 100;
        font-size: 30px;
        height: 8px;
      }
    }
  }

  .main_articles {
    min-height: 700px;
    background-color: #fafafa;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.5s;
    opacity: 0;
    padding: 50px 100px;
    box-sizing: border-box;
    position: relative;

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

          &:before {
            content: '';
            position: absolute;
            width: 600px;
            height: 1px;
            background-color: #e0e0e0;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            cursor: auto;
            z-index: -1;
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
