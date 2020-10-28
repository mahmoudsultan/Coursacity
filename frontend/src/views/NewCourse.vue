<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 :class="textSize">New Course</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CourseForm :loading="loading" @submit="submit" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseForm from '@/components/courses/CourseForm.vue';

export default {
  components: {
    CourseForm,
  },
  data() {
    return {
      loading: {
        isLoading: false,
        message: '',
      },
    };
  },
  computed: {
    textSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'text-h3'
        case 'sm': return 'text-h3'
        case 'md': return 'text-h2'
        default: return 'text-h1'
      }
    },
  },
  methods: {
    async submit(newCourse) {
      this.loading = {
        isLoading: true,
        message: 'Creating New Course',
      };

      const courseFormData = new FormData();
      courseFormData.append('title', newCourse.title);
      courseFormData.append('description', newCourse.description);
      courseFormData.append('slug', newCourse.slug);
      courseFormData.append('photo', newCourse.photo);

      try {
        const responseData = (await this.$axios({
          method: 'post',
          url: '/courses',
          data: courseFormData,
          headers: {'Content-Type': 'multipart/form-data' }
        })).data;

        const createdCourse = responseData.course;
        this.$router.push({ name: 'CourseDetails', params: { id: createdCourse.id } });

      } catch (e) {
        if (e.response.status === 422) {
          const slugErrors = e.response.data.errors.slug;
          if (slugErrors.length && slugErrors[0].includes('taken')) {
            this.$notifier.error('Slug is already taken. Please choose another slug.');
          }
        } else {
          this.$notifier.error('Something went wrong. Please try again later.');
        }

        this.loading = {
          isLoading: false,
        };
      }

    }
  }
}
</script>

<style>

</style>
