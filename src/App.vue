<template>
  <v-app>
    <v-main>
      <AppBar @drawerClicked="toggleDrawer()"/><br>
      <SideDrawer ref="sideDrawer" :isVisible="drawerVisible" v-click-outside="hideDrawer"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import SideDrawer from './components/SideDrawer'

import Vue from 'vue'
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

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
