<template>
  <PageHeader title='Sign In' subHeading='' bg='assets/img/contact-bg.jpg' />
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="signin">

              <div class="form-floating">
                <input class="form-control" id="username" type="text" placeholder="Enter your username" data-sb-validations="required" v-model="user.userName"/>
                <label for="username">Username</label>
                <div class="invalid-feedback" data-sb-feedback="username:required">Username is required.</div>
              </div>

              <div class="form-floating">
                <input class="form-control" id="email" type="email" placeholder="Enter your email" data-sb-validations="required" v-model="user.email"/>
                <label for="email">Email</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">Email is required.</div>
              </div>
              
              <div class="form-floating">
                <input class="form-control" id="password" type="password" placeholder="Enter your password" data-sb-validations="required" v-model="user.password"/>
                <label for="password">Password</label>
                <div class="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
              </div>

              <br />
              
              <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Sign In</button>
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
import { mapActions } from 'vuex'

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      user: {
        userName: "",
        email: "",
        password: "",
      },
    }
  },
  methods: {
    ...mapActions([ 'userLogin']),
    async signin() {
      try {
        var user = await ArticleService.signin(this.user);
        this.userLogin(user);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style>

</style>
