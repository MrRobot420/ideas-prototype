<template>
      <v-btn 
        fab 
        outlined 
        class="primary"
        absolute
        bottom
        right
        @click="openDialog()"
      >
        <AddIdeaDialog :dialogIsShown="showDialog" @closeDialog="toggleDialog()"/>
        <v-icon class="custom--text">mdi-lightbulb</v-icon>
      </v-btn>
</template>

<script>
import AddIdeaDialog from './AddIdeaDialog'

export default {
  name: 'FAB',
  components: {
    AddIdeaDialog
  },
  data: () => ({
    showDialog: false
  }),
  methods: {
    openDialog() {
      console.log('FAB pressed!');
      this.showDialog = !this.showDialog
    },
    toggleDialog() {
      this.showDialog = false
    }
  }
}
</script>

<style>

</style>