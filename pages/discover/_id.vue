<template>
  <div>
    <Header></Header>
    <component :is="$route.params.id"></component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import About from '~/components/discover/About/index.vue'
import Career from '~/components/discover/Career/index.vue'
import Exhibitions from '~/components/discover/Exhibitions/index.vue'

export default {
  components: {
    Header,
    Footer,
    About,
    Career,
    Exhibitions
  }
}
</script>

<style lang="scss" scoped></style>
