<template>
  <div class="main-wrap">
    <main-header />
    <banner>
      <img
        :src="imgAPI.ui[5]"
        :data-2d="imgAPI.ui[4]"
        :data-3d="imgAPI.ui[5]"
        class="img-2d3d"
        alt="services 3d"
      />
    </banner>
    <div class="space-top-short">
      <counter />
    </div>
    <div class="space-top-short space-bottom-short text-center text-md-start">
      <v-container>
        <title-main :align="isMobile ? 'center' : 'left'">
          <span>
            {{ $t('common.about_team') }}
          </span>
        </title-main>
        <p class="use-text-subtitle2">Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <team-grid />
      </v-container>
    </div>
    <div class="space-bottom-short">
      <photo-slider />
    </div>
    <div class="space-top-short space-bottom-short" id="call-to-action">
      <call-action />
    </div>
    <div id="footer">
      <main-footer extend />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Header from '~/components/Header'
import Banner from '~/components/About/Banner'
import Counter from '~/components/Counter'
import PhotoSlider from '~/components/About/PhotoSlider'
import CallAction from '~/components/CallAction'
import TeamGrid from '~/components/About/TeamGrid'
import Footer from '~/components/Footer'
import Title from '~/components/Title'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    'title-main': Title,
    TeamGrid,
    Banner,
    Counter,
    PhotoSlider,
    CallAction
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  },
  head() {
    return {
      title: 'Team | ' + brand.saas2.desc
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
