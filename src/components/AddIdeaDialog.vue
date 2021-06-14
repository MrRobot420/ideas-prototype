<template>
  <v-dialog
    transition="dialog-bottom-transition"
    persistent
    v-model="dialog"
  >
    <v-card class="header">
        <v-card-title>
            <span class="text-h5 font-weight-bold custom--text">Add new Idea</span>
        </v-card-title>
        <v-card-text class="white--text">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  prepend-inner-icon="mdi-pen"
                  dark
                  label="Title*"
                  hint="give it a good title"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  prepend-inner-icon="mdi-shape-outline"
                  label="Category*"
                  hint="group your ideas for better organization"
                  required
                  dark
                  :value="$route.params.id"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-textarea
                    dark
                    prepend-inner-icon="mdi-text"
                    outlined
                    name="input-7-4"
                    label="Description*"
                    hint="describe what this is all about"
                    value=""
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  dark
                  prepend-inner-icon="mdi-school"
                  :items="['small', 'medium', 'high', 'huge']"
                  label="Effort*"
                  hint="how hard is it to accomplish?"
                  persistent-hint
                  required
                ></v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-icon large class="custom--text">{{selectedIcon}}</v-icon>
              <v-spacer></v-spacer>
              <v-col
                cols="12"
                sm="4"
              >
                <v-autocomplete
                dark
                  prepend-inner-icon="mdi-emoticon-outline"
                  :items="iconVariants"
                  label="Icon"
                  hint="add a visual respresentation"
                  persistent-hint
                  chips
                  value=""
                  v-model="selectedIcon"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-btn class="red lighten-2 white--text" @click="closeDialog()">
                    <v-icon left>mdi-cancel</v-icon>Cancel
                </v-btn>
              </v-col>
              <v-col>
                <v-btn class="primary">
                    Add Idea<v-icon right>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'AddIdeaDialog',
    props: ['dialogIsShown'],
    data: () => ({
        dialog: false,
        iconVariants: [
            { text: 'Coding', value: 'mdi-xml' }, 
            { text: 'Business', value: 'mdi-domain' }, 
            { text: 'Reading', value: 'mdi-book-open-variant' }, 
            { text: 'Writing', value: 'mdi-pen' }, 
            { text: 'Income', value: 'mdi-cash' }, 
            { text: 'Life', value: 'mdi-one-up' },
            { text: 'Sports', value: 'mdi-weight-lifter' }, 
            { text: 'Soccer', value: 'mdi-soccer' }, 
            { text: 'Basketball', value: 'mdi-basketball' }, 
        ],
        selectedIcon: ''
    }),
    mounted() {
        this.dialog = this.dialogIsShown
    },
    methods: {
        setIcon(value) {
            this.selectedIcon = value
        },
        closeDialog() {
            this.$emit('closeDialog', false)
        }
    },
    watch: {
        dialogIsShown(val) {
            this.dialog = val
        }
    }
}
</script>

<style>

</style>