<template>
  <fragment>
    <scrollactive v-if="isDesktop" :offset="navOffset" active-class="active" tag="div">

      <!-- first menu discover lvn -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item descoverItems" v-bind="attrs" v-on="on">
            <v-btn text class="header-color">
              {{ $t('Discover LVN') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>

        <!-- decover lvn items -->
        <div class="mega-menu2 rounded-menu2">
          <v-container>
            <v-row class="ma-0">
              <v-col v-for="(item, index) in $store.state.dsecoverItems" :key="item.title" cols="12" lg="3" md="3" sm="6"
                xs="6">
                <v-card height="150px" link class="elevation-3"
                  :to="index != 3 ? '/' + $i18n.locale + '/discover/' + getItem(index) : '/' + $i18n.locale + '/' + getItem(index)">
                  <v-card-title>
                    <v-icon>{{ item.icon }}</v-icon>
                    <div class="mx-2">
                      {{ item.title }}
                    </div>
                  </v-card-title>
                  <v-card-text>
                    {{ item.detail }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- /first menu discover lvn-->

      <!-- seconde menu for products -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text class="header-color">
              {{ $t('common.header_products') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          <v-container>
            <v-row class="ma-0 mb-2">
              <v-col v-for="item in $store.state.products" :key="item.title" cols="12" lg="4" md="4" sm="6" xs="12">
                <v-card link :to="`/${$i18n.locale}/products/detail/${item.title}`" class="elevation-3" height="170">
                  <v-card-text>
                    <img :src="item.img" />
                    <br>
                    <strong>
                      {{ item.title }}
                    </strong>
                    <p class="mt-3">
                      {{ item.detail }}
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- /seconde menu for products -->

      <!-- seconde menu for Industries -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text class="header-color">
              {{ $t('Industries') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          <industries></industries>
        </div>
      </v-menu>
      <!-- /seconde menu for Industries -->

      <!-- seconde menu for resources -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text class="header-color">
              {{ $t('Resources') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          <v-container>
            <v-row class="ma-0">
              <v-col cols="12" lg="3" v-for="(item, index) in  resureces " :key="index">
                <v-card link
                  :to="index !== (resureces.length - 1) ? `/${$i18n.locale}/resources/${item.title}` : `/${$i18n.locale}/contact`"
                  class="elevation-3" height="150px">
                  <v-card-title>
                    <v-icon>
                      {{ item.icon }}
                    </v-icon>
                    <div class="mx-2">
                      {{ item.title }}
                    </div>
                  </v-card-title>
                  <v-card-text>
                    {{ item.detail }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- /seconde menu for resources -->

      <!-- seconde menu for Hardware -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text class="header-color">
              {{ $t('Hardware') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          <v-container>
            <v-row class="ma-0">
              <v-col cols="12" lg="4" v-for="( item, index ) in  hardwares " :key="index">
                <v-card link :to="`/${$i18n.locale + link}`" class="elevation-3" height="150px">
                  <v-card-title>
                    <v-icon>
                      {{ item.icon }}
                    </v-icon>
                    <div class="mx-2">
                      {{ item.title }}
                    </div>
                  </v-card-title>
                  <v-card-text>
                    {{ item.detail }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- /seconde menu for Hardware -->

    </scrollactive>
  </fragment>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import industries from '../industries.vue'
import link from '~/static/text/link'
export default {
  data() {
    return {
      link: link.saas2.comingSoon,
      navOffset: 20,
      hover: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      decoverItems: [
        {
          icon: 'mdi-home',
          title: 'title name',
          description: 'this is decription'
        }
      ],
      resureces: this.$store.state.resources,
      hardwares: [
        {
          title: 'GPS Tracker',
          icon: 'mdi-go-kart-track',
          detail: `Successfully integrated more than 1200+ GPS trackers without any compatibility issues`
        },
        {
          title: 'Hardware Manufacturer ',
          icon: 'mdi-account-hard-hat',
          detail: `Extended our reach with a wide range of top hardware manufacturers`
        }
      ]
    }
  },
  methods: {
    setOffset: function (offset) {
      this.navOffset = offset
    },
    getItem: function (item) {
      const items = ['About', 'Career', 'Exhibitions', 'contact']
      return items[item]
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },
  props: {
    menuPrimary: {
      type: Array,
      required: true
    },
    menuSecondary: {
      type: Array,
      required: true
    },
    singleNav: {
      type: Boolean,
      default: false
    }
  },
  components: {
    industries
  }
}
</script>
