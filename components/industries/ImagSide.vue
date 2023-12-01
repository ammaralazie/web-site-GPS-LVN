<template>
  <div style="    z-index: 20;
    position: relative;">
    <u-animate :offset="250" name="fadeInLeftShort" duration="0.5s">
      <div class="screen-wrap">
        <img class="plant1 img-2d3d" :src="imgAPI.saas2[10]" :data-2d="imgAPI.saas2[9]" :data-3d="imgAPI.saas2[10]"
          alt="plant" />
        <div class="illustration">
          <figure>
            <img v-if="type == 'img'" :src="imageUrl" alt="screen" />
            <video-player v-else src="https://www.youtube.com/watch?v=1kSNYz_5DeQ" allow />
          </figure>
        </div>
      </div>
    </u-animate>
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
