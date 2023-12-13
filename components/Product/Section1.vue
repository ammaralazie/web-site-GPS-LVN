<template>
  <div class="section1" v-if="data != null">
    <v-img src="/images/background-gpslvn.gif" height="700" width="100%" class="head d-flex align-center justify-center">
      <div class="align-center justify-center mx-5" style="display: grid;">
        <div class="text-h4">{{ data.title }}</div>
        <div style="width: 450px;" class="text-center mx-auto my-6">
          {{ data.subtitle }}
        </div>
        <v-btn class="mx-auto" color="primary">Get a demo</v-btn>
      </div>
    </v-img>
    <v-responsive class="mx-auto responsive-img">
      <img width="100%" :src="'/' + data.img" alt="">
    </v-responsive>
  </div>
</template>

<script>
import { filter } from '../../helper/filterObjectValue'
export default {
  data() {
    return {
      data: null
    }
  },
  async created() {
    this.data = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.products
    )?.page_detail?.section1
  }
}
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
