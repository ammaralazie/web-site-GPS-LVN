<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <v-img src="/images/c67a0241-dec7-4f67-ab29-9c9c4f24cd94.gif" width="100%" height="100%">
        <slick class="slider" ref="slider" :options="slickOptions" @afterChange="handleAfterChange">
          <div class="slide" id="slide1">
            <div class="inner">
              <!--  <div class="img background-banner">
                <img class="img-2d3d" :src="imgAPI.saas2[5]" :data-2d="imgAPI.saas2[4]" :data-3d="imgAPI.saas2[5]"
                  alt="background" />
              </div> -->
              <v-container>
                <v-row v-if="$i18n.locale == 'ar'">
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img class="img-2d3d img-slide1 imgmap" src="/images/gpslvn/IMG_5073.PNG" :data-2d="imgAPI.saas2[0]"
                        :data-3d="imgAPI.saas2[1]" alt="banner 1 3D" />
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2" style="color: rgb(255, 255, 255);">{{ $t('saas2.slid1-title') }}</h4>
                      <h5 class="use-text-subtitle2">{{ $t('saas2.slid1-subtitle') }}</h5>
                      <div class="btn-area">
                        <v-btn text large href="#" class="button" color="primary">
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn large color="primary" :href="link.saas2.contact" class="button">
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>

                <v-row v-if="$i18n.locale == 'en'">
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2" style="color: rgb(255, 255, 255);">{{ $t('saas2.slid1-title') }}</h4>
                      <h5 class="use-text-subtitle2">{{ $t('saas2.slid1-subtitle') }}</h5>
                      <div class="btn-area">
                        <v-btn text large href="#" class="button" color="primary">
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn large color="primary" :href="link.saas2.contact" class="button">
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img class="img-2d3d img-slide1 imgmap" src="/images/gpslvn/IMG_5073.PNG" :data-2d="imgAPI.saas2[0]"
                        :data-3d="imgAPI.saas2[1]" alt="banner 1 3D" />
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="slide" id="slide2">
            <div class="inner">
              <hidden point="mdUp">
                <div class="img background-banner">
                  <img class="img-2d3d" :src="imgAPI.saas2[5]" :data-2d="imgAPI.saas2[4]" :data-3d="imgAPI.saas2[5]"
                    alt="background" />
                </div>
              </hidden>
              <v-container>
                <v-row v-if="$i18n.locale == 'ar'" justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img style="max-height:auto" class="my-auto img-2d3d img-slide2" src="/images/gpslvn/IMG_5044.PNG"
                        :data-2d="imgAPI.saas2[2]" :data-3d="imgAPI.saas2[3]" alt="banner 2 3D" />
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2" style="color: rgb(255, 255, 255);">
                        {{ $t('saas2.slid2-title') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        <span>
                          {{ $t('saas2.slid2-subtitle') }}
                        </span>
                      </h5>
                      <div class="btn-area">
                        <v-btn text large href="#" class="button" color="primary">
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn large color="primary" :href="link.saas2.contact" class="button">
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>

                <v-row v-if="$i18n.locale == 'en'" justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2" style="color: rgb(255, 255, 255);">
                        {{ $t('saas2.slid2-title') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        <span>
                          {{ $t('saas2.slid2-subtitle') }}
                        </span>
                      </h5>
                      <div class="btn-area">
                        <v-btn text large href="#" class="button" color="primary">
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn large color="primary" :href="link.saas2.contact" class="button">
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img style="max-height:auto" class="my-auto img-2d3d img-slide2" src="/images/gpslvn/IMG_5044.PNG"
                        :data-2d="imgAPI.saas2[2]" :data-3d="imgAPI.saas2[3]" alt="banner 2 3D" />
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="slide center-content" id="slide3">
            <div class="inner">
              <v-container>
                <v-row justify="end">
                  <v-col cols="12" class="px-sm-6">
                    <div class="text text-center">
                      <h4 class="use-text-title2" style="color: rgb(255, 255, 255);">{{ $t('saas2.slid3-title') }}</h4>
                      <h5 class="use-text-subtitle2">{{ $t('saas2.slid3-subtitle') }}</h5>
                      <div class="btn-area">
                        <v-btn text color="primary" large href="#" class="button">
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn large color="primary" :href="link.saas2.contact" class="button">
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="img h-banner">
                      <img style="max-height: 250px;" class="img-2d3d" src="/images/gpslvn/IMG_5046.PNG"
                        :data-2d="imgAPI.saas2[6]" :data-3d="imgAPI.saas2[7]" alt="banner 3 3D" />
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </slick>
      </v-img>
    </div>
    <div class="slide-nav-group" style="z-index: 10;">
      <div class="deco-wrap">
        <div class="deco bottom">
          <svg class="wave">
            <use xlink:href="/images/saas2/deco-wave.svg#main" />
          </svg>
        </div>
        <div class="deco top">
          <div class="wave wave-cover" />
        </div>
      </div>
      <div class="wave wave-cover" />
      <hidden point="smDown">
        <v-container>
          <nav class="slide-nav">
            <v-btn style="color: white;" :class="{ active: currentSlide === 0 }" @click="gotoSlide(0)" text
              class="text-center">
              <strong>{{ $t('saas2.Personal tracking') }}</strong>
              <div class="ma-auto">
                {{ $t('saas2.Customization and Scalability') }}
              </div>
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn style="color: white;" :class="{ active: currentSlide === 1 }" @click="gotoSlide(1)" text
              class="text-center">
              <strong class="ma-auto">{{ $t('saas2.Tracking Server') }}</strong>
              <div class="ma-auto">
                {{ $t('saas2.slid2-subtitle1') }}
              </div>
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn :class="{ active: currentSlide === 2 }" class="pa-3 px-6" style="color: white;" @click="gotoSlide(2)"
              text>
              <strong>{{ $t('saas2.fleet management') }}</strong>
              {{ $t('saas2.Data privacy and security') }}
            </v-btn>
          </nav>
        </v-container>
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';

.img {
  width: 100%;
  height: 100%;

  .imgmap {
    max-height: unset;
  }
}
</style>

<script>
import Hidden from '../../Hidden'
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'
export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link: link,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        cssEase: 'ease-out',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true,
              fade: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    this.changActiveColor()
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    },
    changActiveColor() {
      window.addEventListener('scroll', () => {
        var scrollY = window.scrollY || window.pageYOffset
        if (
          scrollY > 10 &&
          (this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg')
        ) {
          document.documentElement.style.setProperty('--active', '#541aac')
        } else if (
          scrollY < 10 &&
          (this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg')
        ) {
          document.documentElement.style.setProperty('--active', '#01cbbd')
        }
      })
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
