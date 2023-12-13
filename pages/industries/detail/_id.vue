<template>
  <div class="main-wrap">
    <main-header></main-header>
    <FirstSection>
    </FirstSection>
    <SecondSection class="mt-10"></SecondSection>
    <ThirdSection></ThirdSection>
    <FourthSection class="mt-10"></FourthSection>
    <FifthSection class="mt-10"></FifthSection>
    <main-footer></main-footer>
  </div>
</template>

<script>
import FirstSection from '~/components/industries/FirstSection.vue'
import SecondSection from '~/components/industries/SecondSection.vue'
import ThirdSection from '~/components/industries/ThirdSection.vue'
import FourthSection from '~/components/industries/FourthSection.vue'
import FifthSection from '~/components/industries/FifthSection.vue'


import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { productDetail } from '~/static/text/productDetail.js'

export default {
  data() {
    return {
      id: null,
      productDetail: productDetail,
      product: null
    }
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection
  },
  mounted() {
    const id = this.$route.params.id
    this.id = id
    this.product = this.productDetail[id - 1]
  }
}
</script>
