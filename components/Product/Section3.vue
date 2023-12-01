<template>
  <div class="section3">
    <v-container>
      <v-row class="py-4">
        <v-col cols="12" lg="3" md="3" sm="12" xs="12">
          <div class="text-h3">
            Key Feature
          </div>
          <p class="mt-3">
            Certainly, provide fleets with advanced tools to reduce workload and increase productivity.
          </p>
        </v-col>
        <v-col cols="12" lg="9" md="9" sm="12" xs="12">
          <v-row>
            <v-col v-for="i in 17" :key="i" cols="12" lg="4" md="4" sm="6" xs="12">
              <v-card link :loading="loading" class="mx-auto elevation-3">
                <v-card-text>
                  <div>
                    <v-icon size="50" color="primary">
                      mdi-home
                    </v-icon>
                  </div>
                  <div class="" style="font-size: 20px;">
                    Lorem, ipsum dolor.
                  </div>

                  <div class="primary--text mt-3">
                    Learn More
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
export default {
  data() {
    return {
      dialog: [false, false, false, false, false]
    }
  },
  components: {
    VideoPlayer
  }
}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  margin-top: 40px;
  z-index: 100;
}
</style>
