<template>
  <footer class="footer">
    <decoration />
    <subscribe-form v-if="extend" />
    <v-container class="fixed-width">
      <v-row>
        <v-col class="pa-4 py-lg-10" md="3" cols="12">
          <div class="logo-area">
            <logo type="landscape" />
            <p class="body-2">
              {{ $t('saas2.details') }}
            </p>
          </div>
          <p v-if="isDesktop" class="body-2">
            &copy;&nbsp;
            {{ brand.saas2.footerText }}
          </p>
        </v-col>
        <v-col class="pa-4" md="6" cols="12">
          <v-expansion-panels v-if="isMobile">
            <v-expansion-panel v-for="(footer, index) in footers" :key="index" class="accordion-content">
              <v-expansion-panel-header>
                <h6 class="title mb-4">
                  {{ $t('common.footer_' + footer.title) }}
                </h6>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li v-for="(item, index) in footer.description" :key="index">
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row v-if="isDesktop" justify="space-around">
            <v-col v-for="(footer, index) in footers" :key="index" class="pa-4 site-map-item">
              <h6 class="title mb-4">
                {{ $t('common.footer_' + footer.title) }}
              </h6>
              <ul>
                <li v-for="(item, index) in footer.description" :key="index">
                  <nuxt-link :to="footer.link[index]">
                    {{ $t("saas2." + item) }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3" cols="12" class="pa-4">
          <div class="socmed">
            <v-btn v-for="(item, index) in socialMediaIcons" :key="index" link text icon class="button">
                <a :href="item.link" target="_blank">
                  <span :class="item.icon" />
                </a>
              </v-btn>

          </div>
          <v-select :items="langList" :value="lang" v-model="lang" label="" outlined class="select-lang"
            prepend-inner-icon="mdi-web" @change="switchLang(lang)" />
          <p v-if="isMobile" class="body-2 text-center">
            &copy;&nbsp;
            {{ brand.saas2.footerText }}
          </p>
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
        title: 'company',
        description: [
          'contact',
          'Pricing',
          'Postman collection',
          'Support',
          'Blog'
        ],
        link: ['#', '#', '#', '#', '#']
      },
      {
        title: 'resources',
        description: [
          'safe-driving',
          'eco-driving',
          'fleet-tracker',
          'insights',
          'in-vehicle-data',
          'driver-engagements'
        ],
        link: [
          '#',
          '#',
          '#',
          '#',
          '#',
          '#'
        ]
      },
      {
        title: 'legal',
        description: ['Privacy policy', 'Terms of use'],
        link: ['#', '#'],
      },
    ],
    socialMediaIcons: [
      {
        icon: "ion-logo-facebook icon",
        link: "https://www.facebook.com/Gpslvn"
      },
      {
        icon: "ion-logo-twitter icon",
        link: "https://twitter.com/gpslvn"
      },
      {
        icon: "ion-logo-instagram icon",
        link: "https://www.instagram.com/gpslvn/"
      },
      {
        icon: "ion-logo-linkedin icon",
        link: "https://iq.linkedin.com/company/gpslvn"
      },
      {
        icon: "ion-logo-youtube icon",
        link: "https://www.youtube.com/@gpslvn2259"
      }
    ]
  }),
  mounted() {
    this.lang = this.$i18n.locale
  },
  computed: {
    langList: function () {
      const list = []
      this.$i18n.locales.map((item) => {
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
    },
  },
  methods: {
    switchLang: function (val) {
      this.$i18n.setLocale(val)
    },
  },
  props: {
    extend: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
