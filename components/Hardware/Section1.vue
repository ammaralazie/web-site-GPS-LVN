<template>
  <div class="section1">
    <v-container style="height: 90vh;" class="d-flex align-center justify-center">

      <!-- lg or md screen -->
      <v-row class="d-none d-xl-flex d-md-flex d-sm-none d-lg-flex ">
        <v-col class=" d-flex align-center justify-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <div>
            <div class="text-h2">
              Supported GPS Trackers
            </div>
            <p class="mt-6" style="line-height: 39px;">
              The level of flexibility and user-friendliness of our GPS tracking system makes us the best GPS tracking
              platform available in the market. Our Mobile and Web based tracking and management softwares free you from
              always depending on the Tracker hardware and compromising on your choice of compatible system. Our softwares
              run on the tracker of your choice and have absolutely no compatibility issues.
            </p>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <v-img max-width="550px"
            src="https://www.uffizio.com/wp-content/themes/uffizio/assets/images/mk-15.png"></v-img>
        </v-col>
      </v-row>

      <!-- sm or xs screen -->
      <v-row class=" d-lg-none d-xl-none d-md-none d-sm-flex d-xs-flex mt-14 ">
        <v-col class=" d-flex align-center justify-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <div>
            <div class="text-h5">
              Supported GPS Trackers
            </div>
            <p class="mt-6">
              The level of flexibility and user-friendliness of our GPS tracking system makes us the best GPS tracking
              platform available in the market. Our Mobile and Web based tracking and management softwares free you from
              always depending on the Tracker hardware and compromising on your choice of compatible system. Our softwares
              run on the tracker of your choice and have absolutely no compatibility issues.
            </p>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <v-img max-width="400px"
            src="https://www.uffizio.com/wp-content/themes/uffizio/assets/images/mk-15.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section1 {
  position: relative;
  z-index: 100;
  margin-top: 70px;
}
</style>
