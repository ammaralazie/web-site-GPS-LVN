<template>
  <div class="section2">
    <div class="frame"></div>
    <v-container>
      <div class="primary--text text-h5">
        Tools that help you excel
      </div>
      <div class="text-h4 mt-9">
        Benefits of Employee Management
      </div>
      <div class="text-subtitle1 mt-9" :style="!isMobile ? 'width: 60%;' : 'width: 100%;'">
        Keep tabs on your sales representatives and out-of-office crew. Collaborate better with your team for greater
        transparency.
      </div>

      <v-row class="mt-10">
        <v-col v-for="i in 4" :key="i" cols="12" lg="3" md="3" sm="6" xs="12">
          <v-icon color="primary" class="px-3" size="40px">
            mdi-home
          </v-icon>
          <v-alert class="mt-3 px-3" height="50px" colored-border>
            Aliquam eu nunc. Fusce
          </v-alert>
          <div class="px-3">
            Manage on-site operations from your desk! Use our live-tracking screen and video telematics to track progress.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computed: {
        isMobile() {
          const smDown = this.$store.state.breakpoints.smDown
          return smDown.indexOf(this.$mq) > -1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section2 {
  width: 100%;
}
</style>
