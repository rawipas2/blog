<template>
  <v-app
  >
    <div id='nav'>
      <router-link id="Home" to='/'>HOME</router-link> |
      <router-link id="Blog" to='/listblog'>BLOG</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
import store from './store/index'
export default {
  store
}
</script>


<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
