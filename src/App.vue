<template>
  <Navigation />
  
  <router-view />

  <CompFooter />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import CompFooter from "./components/CompFooter.vue";
export default {
  components: {
    Navigation,
    CompFooter,
  },
}
</script>

<style>

</style>
