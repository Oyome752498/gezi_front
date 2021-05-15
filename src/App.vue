<template>
  <div id="app">
    <!-- <login></login> -->
    <nav-menu></nav-menu>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import navMenu from './base/nav-menu'
import login from './components/login/login'

export default {
  name: 'App',
  components: {
    navMenu,
    login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
