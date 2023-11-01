<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <contact />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Contact from '~/components/Forms/Contact'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Contact
  },
  head() {
    return {
      title: 'Contact | ' + brand.saas2.desc
    }
  }
}
</script>
