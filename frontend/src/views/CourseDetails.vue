<template>
  <v-container>
    <CourseDetailsSkeleton v-if="loading" />
    <CourseDetails 
      v-else
      :courseDetails="courseDetails"
      @deleteCourse="deleteCourse"
    />
  </v-container>
</template>

<script>
import CourseDetails from '@/components/courses/CourseDetails.vue'
import CourseDetailsSkeleton from '@/components/courses/CourseDetailsSkeleton.vue'

export default {
  props: {
    passedCourse: {
      type: Object,
      default: null,
      required: false
    }
  },
  components: {
    CourseDetails,
    CourseDetailsSkeleton,
  },
  data() {
    return {
      fetchedCourse: null,
      loading: true,
      deleteLoading: false,
      dummyCourse: {
        id: '123',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Course Dummy #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel lacus fermentum, fringilla felis ut, auctor lacus. Nunc at ante quis urna volutpat fringilla. Praesent vitae ultricies felis. Ut non pharetra eros. Fusce quam massa, condimentum ac tempor at, dapibus at quam. Maecenas vulputate a turpis in porttitor. Donec quam massa, faucibus quis sapien vitae, mollis convallis orci. Etiam quam nisi, sagittis sit amet porttitor cursus, accumsan et odio.'
      }
    }
  },
  computed: {
    courseId() {
      return this.$route.params.id;
    },
    courseDetails() {
      return this.passedCourse || this.fetchedCourse;
    }
  },
  methods: {
    async fetchCourse() {
      this.loading = true;

      try {
        this.fetchedCourse = (await this.$axios.get(`/courses/${this.courseId}`)).data.course;
        this.loading = false;
      } catch (e) {
        if (e.response.status === 404) {
          this.$notifier.error('Course not found.');
        } else {
          this.$notifier.error('Something went wrong. Please try again later.');
        }

        this.$router.push({ name: 'Courses' });
      }
    },
    async deleteCourse() {
      this.deleteLoading = true;

      try {
        await this.$axios.delete(`/courses/${this.courseId}`);
        this.deleteLoading = false;

        this.$router.push({ name: 'Courses' })
      } catch (e) {
        this.$notifier.error('Something went wrong. Please try again later.');
      }
    }
  },
  mounted () {
    if (!this.passedCourse) {
      this.fetchCourse();
    }
  }
}
</script>

<style>

</style>