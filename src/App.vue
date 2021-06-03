<template>
  <v-app>
    <v-main>
      <AppBar @drawerClicked="toggleDrawer()"/><br>
      <SideDrawer :isVisible="drawerVisible"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import SideDrawer from './components/SideDrawer'

export default {
  name: 'App',
  components: {
    AppBar,
    SideDrawer
  },
  data: () => ({
    drawerVisible: false
  }),
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible
      console.log(`emit event registered. ${this.drawerVisible}`);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// @import './assets/css/generalStyle.css';
// .appStyle{
//     overflow-y: hidden;
//     overflow-x: hidden;
// }
</style>
