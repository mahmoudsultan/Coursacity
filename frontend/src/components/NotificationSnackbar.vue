<template>
  <v-snackbar
    absolute
    top
    right
    :color="color"
    :timeout="timeout"
    :value="showNotification"
    v-model="showNotification"
  >
    {{ message }}
    
    <template v-slot:action>
      <v-btn
        dark
        text
        @click="showNotification = false"
      >
        Close
      </v-btn>
    </template>

  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      color: 'primary',
      message: 'Test',
      showNotification: false,
      unsubscribe: null,
      timeout: '5000',
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === 'SET_NOTIFICATION') {
        this.showNotification = false;

        this.color = mutation.payload.color;
        this.message = mutation.payload.message;

        this.showNotification = true;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
}
</script>

<style>

</style>