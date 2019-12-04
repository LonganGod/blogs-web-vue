<template>
  <div class="footer_box w">
    <p class="footer">design by ws | ws15531085321@163.com</p>
    <div class="tool_bar">
      <div class="user_img">
        <img src="../../../serverImage/articleImg-1574843047158.jpg" alt="">
      </div>
      <div class="QR_code" @mouseenter="showQRCode" @mouseleave="hideQRCode">
        <i class="iconfont icon-erweima"></i>
        <div class="QR_code_img">
          <div class="QR_code_img_top">
            <img src="../assets/images/QR_code.png" alt="">
          </div>
          <p class="QR_code_img_bottom">求打赏..</p>
        </div>
      </div>
      <div class="return_top" @click="goTop">
        <i class="el-icon-arrow-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "web_footer",
    mounted() {
      window.addEventListener('scroll', this.pageScroll)
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
          $(".tool_bar").css({opacity: 1, bottom: '200px'});
        } else {
          this.removeStyle([$(".tool_bar")])
        }
      },
      // 展示二维码
      showQRCode() {
        $('.QR_code_img').stop().fadeIn(300)
      },
      // 隐藏二维码
      hideQRCode() {
        $('.QR_code_img').stop().fadeOut(300)
      },
      // 回到顶部
      goTop() {
        $('html, body').animate({
          scrollTop: 0
        }, 300)
      }
    }
  }
</script>

<style scoped lang="less">
  .footer {
    color: #666;
    text-align: center;
    margin: 30px 0;
  }

  .tool_bar {
    width: 60px;
    height: 180px;
    position: fixed;
    z-index: 99999;
    right: 30px;
    bottom: 150px;
    background-color: #fafafa;
    border-radius: 30px 30px 3px 3px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12), 0 1px 6px 0 rgba(0, 0, 0, .12);
    opacity: 0;
    transition: all .5s;

    & > div {
      width: 100%;
      height: 60px;
      text-align: center;
      vertical-align: top;
      box-sizing: border-box;
      padding: 4px;
      position: relative;
    }

    .user_img {
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .QR_code {
      cursor: pointer;
      border-bottom: 1px dashed #333;
      position: relative;

      &:hover {
        i {
          font-size: 35px;
        }
      }

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        font-weight: 400;
        color: #666;
        transition: all .3s;
      }

      .QR_code_img {
        position: absolute;
        left: -20px;
        top: 50%;
        background-color: #fafafa;
        transform: translate(-100%, -50%);
        width: auto;
        height: auto;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12), 0 1px 6px 0 rgba(0, 0, 0, .12);
        padding: 4px;
        display: none;
        /*opacity: 0;*/
        /*transition: all .5s;*/

        &:before, &:after {
          content: '';
          width: 15px;
          height: 15px;
          background-color: #fafafa;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(50%, -50%) rotateZ(45deg);
        }

        &:after {
          z-index: -1;
          box-shadow: 1px -1px 6px 0 rgba(0, 0, 0, .12), 1px -1px 6px 0 rgba(0, 0, 0, .12);
        }

        .QR_code_img_top {
          width: 150px;
          height: 150px;
          background-color: #fafafa;
          padding: 4px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .QR_code_img_bottom {
          border-top: 1px dashed #333;
          padding: 8px 0 5px;
          font-size: 15px;
          color: #9b9b9b;
        }
      }
    }

    .return_top {
      cursor: pointer;

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        font-weight: 400;
        color: #666;
        transition: all .3s;
      }

    }
  }
</style>
