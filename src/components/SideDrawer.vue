<template>
<!-- !!! v-model has to be set! - v-model should also not mutate the prop directly. -->
    <v-navigation-drawer
        :v-if="drawerIsVisible"
        v-model="drawerSetPoint"
        absolute
        class="primary"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="imageUrl"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Categories</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          link
          @click="navigateToCategory(item)"
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.category }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideDrawer',
    props: ['isVisible'],
    data: () => ({
        drawerIsVisible: true,
        drawerSetPoint: true,
        items: [
            { title: "Create Website", tag: "coding", effort: "medium", id: "ansiASh9823", icon: "mdi-code-braces" },
            { title: "Sell old stuff", tag: "selloff", effort: "easy", id: "OAhd98ABaas", icon: "mdi-cash" },
            { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "PAd7asb38as", icon: "mdi-domain" }
        ],
        baseUrl: 'https://randomuser.me/api/portraits/',
        gender: '',
        dataFormat: '.jpg',
        imageUrl: ''
    }),
    created() {
        this.drawerIsVisible = this.isVisible
        this.drawerSetPoint = this.isVisible
    },
    mounted() {
      this.setItems()
    },
    methods: {
        toggleDrawer() {
            this.drawerIsVisible = !this.drawerIsVisible
            this.drawerSetPoint = !this.drawerSetPoint
        },
        navigateToCategory(item) {
          this.$router.push(`/ideas/${item.category}`)
        },
        setItems() {
          const allItems = this.$store.getters.getIdeas
          const categories = []
          const filteredItems = []
          allItems.forEach(item => {
            if (categories.includes(item.category)) {
              //
            } else {
              filteredItems.push(item)
              categories.push(item.category)
            }
          })
          this.items = filteredItems
        }
    },
    watch: {
      isVisible(val) {
        this.setItems()
        if (val === true) {
          this.randomBinary = Math.round(Math.random())
          if (this.randomBinary === 1) {
              this.gender = 'men'
          } else {
              this.gender = 'women'
          }
          this.imageUrl = `${this.baseUrl}${this.gender}/${Math.round(Math.random() * 100)}${this.dataFormat}`
        }
        this.drawerIsVisible = val
        this.drawerSetPoint = val
      }
    }
}
</script>

<style>

</style>