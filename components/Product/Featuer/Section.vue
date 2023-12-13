<template>
  <div class="section">
    <v-img height="1000px" src="/images/background-gpslvn.gif">
      <v-container style="display:grid;width:100%;height:100%" class="align-center justify-center">
        <div style="display:grid" class="mx-auto justify-center">
          <div style="width:70%" class="mx-auto text-h4 text-center mb-3">
            {{ data.title }}
          </div>
          <div style="width:70%" class="mx-auto text-h6 text-center">
            {{ data.subtitle }}
          </div>

          <div :style="!isMobile ? 'position: relative; height:420px' : ''" class="mt-7">
            <img :width="!isMobile ? '60%' : '0%'" style="position: absolute; top:0px;right:0px" :src="data.img" alt="">
            <v-card class="elevation-3 my-14"
              :style="!isMobile ? 'position: absolute; top:70px;left:90px ; display:grid' : 'display:grid'" height="100%"
              :width="!isMobile ? '50%' : '100%'">
              <div class="mx-auto mt-8" style="width: 75%;">
                <div class="text-h5 text-center">
                  {{ data.card.title }}
                </div>
                <div class="text-body-1 text-center mt-2">
                  {{ data.card.subtitle }}
                </div>
              </div>
              <v-btn width="35%" height="80px" color="primary" class="mx-auto rounded-0">
                Get a Demo
              </v-btn>
              <div class="mx-auto text-caption text-center" style="width: 65%;">
                {{ data.card.phargraph }}
              </div>
            </v-card>
          </div>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state?.product_featuer[this.$route.params.id - 1]
        ?.section
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  z-index: 100;
}
</style>
