<template>
  <div class="main-wrap">
    <main-header :href="link.saas2.login" text="login" />
    <div class="container-general container-front">
      <gpslvn-form></gpslvn-form>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header/Basic'
import Footer from '~/components/Footer'
import RegisterForm from '~/components/Forms/Register'
import link from '~/static/text/link'
import GPSLVN from '~/components/Forms/GPSLVN'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
    'gpslvn-form': GPSLVN
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.saas2.desc
    }
  }
}
</script>
