<template>
  <div class="main-wrap">
    <main-header></main-header>
    <Section1></Section1>
    <Section2></Section2>
    <section3></section3>
    <Section4></Section4>
    <Section5></Section5>
    <Section6></Section6>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Section1 from '~/components/industries/use-case/Section1'
import Section2 from '~/components/industries/use-case/Section2'
import Section3 from '~/components/industries/use-case/Section3'
import Section4 from '~/components/industries/use-case/Section4'
import Section5 from '~/components/industries/use-case/Section5'
import Section6 from '~/components/industries/use-case/Section6'

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
    Section3,
    Section4,
    Section5,
    Section6
  }
}
</script>
