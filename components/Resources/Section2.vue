<template>
  <div class="section2">
    <div class="text-h5">
      Content Type
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="mt-3" style="display: grid;">
      <nuxt-link class=" my-2 nuxtLink" :to="`/${$i18n.locale}/resources/${$store.state.resources_page['1'].title}`">Blog ({{ $store.state.resources_page['1'].cards.length }})</nuxt-link>
      <nuxt-link class=" my-2 nuxtLink" :to="`/${$i18n.locale}/resources/${$store.state.resources_page['2'].title}`">UffiTALKS ({{ $store.state.resources_page['2'].cards.length }})</nuxt-link>
      <nuxt-link class=" my-2 nuxtLink" :to="`/${$i18n.locale}/resources/${$store.state.resources_page['4'].title}`">Webinars ({{ $store.state.resources_page['4'].cards.length }})</nuxt-link>
      <nuxt-link class=" my-2 nuxtLink" :to="`/${$i18n.locale}/resources/${$store.state.resources_page['3'].title}`">eBooks ({{ $store.state.resources_page['3'].cards.length }})</nuxt-link>
      <nuxt-link class=" my-2 nuxtLink" :to="`/${$i18n.locale}/resources/What's New`">What's New ({{ $store.state.resources_page['5'].cards.length }})</nuxt-link>
      <p>Leaflet (12)</p>
    </div>
    <v-divider></v-divider>
    <div class="text-h5 mt-2">
      Newsletter Subscribe
    </div>

    <div class="mt-7">
      Get helpful fleet management content delivered to your inbox
    </div>

    <v-text-field outlined class="mt-7" label="Enter your email"></v-text-field>
    <v-btn class="rounded-0" color="primary">Subscribe</v-btn>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section2 {
  position: relative;
  z-index: 100;
  margin: 5px 10px;
}
</style>
