<template>
    <v-card class="pa-6-auto grey" min-width="280px" min-height="720px">
      <h2 class="header--text">{{headlineText}}</h2>
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
    </v-card>
</template>

<script>
export default {
    name: 'Idea',
    data: () => ({
        headlineText: '',
    }),
    mounted() {
        this.$store.dispatch("setIdeas")
        const ideaParam = this.getUrlParam()
        this.$store.dispatch("setIdeasForCategory", ideaParam)
        this.headlineText = ideaParam
    },
    computed: {
        ideas() {
            return this.$store.getters.getSelectedIdeas
        }
    },
    methods: {
        getUrlParam() {
            return this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            console.log(`Came from: ${from.params.id}`)
            this.headlineText = to.params.id
            this.$store.dispatch("setIdeasForCategory", to.params.id)
        }
    }
}
</script>

<style>

</style>