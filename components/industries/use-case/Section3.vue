<template>
  <div class="section3">
    <v-container class="mt-14">
      <div class="my-14" style="color: blue;font-weight:600">
        Tools that help you excel
      </div>
      <div class="text-h4 mt-12">
        Benefits
      </div>
      <v-row>
        <v-col :cols="!isMobile ? 8 : 12" class="mt-10">
          Uffizio provides businesses with tools and actionable data—so they no longer operate in the dark. Our solutions
          have been deployed by businesses of all sizes and types. For higher profits, greater scalability, and efficient
          operations-choose Uffizio!
        </v-col>
      </v-row>

      <v-row class="mb-14">
        <v-col v-for="i in 4" :key="i" cols="12" lg="3" md="3" sm="6" xs="12">
          <v-icon size="60" color="primary">mdi-map-legend</v-icon>
          <div class="text-h6 my-2">
            Real-time tracking
          </div>
          <p>
            24/7 and glitch-free monitoring of health care equipment. Be the first to know about any changes in the
            equipment’s location.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-14">
        <v-col v-for="i in 3" :key="i" cols="12" lg="6" md="6" sm="12" xs="12">
          <v-card height="140px" class="elevation-3 d-flex align-center">
            <div class="text-h3 ma-0 pa-0 clip d-flex align-center justify-center">
              40+
            </div>
            <v-card-text class="d-flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex necessitatibus deleniti laboriosam
              doloribus!
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  z-index: 12;
  margin-top: 50px;

  .clip {
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
    background-color: #f2b02f;
    height: 100%;
    width: 50%;
    color: white;
  }
}
</style>
