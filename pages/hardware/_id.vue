<template>
  <div class="main-wrap ">
    <main-header></main-header>
    <Hardware></Hardware>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import Hardware from '~/components/Hardware'
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Hardware
  }
}
</script>

<style lang="scss" scoped></style>
