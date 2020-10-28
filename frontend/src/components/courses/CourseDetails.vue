<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="10" 
        offset-md="1"
        xl="8"
        offset-xl="2"
      >
        <v-card elevation="5">
          <v-img 
            :src="coursePhoto"
            aspect-ratio="1.7"
            max-height="40vh"
            class="white--text justify-center align-end"
          >
            <v-overlay value="true" :color="overlayColor" absolute>
              <v-card-title primary-title>
                <!-- TODO(DONE): Careful of XSS  [Handled by Vue] -->
                <p class="text-center text-sm-h2 text-xs-h3">
                  {{ courseDetails.title }}
                  <v-btn rounded right color="error" @click="deleteCourse" :loading="deleteLoading">
                    <v-icon left small>fa-trash-alt</v-icon>
                    Delete
                  </v-btn>
                </p>
              </v-card-title>
            </v-overlay>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        xl="6"
        offset-xl="3"
      >
        <p class="text-body1 px-sm-5 text--primary">{{ courseDetails.description }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    courseDetails: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      overlayColor: 'primary',
      deleteLoading: false,
    }
  },
  computed: {
    defaultImage() {
      return process.env.VUE_APP_DEFAULT_COURSE_PHOTO;
    },
    coursePhoto() {
      if (this.courseDetails.photo) {
        return `${process.env.VUE_APP_API_BASE_URL}${this.courseDetails.photo}`;
      }

      return this.defaultImage();
    }
  },
  methods: {
    deleteCourse() {
      this.overlayColor = 'error';
      this.deleteLoading = true;

      this.$emit('deleteCourse');
    }
  }
}
</script>

<style>

</style>