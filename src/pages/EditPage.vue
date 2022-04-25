<template>
  <PageHeader title='Edit Page' subHeading='' bg='assets/img/about-bg.jpg'/>
  <div class="container mt-4">
    <div>
      <h3>Bài viết của tôi</h3>
      <a class="text-primary" href="#">Thùng rác</a>
    </div>

    <table class="table mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tiêu đề</th>
                <th scope="col">Nội dung</th>
                <th scope="col" colspan="3">Ngày cập nhật</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(article,index) in articles"> 
            <th class="align-middle" scope="row">{{ index + 1 }}</th>
            <td class="align-middle" style="padding-top: 12px"><span class="article-title-table">{{ article.title }}</span></td>
            <td class="align-middle" style="padding-top: 12px"><span class="article-body-table">{{ article.body }}</span></td>
            <td class="align-middle">{{ formatDate(article.updateAt) }}</td>
            <td>
                <router-link class="btn btn-link fw-bolder text-primary" :to="{ name: 'update-page', params: { id: article._id }, }">
                Sửa
                </router-link>
            </td>
            <td>
                <!-- <a href="" class="btn btn-link" @click="deleteArticle(article._id)">Xóa</a> -->
                <router-link class="btn btn-link fw-bolder text-danger" :to="{ name: 'edit-page' }" @click="deleteArticle(article._id)">
                Xóa
                </router-link>
            </td>
          </tr>
        </tbody>
    </table>
</div>
</template>
  
<script>
import ArticleService from "@/services/article.service.js";
import PageHeader from "../components/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    formatDate(date) {
      var d = date.slice(8, 10);
      var m = date.slice(5, 7);
      var y = date.slice(0, 4);
      return m + '-' + d + '-' + y;
    },
    async retrieveArticles() {
      try {
        this.articles = await ArticleService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteArticle(id) {
        try {
            await ArticleService.delete(id);
            this.refreshPage();
        } catch (error) {
            console.log(error);
        }
    },
    async refreshPage() {
      this.retrieveArticles();
    },
  },
  mounted() {
    this.retrieveArticles();
  },
}
</script>

<style>
  .article-title-table {
    display: -webkit-box;
    max-height: 1.25rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 1;
    line-height: 1.25rem;
    max-width: 300px;
  }
  .article-body-table {
    display: -webkit-box;
    max-height: 2.5rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    line-height: 1.25rem;
    max-width: 600px;
  }
</style>
