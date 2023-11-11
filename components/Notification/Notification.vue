<template>
  <v-snackbar :timeout="-1" v-model="snackbar" class="notification">
    <div class="action">
      {{ $t('common.notif_msg') }}
    </div>
    <v-btn color="secondary" class="button" @click="useCookie">
      {{ $t('common.accept') }}
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
import * as cookies from "vue-cookies"
export default {
  data() {
    return {
      snackbar: true,
      latitude: null,
      longitude: null
    }
  }, // /data
  methods: {
    // this function for eccept on use cookie
    useCookie: function() {
      this.snackbar = false
      this.getLocation()
      cookies.set('use_cookie', true)
    }, // /useCookie

    // this function to take location for user
    getLocation: function() {
      if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(showPosition)

      function showPosition(postion) {
        cookies.set('latitude', postion?.coords?.latitude)
        cookies.set('longitude', postion?.coords?.longitude)
      } // /showPosition
    } // /getLocation
  }
}
</script>
