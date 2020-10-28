<template>
  <div>
    <v-card elevation="2" :width="cardWidth">
      <v-img 
        :src="coursePhoto"
        aspect-ratio="1.7"
        :lazy-src="lazyImageLoadingSource"
      />
      <v-card-title primary-title>
        {{ course.title }}
      </v-card-title>
      <v-card-text class="text-truncate">
        {{ course.description }}
      </v-card-text>
      <v-card-actions class="primary white--text">
        <v-spacer></v-spacer>
        <v-btn color="white" text :to="{ name: 'CourseDetails', params: { id: course.id } }">Details</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    },
    compact: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    cardWidth() {
      return (this.compact) ? '360' : 'auto';
    },
    defaultImage() {
      return process.env.VUE_APP_DEFAULT_COURSE_PHOTO;
    },
    coursePhoto() {
      if (this.course.photo) {
        return `${process.env.VUE_APP_API_BASE_URL}${this.course.photo}`;
      }

      return this.defaultImage();
    }
  },
  data () {
    return {
      lazyImageLoadingSource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPXtuPQAGAAJUMFiF+wAAAABJRU5ErkJggg=='
    }
  }
}
</script>

<style>

</style>