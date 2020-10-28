<template>
  <v-app-bar 
    app
    fixed
    color="white"
    flat
  >
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar-title>
            <span :class="textSize">
              <v-icon class="primary--text mt-n1" left>fa-shapes</v-icon>
              Coursacity
            </span>
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="hidden-xs-only" justify="end" align="end">
          <v-btn dark class="mr-3" link :to="{ name: 'Home'}" rounded>Home</v-btn>
          <v-btn color="primary" link :to="{ name: 'Courses'}" rounded>Courses</v-btn>
        </v-col>
        <v-col class="d-sm-none d-none d-md-flex">
          <SearchBar compact />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  computed: {
    textSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'text-body1 font-weight-bold'
        default: return 'text-h6 font-weight-bold'
      }
    },
  }
}
</script>

<style>

</style>