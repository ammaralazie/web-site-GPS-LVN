<template>
  <div class="main-wrap ">
    <Header />
    <Featuer></Featuer>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import Featuer from '~/components/Product/Featuer'
export default {
  components: {
    Featuer,
    Header,
    Footer
  }
}
</script>
