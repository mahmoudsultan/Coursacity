<template>
  <v-form v-model="isDataValid">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-text-field
            solo
            :rules="titleRules"
            name="title"
            label="Title"
            v-model="newCourse.title"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10" md="8">
          <v-textarea
            solo
            :rules="descriptionRules"
            name="description"
            label="Description"
            v-model="newCourse.description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-text-field
            solo
            :rules="slugRules"
            name="slug"
            label="Slug"
            v-model="newCourse.slug"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-file-input
            solo
            :rules="photoRules"
            prepend-icon="fa-camera-retro"
            accept="image/*"
            label="Photo"
            v-model="newCourse.photo"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="success" x-large :disabled="!isDataValid" @click="submit">Create</v-btn>
          <span class="ml-5" v-if="loading.isLoading">
            <v-progress-circular :value="10" color="success" indeterminate></v-progress-circular>
            <span class="text-body1 ml-2">{{ loading.message }}... </span>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    loading: {
      type: Object,
      default: () => ({
        isLoading: false,
      })
    }
  },
  data () {
    return {
      isDataValid: false,
      newCourse: {
        title: '',
        description: '',
        slug: '',
        photo: null
      },
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 100 || 'Title must be less than 100 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      slugRules: [
        v => !!v || 'Slug is required',
      ],
      photoRules: [
        v => !!v || 'Photo is required',
      ]
    }
  },
  methods: {
    submit() {
      if (!this.isDataValid) return;
      this.$emit('submit', this.newCourse);
    }
  }
}
</script>

<style>

</style>