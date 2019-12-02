<template>
  <div class="home_box">
    <div class="main_nav clearfix">
      <div class="logo left">
        <img class="left" src="../../assets/images/logo.png" />
        <span class="left">个人博客</span>
      </div>
      <div class="nav_list right">
        <div class="nav_icon right" @click="showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav_list_ul right">
          <li :class="item.id == selectedNav ? ['nav_item', 'left', 'select'] : ['nav_item' ,'left']"
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
    <div class="main_articles w"></div>
  </div>
</template>

<script>
  export default {
    name: "home",
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
        selectedNav: 1
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
        $('html, body').scrollTop(100)
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
        transform: translateY(-20px);
        transition: all .3s;
        opacity: 0;

        .nav_item {
          color: #fff;
          cursor: pointer;
          margin: 0 20px;
          font-size: 18px;
          letter-spacing: 3px;
          position: relative;
        }

        .nav_item.select:before {
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
  }
</style>
