<template>
  <div class="news">
    <figure>
      <lottie-vue-player :src="img" :theme="options.theme"
        :player-size="options.playerSize" :autoplay="true" :loop="true" :player-controls="false" style="width: 100%; height:100%">
      </lottie-vue-player>
    </figure>
    <div class="desc">
      <div class="text">
        <p class="type caption">
          {{ $t('saas2.' + type) }}
        </p>
        <p>{{ $t(text) }}</p>
      </div>
      <v-btn small text class="btn">
        {{ $t('saas2.news_readmore') }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event.scss';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: this.$store.state.options
    }
  }
}
</script>
