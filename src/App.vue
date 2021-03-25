<template>
  <Layout id="app">
<!--    <Layout></Layout>-->

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
@import "demo/demo.css";
@import "assets/css/styles.css";
@import "assets/css/responsive.css";
@import "assets/css/colors/purple.css";
@import "assets/css/colors/orange.css";
</style>
