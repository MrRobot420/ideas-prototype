<template>
  <v-app>
    <v-card class="pa-6-auto grey" min-width="280px" min-height="720px">
      <h2>Last ideas:</h2>
      <v-layout>
        <v-row>
          <v-col align="center">
            <v-card v-for="i in ideas" :key="i.id" class="mx-auto" max-width="300px">
              <v-card-text>
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
      { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "PAd7asb38as" }
    ]
  })
}
</script>