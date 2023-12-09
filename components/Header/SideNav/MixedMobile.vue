<template>
  <fragment>
    <v-list dense>
      <!-- descover items -->
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('Discover LVN') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list>
          <nuxt-link class="nuxtLink" v-for="(item, index) in $store.state.dsecoverItems" :key="index"
            :to="index != 3 ? '/' + $i18n.locale + '/discover/' + getItem(index) : '/' + $i18n.locale + '/' + getItem(index)">
            <v-list-item link>
              <v-row>
                <v-col cols="12" :class="index != (products.length - 1) ? 'mb-1 d-flex' : 'd-flex'">
                  <div class="text-caption">
                    {{ $t(item.title) }}
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-list-group>

      <!-- product items -->
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('common.header_products') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list>
          <nuxt-link class="nuxtLink" v-for="(product, index) in $store.state.products" :key="index"
            :to="`/${$i18n.locale}/product/detail/${product.id}`">
            <v-list-item link>
              <v-row>
                <v-col cols="12" :class="index != (products.length - 1) ? 'mb-1 d-flex' : 'd-flex'">
                  <div class="text-caption">
                    {{ $t(product.title) }}
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-list-group>

      <!-- Industries items -->
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('Industries') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list>
          <nuxt-link class="nuxtLink" v-for="(item, index) in $store.state.industries" :key="index"
            :to="'/' + $i18n.locale + '/industries/detail/' + item.id">
            <v-list-item link>
              <v-row>
                <v-col cols="12">
                  <div class="text-caption">
                    {{ $t(item.title) }}
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-list-group>

      <!-- resources items -->
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('Resources') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list>
          <nuxt-link class="nuxtLink" v-for="(item, index) in  $store.state.resources " :key="index"
            :to="index !== ($store.state.resources.length - 1) ? `/${$i18n.locale}/resources/${item.title}` : `/${$i18n.locale}/contact`">
            <v-list-item link>
              <v-row>
                <v-col cols="12">
                  <div class="text-caption">
                    {{ $t(item.title) }}
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-list-group>

      <!-- Hardware items -->
        <v-list-group class="group-child">
          <template #activator>
            <v-list-item class="has-child">
              <v-list-item-title class="menu-list">
                {{ $t('Hardware') }}
              </v-list-item-title>
            </v-list-item>
          </template>
          <v-list>
            <nuxt-link class="nuxtLink" v-for="( item, index ) in  hardwares " :key="index"
              :to="`/${$i18n.locale + link.saas2.comingSoon}`">
              <v-list-item link>
                <v-row>
                  <v-col cols="12">
                    <div class="text-caption">
                      {{ $t(item.title) }}
                    </div>
                  </v-col>
                </v-row>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
    </v-list>
    <v-divider />
    <v-list dense>
      <v-list-item v-for="(item, index) in ['login', 'register']" :key="index" :href="link.saas2[item]"
        :class="{ current: curURL === (curOrigin + langPath + item) }" link>
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ $t('common.header_' + item) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
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
      ],
      link: link,
      isOpen: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      products: this.$store.state.products
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
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
  methods: {
    getItem: function (item) {
      const items = ['About', 'Career', 'Exhibitions', 'contact']
      return items[item]
    }
  },
}
</script>
