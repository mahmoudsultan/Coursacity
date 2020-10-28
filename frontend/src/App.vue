<template>
  <v-app app color="grey darken-1">
    <AppBar/>
    <v-main>
      <router-view></router-view>
      <NotificationSnackbar />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
const NotificationSnackbar = () => import('@/components/NotificationSnackbar');

export default {
  name: 'CoursicityWebApp',
  components: {
    AppBar,
    NotificationSnackbar,
  },
  data: () => ({
    //
  })
};
</script>

<style>
  .v-application {
    background-color: #F5F5F5 !important;
  }
</style>
