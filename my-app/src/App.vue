<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, Header},
};
</script>

<style>
#app {
  margin: 0 auto;
  text-align: center;
}
</style>