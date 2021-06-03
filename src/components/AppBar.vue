<template>
  <v-container fluid>
    <v-app-bar
      color="primary"
      light
      height="60px"
    >
    <div class="d-flex align-center">
      <v-btn class="primary grey--text text--darken-2" outlined @click="toggleDrawer()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-img
        contain
        alt="Lightbulb"
        src="https://cdn3.mindmeister.com/assets/library/landing_pages/idea-management-89ffd20b9de3caaa42c7fa0bab176214980c20825556bbc7d3be3ca4b5256b10.svg"
        height="50px"
        width="50px"
      ></v-img>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <h1>Your ideas</h1>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <v-btn class="custom primary--text">Login<v-icon right>mdi-login</v-icon></v-btn>
    </div>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'AppBar',
  components: {},
  data: () => ({
    
  }),
  methods: {
    toggleDrawer() {
      this.$emit('drawerClicked')
    }
  }
}
</script>

<style>

</style>