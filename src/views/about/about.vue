<template>
  <div class="about_box">
    <web-header :isScroll="false"></web-header>
    <div class="individual_articles about_main w">
      <div class="article_list clearfix">
        <template v-for="(item, index) in articleList">
          <div :class="['article_item_' + articleNum, 'article_pub', 'clearfix']" :key="item.articleId"
               v-if="index < articleNum" @click="goPage(`/article?articleId=${item.articleId}`)">
            <div class="article_img left">
              <img :src="item.articleImg" alt="">
            </div>
            <div class="article_content left">
              <template v-if="articleNum == 1">
                <h4 class="article_title">{{item.articleName}}</h4>
                <p class="article_abstract">{{item.articleAbstract}}</p>
                <p class="article_time"><i class="el-icon-date"></i> {{item.createTime}}</p>
              </template>
              <template v-else>
                <h4 class="article_title">{{item.articleName}}</h4>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="article_more">
        <i class="el-icon-plus"></i>
      </div>
    </div>
    <div class="individual_resume about_main w">
      <h2 class="individual_resume_title">博主简介</h2>
      <p class="individual_resume_content">
        杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
        我入行早，大家也亲切的叫我“青姐”。 SEO奋斗了将近两年时间，个人博客网站百度排名也从之前的30页后，排到了第一页。
        期间有很多的不容易，但是都没有放弃过。入了这一行，就深深的喜欢上它。
      </p>
      <el-tabs class="individual_resume_tabs" v-model="activeName">
        <el-tab-pane label="基本信息" name="basisInfo">基本信息</el-tab-pane>
        <el-tab-pane label="工作技能" name="jobSkills">工作技能</el-tab-pane>
        <el-tab-pane label="个人经历" name="personalExperience">个人经历</el-tab-pane>
        <el-tab-pane label="项目经历" name="projectExperience">项目经历</el-tab-pane>
      </el-tabs>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
  import web_header from "../../components/web_header"
  import web_footer from "../../components/web_footer"

  export default {
    name: "aboutBox",
    data() {
      return {
        hash: location.hash.split('#')[1],
        articleNum: 4,
        articleList: [
          {
            articleId: 3,
            articleName: 'GREEN LANTERN FOR GREEN WORLD!',
            articleWriter: 'Farhan Rizvi',
            articleCate: 'NATURE',
            articleLabel: '',
            articleImg: require('../../../../serverImage/article-3.jpg'),
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
            articleImg: require('../../../../serverImage/article-4.jpg'),
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
            articleImg: require('../../../../serverImage/article-5.jpg'),
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
            articleImg: require('../../../../serverImage/article-6.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
          {
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
          },
          {
            articleId: 2,
            articleName: 'MY FAVORITE SPIDERMAN MOVIE',
            articleWriter: 'Ratul Ahmed',
            articleCate: 'MOVIE',
            articleLabel: '',
            articleImg: require('../../../../serverImage/article-2.jpg'),
            articleAbstract: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis' +
              ' nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate' +
              ' velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
              ' et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            createTime: '2019-09-24',
          },
        ],
        activeName: 'basisInfo'
      };
    },
    components: {
      "web-header": web_header,
      "web-footer": web_footer,
    },
    methods: {
      goPage(path) {
        this.$router.push(path)
      }
    }
  };
</script>

<style scoped lang="less">
  .about_main {
    background-color: #f1f1f1;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    padding: 50px 100px 60px;
    box-sizing: border-box;
  }

  .individual_articles {
    position: relative;
    margin-top: -80px;

    .article_list {
      .article_pub {
        background-color: #fff;
        position: relative;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12), 0 1px 6px 0 rgba(0, 0, 0, .12);
        box-sizing: border-box;
      }

      .article_item_1 {
        .article_img {
          width: 40%;
          transform: translate(-20px, -20px);
          box-shadow: 5px 5px 6px 0 rgba(0, 0, 0, .2), 5px 5px 6px 0 rgba(0, 0, 0, .1);
          cursor: pointer;

          img {
            width: 100%;
          }
        }

        .article_content {
          padding: 0 30px 0 15px;
          width: 60%;
          height: 100%;
          box-sizing: border-box;

          .article_title {
            font-size: 20px;
            margin-top: 20px;
            cursor: pointer;
            transition: all .3s;

            &:hover {
              color: #E2413A;
            }
          }

          .article_abstract {
            margin-top: 8px;
            width: 100%;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            color: #959595;
          }

          .article_time {
            position: absolute;
            right: 30px;
            bottom: 20px;
            color: #959595;

            i {
              color: #959595;
            }
          }
        }
      }

      .article_item_2 {
        width: 49.5%;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        &:first-child {
          float: left;
        }

        &:last-child {
          float: right;
        }

        .article_img {
          width: 100%;

          img {
            width: 100%;
          }
        }

        .article_content {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, .3);
          text-align: center;
          opacity: 0;
          transition: all .3s;

          .article_title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.6);
            font-size: 18px;
            transition: all .3s;
            color: #1e1e1e;
          }
        }

        &:hover {
          .article_content {
            opacity: 1;

            .article_title {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        }
      }

      .article_item_4 {
        max-width: 53.5%;
        max-height: 180px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        float: left;

        &:nth-child(2n) {
          margin-left: 10px;
        }

        &:nth-child(2), &:nth-child(3) {
          width: 45%;

          .article_content {
            .article_title {
              font-size: 16px;
            }
          }
        }

        &:nth-child(3), &:nth-child(4) {
          margin-top: 10px;
        }

        .article_img {
          width: 100%;

          img {
            width: 100%;
          }
        }

        .article_content {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, .3);
          text-align: center;
          opacity: 0;
          transition: all .3s;

          .article_title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.6);
            font-size: 18px;
            transition: all .3s;
            color: #1e1e1e;
          }
        }

        &:hover {
          .article_content {
            opacity: 1;

            .article_title {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        }
      }
    }

    .article_more {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #E2413A;
      margin: 30px auto 0;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      cursor: pointer;
      box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, .2);

      &:hover {
        background-color: #e2524b;
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
  }

  .individual_resume {
    margin-top: 50px;

    .individual_resume_title {
      font-size: 20px;
      color: #333;
      letter-spacing: 3px;
    }

    .individual_resume_content {
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.5;
      letter-spacing: 1px;
      color: #555;
    }

    .individual_resume_tabs {
      margin-top: 30px;

      /deep/ .el-tabs__item {
        font-size: 16px;

        &.is-active {
          color: #E2413A;
        }

        &:hover {
          color: #E2413A;
        }
      }

      /deep/ .el-tabs__active-bar {
        background-color: #E2413A;
      }
    }
  }
</style>
