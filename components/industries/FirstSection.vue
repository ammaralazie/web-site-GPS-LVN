<template>
  <v-img v-if="data" style="z-index: 20;" class="d-flex align-center" src="/images/vid-bg.png" cover
    :max-height="!isMobile ? '800px' : ''">
    <v-container>
      <v-row :style="isMobile ? 'margin-top:140px' : ''">
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-alert color="primary" size="30px">
            {{ $t("DRIVER APPLICATION SOFTWARE") }}
          </v-alert>
          <v-header class="text-h2">
            {{ $t(data.title) }}
          </v-header>
          <p class="mt-3">
            {{ $t(data.subtitle) }}
          </p>

          <div class="mt-10">
            <v-btn color="primary" width="140px" height="40px">Solutions</v-btn>
            <v-btn text color="primary">
              Plans & Pricing
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="12" xs="12" class="d-flex align-center justify-center">
          <v-carousel class="rounded-lg" cycle :show-arrows="false">
            <v-carousel-item v-for="(item, i) in data.img" :key="i">
              <v-img height="100%" cover width="100%" :src="item"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import { filter } from '../../helper/filterObjectValue'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  props: ['boldHeader', 'subTitle', 'file'],
  components: {
    VideoPlayer
  },
  async created() {
    this.data = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.industries
    )?.detail_page?.section1
    console.log('industries : ', this.data)
  },
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        }
      ],
      data: null
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
<style scoped>
.v-alert:not(.v-sheet--tile) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 50px;
  width: 300px;
}
</style>
