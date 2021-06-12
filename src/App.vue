<template>
  <v-app>
    <v-main>
      <AppBar @drawerClicked="toggleDrawer()"/><br>
      <SideDrawer ref="sideDrawer" :isVisible="drawerVisible" v-on-clickaway="hideDrawer"/>
      <FAB/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import SideDrawer from './components/SideDrawer'
import FAB from './components/FAB.vue'
import { directive as onClickaway } from 'vue-clickaway';

export default {
  name: 'App',
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    AppBar,
    SideDrawer,
    FAB
  },
  data: () => ({
    drawerVisible: false
  }),
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible
      console.log(`emit event registered. ${this.drawerVisible}`);
    },
    hideDrawer() {
      if (!this.drawerVisible) {
        this.drawerVisible = !this.drawerVisible
      }
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
