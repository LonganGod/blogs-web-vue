<template>
  <div class="home_box">
    <div class="main_nav" :style="isScroll0 ? {} : {height: '120px', opacity: 1}">
    </div>
    <div class="main_title" :style="main_title_style">
      <div class="main_title_logo" :style="isScroll0 ? {} : {opacity: 0}">
        <span class="iconfont icon-zuanshi"></span>
      </div>
      <div class="main_title_content w" :style="isScroll0 ? {} : {opacity: 0}">
        <h1>越学习，越发现自己的无知</h1>
        <p>光看别人的技术文档是不够的，提到的一些概念的东西也未必理解，因此还是需要动手去做一下demo，自然就能理解这个概念。</p>
      </div>
      <div class="main_title_next" :style="isScroll0 ? {} : {opacity: 0}">
        <i
          :class="arrayOpacity % 3 == 1 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"
        ></i>
        <i
          :class="arrayOpacity % 3 == 2 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"
        ></i>
        <i
          :class="arrayOpacity % 3 == 0 ? ['el-icon-arrow-down'] : ['el-icon-arrow-down', 'opacity']"
        ></i>
      </div>
    </div>
    <div class="main_articles w" :style="isScroll0 ? {} : {opacity: 1, transform: 'translateY(-80px)'}"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {},
  mounted() {
    setInterval(() => {
      this.arrayOpacity++;
    }, 400);
    window.addEventListener("scroll", this.pageScroll);
  },
  data() {
    return {
      main_title_style: {
        height: window.innerHeight + "px"
      },
      arrayOpacity: 1,
      isScroll0: true
    };
  },
  methods: {
    pageScroll(e) {
      console.log(window.scrollY);
      if (window.scrollY >= 10) {
        this.isScroll0 = false;
        this.main_title_style = {
          height: "600px"
        };
      } else {
        this.isScroll0 = true;
        this.main_title_style = {
          height: window.innerHeight + "px"
        };
      }
    }
  }
};
</script>

<style lang="less">
.main_nav {
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 180px;
  background-color: rgba(0, 0, 0, .65);
  opacity: 0;
  transition: all .5s;
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
    transition: all .3s;
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
  transition: all .5s;
  opacity: 0;
}
</style>