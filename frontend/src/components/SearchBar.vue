<template>
  <v-text-field
    @keydown.enter="goToSearch"
    class="pa-0 ma-0"
    :single-line="compact"
    :hide-details="compact"
    :dense="compact"
    :rounded="compact"
    name="search"
    label="Search"
    solo
    v-model="searchInput"
    color="accent"
    prepend-inner-icon="fa-search"
  >
    <template slot="append">
      <v-btn @click="goToSearch" rounded :small="compact" v-if="searchInput.length >= 3" color="success">Search</v-btn>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: String,
      default: ''
    },
    compact: {
      type: Boolean,
      default: false,
    },
    eventMode: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    goToSearch() {
      if (this.searchInput.length < 3) return;

      if (this.eventMode) {
        return this.$emit('search', this.searchInput);
      }

      this.$router.push({ name: 'Search', query: { q: this.searchInput } });
    }
  },
  mounted() {
    this.searchInput = this.initialValue;
  }
}
</script>

<style>

</style>