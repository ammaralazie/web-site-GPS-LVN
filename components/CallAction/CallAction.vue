<template>
  <fragment>
      <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>
          <div class="root">
            <u-animate
              :offset="-100"
              name="fadeInUpShort"
              delay="0.5s"
              duration="0.5s"
            >
              <v-card class="paper">
                <div class="deco" />
                <h4 class="display-1 mb-10">
                  {{ $t('saas2.footer_waiting') }}
                </h4>
                <v-btn
                  :href="link.saas2.contact"
                  large
                  color="primary"
                  class="button"
                >
                  {{ $t('saas2.getstarted') }}
                </v-btn>
              </v-card>
            </u-animate>
          </div>
        </u-animate-container>
      </v-container>
    </fragment>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
