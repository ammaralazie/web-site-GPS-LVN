<template>
  <footer class="footer">
    <decoration />
    <subscribe-form v-if="extend" />
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs=12>
          <v-row>

            <!-- quick links -->
            <v-col cols="12">
              <v-expansion-panels>
                <v-expansion-panel v-if="isMobile" class="accordion-content">
                  <v-expansion-panel-header>
                    {{ $t('Quick Links') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="(el, index) in footers[0].description" :key="index">
                      <nuxt-link class="nuxtLink my-2" :to="footers[0].link[index]">
                        {{ $t(el) }}
                      </nuxt-link>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <div v-if="isDesktop" justify="space-around">
                <h6 class="title mb-4">
                  {{ $t(footers[0].title) }}
                </h6>
                <ul>
                  <li v-for="(item, index) in footers[0].description" :key="index">
                    <nuxt-link :to="footers[0].link[index]">
                      {{ $t(item) }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </v-col>

            <!-- product links -->
            <v-col cols="12">
              <v-expansion-panels>
                <v-expansion-panel v-if="isMobile" class="accordion-content">
                  <v-expansion-panel-header>
                    {{ $t('Products') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="(el, index) in footers[1].description" :key="index">
                      <nuxt-link class="nuxtLink my-2" :to="footers[1].link[index]">
                        {{ $t(el) }}
                      </nuxt-link>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <div v-if="isDesktop" justify="space-around">
                <h6 class="title mb-4">
                  {{ $t(footers[1].title) }}
                </h6>
                <ul>
                  <li v-for="(item, index) in footers[1].description" :key="index">
                    <nuxt-link :to="footers[1].link[index]">
                      {{ $t(item) }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <!-- Industries links -->
        <v-col cols="12" lg="4" md="4" sm="12" xs=12>
          <v-expansion-panels>
            <v-expansion-panel v-if="isMobile" class="accordion-content">
              <v-expansion-panel-header>
                {{ $t('Industries') }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-for="(el, index) in footers[2].description" :key="index">
                  <nuxt-link class="nuxtLink my-2" :to="footers[2].link[index]">
                    {{ $t(el) }}
                  </nuxt-link>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <div v-if="isDesktop" justify="space-around">
            <h6 class="title mb-4">
              {{ $t(footers[2].title) }}
            </h6>
            <ul>
              <li v-for="(item, index) in footers[2].description" :key="index">
                <nuxt-link :to="footers[2].link[index]">
                  {{ $t(item) }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </v-col>

        <!-- resources links -->
        <v-col cols="12" lg="4" md="4" sm="12" xs=12>
          <v-row>
            <v-col cols="12">
              <v-expansion-panels>
                <v-expansion-panel v-if="isMobile" class="accordion-content">
                  <v-expansion-panel-header>
                    {{ $t('Resources') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="(el, index) in footers[3].description" :key="index">
                      <nuxt-link class="nuxtLink my-2" :to="footers[3].link[index]">
                        {{ $t(el) }}
                      </nuxt-link>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <div v-if="isDesktop" justify="space-around">
                <h6 class="title mb-4">
                  {{ $t(footers[3].title) }}
                </h6>
                <ul>
                  <li v-for="(item, index) in footers[3].description" :key="index">
                    <nuxt-link :to="footers[3].link[index]">
                      {{ $t(item) }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="rounded-lg pa-4" style="border: 1px solid;">
                <div class="text-h5">
                  <v-icon size="25">mdi-phone</v-icon>
                  Let’s Talk
                </div>
                <div class="mt-2" style="display: grid;">
                  <span>
                    india
                  </span>
                  <span>
                    +91-83078 83078
                  </span>
                </div>
                <div class="mt-3" style="display: grid;">
                  <span>
                    india
                  </span>
                  <span>
                    +91-83078 83078
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col v-if="isDesktop" cols="12" class="d-flex justify-space-between align-center">
          <div class="copyRight">
            Copyright <v-icon>mdi-copyright</v-icon> 2023 GPS LVN. All rights reserved.
          </div>
          <div class="socmed">
            <v-btn v-for="(item, index) in socialMediaIcons" :key="index" link text icon class="button">
              <a :href="item.link" target="_blank">
                <span :class="item.icon" />
              </a>
            </v-btn>
          </div>
        </v-col>
        <v-col v-if="isMobile">
          <div class="socmed">
            <v-btn v-for="(item, index) in socialMediaIcons" :key="index" link text icon class="button">
              <a :href="item.link" target="_blank">
                <span :class="item.icon" />
              </a>
            </v-btn>
          </div>
          <div class="copyRight text-center mt-9">
            Copyright <v-icon>mdi-copyright</v-icon> 2023 GPS LVN
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-sitemap';
</style>

<script>
import Logo from '../Logo'
import brand from '~/static/text/brand'
import Decoration from './Decoration'
import SubscribeForm from '../SubscribeForm'
import { filter } from '../../helper/filterObjectValue'

export default {
  components: {
    Logo,
    Decoration,
    SubscribeForm
  },
  data: () => ({
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'Quick Links',
        description: [
          'Home',
          'About Us',
          'Plans & Pricing',
          'Career',
          'Contact Us',
          'Privacy Policy'
        ],
        link: []
      },
      {
        title: 'Products',
        description: [],
        link: []
      },
      {
        title: 'Industries',
        description: [],
        link: []
      },
      {
        title: 'Resources',
        description: [],
        link: []
      }
    ],
    socialMediaIcons: [
      {
        icon: 'ion-logo-facebook icon',
        link: 'https://www.facebook.com/Gpslvn'
      },
      {
        icon: 'ion-logo-twitter icon',
        link: 'https://twitter.com/gpslvn'
      },
      {
        icon: 'ion-logo-instagram icon',
        link: 'https://www.instagram.com/gpslvn/'
      },
      {
        icon: 'ion-logo-linkedin icon',
        link: 'https://iq.linkedin.com/company/gpslvn'
      },
      {
        icon: 'ion-logo-youtube icon',
        link: 'https://www.youtube.com/@gpslvn2259'
      }
    ]
  }),
  created() {
    let items = ['products', 'industries', 'resources']
    items.forEach((item, index) => {
      this.footers[index + 1].description = this.$store.state[item].map(
        el => el.title
      )
      if (index != 2)
        this.footers[index + 1].link = this.$store.state[item].map(
          el => `/${this.$i18n.locale}/${item}/detail/${el.title}`
        )
      else
        this.footers[index + 1].link = this.$store.state[item].map(
          el => `/${this.$i18n.locale}/${item}/${el.title}`
        )
    })

    this.lang = this.$i18n.locale
    this.footers[0].link = [
      `/${this.lang}`,
      `/${this.lang}/discover/About`,
      `/${this.lang}/plans%20%26%20pricing`,
      `/${this.lang}/discover/Career`,
      `/${this.lang}/contact`,
      `/${this.lang}/privacy_policy`
    ]
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  computed: {
    langList: function () {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  },
  methods: {
    switchLang: function (val) {
      this.$i18n.setLocale(val)
    }
  },
  props: {
    extend: {
      type: Boolean,
      default: false
    }
  }
}
</script>
