<template>
  <PageHeader title='Log In' subHeading='' bg='assets/img/contact-bg.jpg' />
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="login">
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
              
              <div v-if="isError"><div class="text-center text-danger mb-3">Authentication failed. User not found.</div></div>

              <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Log In</button>
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
        email: "",
        password: "",
      },
      isError: false,
    }
  },
  methods: {
    ...mapActions([ 'userLogin']),
    async login() {
      try {
        var user = await ArticleService.login(this.user);
        if(user) {
          this.userLogin(user);
          this.$router.push('/');
        } else {
          this.isError = true;
        }     
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style>

</style>
