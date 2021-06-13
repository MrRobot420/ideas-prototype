<template>
  <v-app>
    <v-card class="pa-6-auto grey" min-width="280px" min-height="720px">
      <h2>Recent ideas</h2>
      <v-layout>
        <v-row>
          <v-col v-for="i in ideas" :key="i.id" align="center" :cols="$vuetify.breakpoint.xs ? '12' : '3'">
            <v-card
              class="mx-auto primary" 
              :min-height="$vuetify.breakpoint.xs ? 100 : '20vh'"
              :min-width="$vuetify.breakpoint.xs ? 150 : '20vh'"
              rounded
            >
              <v-card-text class="white--text">
                <h3>{{ i.title }}</h3>
                <v-icon>{{ i.icon }}</v-icon>
                <p>{{ i.category }}</p>
                <p>{{ i.effort }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  mounted() {
    this.$store.dispatch("setIdeas")
  },
  computed: {
    ideas() {
      return this.$store.getters.getIdeas
    }
  }
}
</script>