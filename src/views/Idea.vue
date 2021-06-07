<template>
  <v-app>
      <h1>{{headlineText}}</h1>
  </v-app>
</template>

<script>
export default {
    name: 'Idea',
    data: () => ({
        headlineText: ''
    }),
    created() {
        this.headlineText = 'TOPIC: random_topic'
    },
    methods: {

    }
}
</script>

<style>

</style>