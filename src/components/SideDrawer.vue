<template>
<v-app>
<!-- !!! v-model has to be set! - v-model should also not mutate the prop directly. -->
    <v-navigation-drawer
        :v-if="drawerIsVisible"
        v-model="drawerSetPoint"
        absolute
        temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Categories</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.tag"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.tag }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</v-app>
</template>

<script>
export default {
    name: 'SideDrawer',
    props: ['isVisible'],
    data: () => ({
        drawerIsVisible: true,
        drawerSetPoint: true,
        items: [
            { title: "Create Website", tag: "coding", effort: "medium", id: "ansiASh9823" },
            { title: "Sell old stuff", tag: "selloff", effort: "easy", id: "OAhd98ABaas" },
            { title: "Build businessmodel", tag: "enterprise", effort: "high", id: "PAd7asb38as" }
        ]
    }),
    created() {
        // console.log(this.drawerIsVisible)
        this.drawerIsVisible = this.isVisible
        this.drawerSetPoint = this.isVisible
    },
    watch: {
        isVisible(val) {
            console.log(val);
            this.drawerIsVisible = val
            this.drawerSetPoint = val
            console.log('TEST: ', this.drawerIsVisible)
        }
    }
}
</script>

<style>

</style>