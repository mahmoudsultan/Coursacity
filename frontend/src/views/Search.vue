<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h1">Search</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <SearchBar :initialValue="searchInput" @search="handleNewSearchEvent" eventMode />
      </v-col>
    </v-row>

    <template v-if="!searchLoading">
      <v-row 
        justify="center" 
        align="center"
        class="mt-12"
        v-if="noSearchResults"
      >
        <p class="text-h3 font-weight-light text--secondary">No search results were found for {{ searchInput }} </p>
      </v-row>
      <v-row v-else>
        <v-col>
          <p class="text-h6">There {{ (totalCount > 1) ? 'are' : 'is' }} {{ totalCount }} search results:</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="course in searchResults" :key="course.id">
          <VerticalCourseCard :course="course"/>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="i in Array(5).keys()" :key="i">
          <VerticalCourseCardSkeleton />
        </v-col>
      </v-row>
    </template>

    <v-pagination
      v-if="!noSearchResults"
      class="mb-12"
      v-model="page"
      :length="totalPages"
    ></v-pagination>
  </v-container>
</template>

<script>
import VerticalCourseCard from '@/components/cards/VerticalCourseCard.vue';
import VerticalCourseCardSkeleton from '@/components/cards/VerticalCourseCardSkeleton.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  components: {
    VerticalCourseCard,
    VerticalCourseCardSkeleton,
    SearchBar,
  },
  data () {
    return {
      searchLoading: true,
      searchInput: '',
      searchResults: [],
      page: 1,
      totalPages: 0,
      totalCount: 0,
    }
  },
  computed: {
    noSearchResults() {
      return !(this.searchLoading || this.searchResults.length);
    }
  },
  methods: {
    async handleNewSearchEvent(searchInput) {
      this.searchLoading = true;

      this.searchInput = searchInput;
      this.page = 1;
      this.totalPages = 0;

      this.search();
    },
    async search() {
      this.searchLoading = true;

      try {
        const responseData = (await this.$axios.get(`/courses/search?q=${this.searchInput}&page=${this.page}`)).data;
        this.searchResults = responseData.courses;
        this.totalPages = responseData.meta.total_pages;
        this.totalCount = responseData.meta.total_count;

        this.searchLoading = false;
      } catch (e) {
        // TODO: Better error handling here.
        this.$notifier.error('Something went wrong. Please try again later.');
        this.$router.push({ name: 'Courses' });
      }
    }
  },
  watch: {
    page() {
      this.search();
    }
  },
  created() {
    // XSS Prevention Handeled by Vue
    this.searchInput = this.$attrs.query;
    this.search();
  }
}
</script>

<style>

</style>
