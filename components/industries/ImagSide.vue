<template>
  <div style="    z-index: 20;
    position: relative;">
    <v-card class="elevation-3">
      <v-img src="https://placehold.co/600x400" alt="screen"></v-img>
      <!-- <video-player v-else src="https://www.youtube.com/watch?v=1kSNYz_5DeQ" allow /> -->
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
import imgAPI from '~/static/images/imgAPI'
export default {
  name: 'ImagSide',
  // eslint-disable-next-line vue/require-prop-types
  props: ['imageUrl'],

  data() {
    return {
      imgAPI: imgAPI
    }
  }, // data
  components: {
    VideoPlayer
  }
}
</script>
<style lang="scss" scoped>
@import './feature-style.scss';
</style>
