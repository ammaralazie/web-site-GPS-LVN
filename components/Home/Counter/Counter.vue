<template>
  <div class="counter-wrap">
    <div id="watched_counter" />
    <v-container class="max-md">
      <v-row justify="center" align="center" class="counter-inner spacing6">
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +
                <span v-if="loaded" v-countUp:onWindowScroll.once="{
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 142,
                  options: { duration: 1 }
                }" />
              </h3>
              <p class="use-text-subtitle">
                <v-icon class="icon">mdi-server-security</v-icon>
                {{ $t('saas2.online_servers') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span v-if="loaded" v-countUp:onWindowScroll.once="{
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 53,
                  options: { duration: 1 }
                }" />K
              </h3>
              <p class="use-text-subtitle">
                <v-icon class="icon">mdi-account-multiple</v-icon>
                {{ $t('saas2.counter_users') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span v-if="loaded" v-countUp:onWindowScroll.once="{
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 67,
                  options: { duration: 1 }
                }" />K
              </h3>
              <p class="use-text-subtitle" style="white-space:nowrap">
                <v-icon class="icon">mdi-car-connected</v-icon>
                {{ $t('saas2.GPS devices online') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
