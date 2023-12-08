<template>
  <div class="main-wrap">
    <main-header></main-header>
    <Resources></Resources>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import Resources from '~/components/Resources'
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Resources
  }
}
</script>

<style lang="scss" scoped></style>
