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
                <p>{{ i.tag }}</p>
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
  data: () => ({
    ideas: [
      { title: "Create Website", tag: "coding", effort: "medium", id: "ansiASh9823" },
      { title: "Sell old stuff", tag: "selloff", effort: "easy", id: "OAhd98ABaas" },
      { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "PAd7asb38as" },
      { title: "Spam the spammer", tag: "coding", effort: "medium", id: "IAsbd7g2uas" },
      { title: "Plan life like 4-Hour workweek suggests", tag: "life", effort: "high", id: "ASDopa72bas" },
      { title: "Create IDEA WebApp", tag: "coding", effort: "medium", id: "Pashsa2bais" },
      { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "ABd8g82sada" },
      { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "ABs72basdbo" }
    ]
  })
}
</script>