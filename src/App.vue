<template>
  <div id="app">
    <custom-header></custom-header>
    <!-- 这里检索、概览切换 -->
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Header from 'components/Header'
import Footer from 'components/Footer'
export default {
  components: {
    'custom-header': Header,
    'custom-footer': Footer
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
