<template>
  <div>
    <v-row justify="center" v-if="loading">
      <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="i in Array(10).keys()" :key="i">
        <v-skeleton-loader
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row justify="center" v-else>
      <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="course in courses" :key="course.id">
        <VerticalCourseCard :course="course" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalCourseCard  from '@/components/cards/VerticalCourseCard.vue';

export default {
  components: {
    VerticalCourseCard,
  },
  props: {
    courses: {
      type: Array,
      default: () => ([])
    },
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>