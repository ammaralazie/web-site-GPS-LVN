<template>
  <div class="section1">
    <v-img src="/images/background-gpslvn.gif" height="700" width="100%" class="head d-flex align-center justify-center">
      <div class="align-center justify-center mx-5" style="display: grid;">
        <div class="text-h3">White Label Fleet Management Software</div>
        <div style="width: 450px;" class="text-center mx-auto my-6">
          700,000+ units | 50,000+ happy customers | 70+ countries
          Tracker independent | Supports multiple languages
        </div>
        <v-btn class="mx-auto" color="primary">Get a demo</v-btn>
      </div>
    </v-img>
    <v-responsive class="mx-auto responsive-img">
      <img width="100%" src="https://www.uffizio.com/wp-content/uploads/2023/01/trakzee-landing-1-2.png" alt="">
    </v-responsive>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section1 {
  .head {
    clip-path: polygon(100% 0, 100% 50%, 100% 75%, 0% 100%, 0 52%, 0% 0%);
  }

  .responsive-img {
    width: 80%;
    transform: translateY(-25vh);
  }
}
</style>
