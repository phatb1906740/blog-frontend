<template>
<div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!-- Post preview-->
                    <div class="post-preview" v-for="(article,index) in articles">
                        <a href="post.html">
                            <h2 class="post-title">{{ article.title }}</h2>
                            <h3 class="post-subtitle">{{ article.body }}</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on {{ formatDate(article.createAt) }}
                        </p>
                    <hr class="my-4" />
                    </div>
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
</template>

<script>
import ArticleService from "@/services/article.service.js";

export default {
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    formatDate(date) {
      var strArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var d = date.slice(8, 10);
      var m = date.slice(5, 7);
      m = Number(m) -1;
      m = strArray[m];
      var y = date.slice(0, 4);
      return m + ' ' + d + ', ' + y;
    },
    async retrieveArticles() {
      try {
        this.articles = await ArticleService.getAll();
      } catch (error) {
        console.log(error);
      }
     },
  },
  mounted() {
    this.retrieveArticles();
  },
}
</script>

<style>
  .post-preview .post-title {
    display: -webkit-box;
    max-height: 4.5rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    line-height: 2.25rem;
  }

  .post-preview .post-subtitle {
    display: -webkit-box;
    max-height: 5.25rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 3;
    line-height: 1.75rem;
  }
</style>
