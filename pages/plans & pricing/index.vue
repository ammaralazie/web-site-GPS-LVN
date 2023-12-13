<template>
  <div class="main-wrap">
    <main-header></main-header>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import Section1 from '~/components/plans_pricing/Section1'
import Section2 from '~/components/plans_pricing/Section2'
import Section3 from '~/components/plans_pricing/Section3'

export default {
  data() {
    return {
      id: null,
      product: null
    }
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Section1,
    Section2,
    Section3
  }
}
</script>
