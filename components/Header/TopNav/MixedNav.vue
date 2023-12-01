<template>
  <fragment>
    <scrollactive v-if="isDesktop" :offset="navOffset" active-class="active" tag="div">

      <!-- first menu discover lvn -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item descoverItems" v-bind="attrs" v-on="on">
            <v-btn text>
              {{ $t('Discover LVN') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>

        <!-- decover lvn items -->
        <div class="mega-menu2 rounded-menu2">
          <v-row class="ma-0">
            <v-col v-for="(item, index) in $store.state.productItems" :key="item.product_item_title" cols="12" lg="3"
              md="3" sm="6" xs="6">
              <v-card height="130px" link class="elevation-3"
                :href="index !== 1 ? '/' + $i18n.locale + '/discover/' + getItem(index) : '/' + $i18n.locale + '/' + getItem(index)">
                <v-card-title>
                  <v-icon>{{ item.product_item_icon }}</v-icon>
                  <div class="mx-2">
                    {{ item.product_item_title }}
                  </div>
                </v-card-title>
                <v-card-text>
                  {{ item.product_item_description }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-menu>
      <!-- /first menu discover lvn-->

      <!-- seconde menu for products -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
              {{ $t('common.header_products') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          <v-row class="ma-0 mb-2">
            <v-col v-for="item in $store.state.products" :key="item.title" cols="12" lg="4" md="4" sm="6" xs="12">
              <v-card link :href="`/${$i18n.locale}/product/detail/${item.title}`" class="eveluation-3" height="200">
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
        </div>
      </v-menu>
      <!-- /seconde menu for products -->

      <!-- seconde menu for Industries -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
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
            <v-btn text>
              {{ $t('Resources') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          Lorem, ipsum dolor.
        </div>
      </v-menu>
      <!-- /seconde menu for resources -->

      <!-- seconde menu for Hardware -->
      <v-menu :open-on-hover="hover" :position-x="0" max-height="100%" offset-y content-class="mega-menu-root2"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
              {{ $t('Hardware') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu2 rounded-menu2">
          place your Hardwares here
        </div>
      </v-menu>
      <!-- /seconde menu for Hardware -->


      <!-- <v-btn v-if="singleNav" v-for="(item, index) in menuPrimary" :key="index" :href="item.link"
        class="anchor-link scrollactive-item" text @click="setOffset(item.offset, index)">
        {{ $t('saas2.header_' + item.name) }}
      </v-btn>
      <v-btn v-if="!singleNav" v-for="(item, index) in menuPrimary" :key="index" :href="'/' + item.link" text>
        {{ $t('saas2.header_' + item.name) }}
      </v-btn>
      <v-menu :open-on-hover="hover" :position-x="0" max-height="480" offset-y content-class="mega-menu-root"
        min-width="100%" nudge-left nudge-width>
        <template #activator="{ attrs, on }">
          <span class="button-item" v-bind="attrs" v-on="on">
            <v-btn text>
              {{ $t('common.header_sample_page') }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu rounded-menu">
          <v-container class="max-md">
            <v-row>
              <v-col v-for="(subitem, index) in menuSecondary" :key="index" sm="3">
                <v-list>
                  <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
                  <img :src="subitem.thumb" alt="thumbnail" class="thumb-menu" />
                  <v-list-item-group>
                    <v-list-item v-for="(item, index) in subitem.child" :key="index" :href="item.link"
                      :class="{ current: curURL === (curOrigin + langPath + item.link) }">
                      <v-list-item-content>
                        <v-list-item-title class="menu-list" v-text="$t('common.header_' + item.name)" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu> -->

    </scrollactive>
  </fragment>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import industries from '../industries.vue'
export default {
  data() {
    return {
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
      resureces: this.$stroe.state.resources
    }
  },
  methods: {
    setOffset: function (offset) {
      this.navOffset = offset
    },
    getItem: function (item) {
      const items = ['Exhibitions', 'contact', 'Career', 'About']
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
