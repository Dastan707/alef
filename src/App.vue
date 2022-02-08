<template>
  <div id="app">
    <div class="header">
    <Header />
    </div>
    <router-view/>
    <div class="foo">
    <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app{
  font-family: 'Montserrat', sans-serif;
}
</style>
