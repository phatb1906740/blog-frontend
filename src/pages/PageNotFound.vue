<template>
  <div class="page-404">
    <div><img src="https://media.doyouconvert.com/285/2021/6/9/404_Error.1000x750.jpeg"></div>
    <router-link class="btn btn-primary text-uppercase" style="margin-bottom: 20px;" tag="button" :to="{ name: 'home-page' }">Go to HomePage</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>
  
<style>
  .page-404 {
    text-align: center;
  }
</style>
