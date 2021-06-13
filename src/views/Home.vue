<template>
    <v-card class="pa-6-auto grey" min-width="280px" min-height="720px">
      <h2 class="header--text">Recent ideas</h2>
      <br>
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
      <FAB/>
    </v-card>
</template>

<script>
import FAB from '../components/FAB.vue'

export default {
  name: 'Home',
  components: {
    FAB
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