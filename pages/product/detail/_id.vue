<template>
  <div class="main-wrap">
    <main-header></main-header>
    <FirstSection v-if="product" :boldHeader="product.boldHeader" :subTitle="product.subTitle" :file="product.file">
    </FirstSection>
    <SecondSection v-if="product" class="mt-10" :id="id"></SecondSection>
    <ThirdSection v-if="product" :figures="product.figures" class="mt-10" :id="id"></ThirdSection>
    <FourthSection v-if="product && id != 4" :data="product.sectionFour" class="mt-10"></FourthSection>
    <FifthSection v-if="product" class="mt-10" :id="id"></FifthSection>
    <SixSection v-if="product" :imagText="product.imagText" class="mt-10" :id="id"></SixSection>
    <SevenSection v-if="product" class="mt-10" :id="id"></SevenSection>
    <RaitSection v-if="product" class="mt-10" :id="id"></RaitSection>
    <LastSection v-if="product" class="mt-10 mb-10" :id="id"></LastSection>
    <main-footer></main-footer>
  </div>
</template>

<script>
import FirstSection from '~/components/products/FirstSection.vue'
import SecondSection from '~/components/products/SecondSection.vue'
import ThirdSection from '~/components/products/ThirdSection.vue'
import FourthSection from '~/components/products/FourthSection.vue'
import FifthSection from '~/components/products/FifthSection.vue'
import SixSection from '~/components/products/SixSection.vue'
import SevenSection from '~/components/products/SevenSection.vue'
import RaitSection from '~/components/products/RaitSection.vue'
import LastSection from '~/components/products/LastSection.vue'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { productDetail } from '~/static/text/productDetail.js'

export default {
  data() {
    return {
      id: null,
      productDetail: productDetail,
      product: null,
    }
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixSection,
    SevenSection,
    RaitSection,
    LastSection
  },
  mounted() {
    const id = this.$route.params.id
    this.id = id
    this.product = this.productDetail[id - 1]
  }
}
</script>

<style lang="scss" scoped></style>
