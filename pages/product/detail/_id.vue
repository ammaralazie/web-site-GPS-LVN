<template>
  <div class="main-wrap ">
    <main-header></main-header>
    <Product></Product>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import Product from '~/components/Product'
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Product
  }
}
</script>

<style lang="scss" scoped></style>
