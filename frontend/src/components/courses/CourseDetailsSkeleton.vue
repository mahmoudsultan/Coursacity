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
          <v-skeleton-loader 
            type="image"
          >
          </v-skeleton-loader>
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
        <v-skeleton-loader type="paragraph" />
        <v-skeleton-loader type="paragraph" class="mt-2" />
        <v-skeleton-loader type="paragraph" class="mt-2" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>