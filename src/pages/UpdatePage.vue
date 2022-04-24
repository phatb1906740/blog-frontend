<template>
  <PageHeader title='Update Page' subHeading='' bg='https://images.unsplash.com/photo-1495073613335-7af8e711f273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjAyMDI1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80' />
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="updateArticle">
              <div class="form-floating">
                <input class="form-control" id="title" type="text" placeholder="Enter title" data-sb-validations="required" v-model="article.title"/>
                <label for="title">Title</label>
                <div class="invalid-feedback" data-sb-feedback="title:required">Title is required.</div>
              </div>
              
              <div class="form-floating">
                <input class="form-control" id="image" type="text" placeholder="Enter image url" data-sb-validations="required" v-model="article.image"/>
                <label for="image">Image URL</label>
                <div class="invalid-feedback" data-sb-feedback="image:required">Image URL is required.</div>
              </div>
              
              <div class="form-floating">
                <textarea class="form-control" id="body" placeholder="Enter content" style="height: 12rem" data-sb-validations="required" v-model="article.body"></textarea>
                <label for="body">Content</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">Content is required.</div>
              </div>

              <br />
              
              <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ArticleService from "@/services/article.service.js";

export default {
  components: {
    PageHeader,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      article: {
        title: "",
        body: "",
        image: "",
      },
    }
  },
  methods: {
    async updateArticle() {
      try {
          await ArticleService.update(this.id, this.article);
          this.$router.push('/');
      } catch (error) {
          console.log(error);
      }
    },
    async getArticle(id) {
      try {
        var data = await ArticleService.get(id);
        this.article.title = data.title;
        this.article.body = data.body;
        this.article.image = data.image;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getArticle(this.id);
  }
}
</script>

<style>

</style>
