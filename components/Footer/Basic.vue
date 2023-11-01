<template>
  <footer class="footer">
    <decoration />
    <subscribe-form v-if="extend" />
    <v-container class="max-lg">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('saas2.header_'+item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon class="icon">
          <i class="ion-logo-twitter" />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.saas2.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';
</style>

<script>
import brand from '~/static/text/brand'
import Decoration from './Decoration'
import menu from '../Header/data/single'
import SubscribeForm from '../SubscribeForm'

export default {
  components: {
    Decoration,
    SubscribeForm
  },
  data: () => ({
    brand: brand,
    menu: menu
  }),
  props: {
    extend: {
      type: Boolean,
      default: false
    }
  }
}
</script>
