<template>
  <v-img style="z-index: 20;" class="d-flex align-center" src="/images/vid-bg.png" cover
    :max-height="!isMobile ? '800px' : ''">
    <v-container>
      <v-row :style="isMobile ? 'margin-top:140px' : ''">
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-alert color="primary" size="30px">
            {{ $t("DRIVER APPLICATION SOFTWARE") }}
          </v-alert>
          <v-header class="text-h2">
            {{ $t(boldHeader) }}
          </v-header>
          <p class="mt-3">
            {{ $t(subTitle) }}
          </p>
          <v-row>
            <v-col cols="12" md="6" lg="6" sm="12" xs="12">
              <v-text-field :label="$t('Enter Your Email')"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="6" sm="12" xs="12">
              <v-btn block class="primary">
                {{ $t("Start Free Trail") }}
              </v-btn>
            </v-col>
          </v-row>

          <p>{{ $t("Start your free 7-day trial, no credit card necessary.") }}</p>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="12" xs="12" class="d-flex align-center justify-center">
          <video-player :src="file" allow />
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  props: ['boldHeader', 'subTitle', 'file'],
  components: {
    VideoPlayer
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
