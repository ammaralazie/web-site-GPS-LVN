<template>
  <div class="section2">
    <v-row>
      <v-col cols="12" lg="6" md="6" class="d-flex align-center justify-center" sm="12" xs="12">
        <div class="justify-center" style="display: grid;">
          <div class="text-h3" style="max-width: 450px;">
            {{ data.title ? data.title : 'Fleet Management System' }}

          </div>
          <v-expansion-panels v-model="panel" multiple class="mt-10">
            <v-expansion-panel class="mb-3" style="max-width: 450px;" :value="1">
              <v-expansion-panel-header class="text-h5">
                Product Description
              </v-expansion-panel-header>
              <v-expansion-panel-content max-width="100%">
                {{ data.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="mb-3" style="max-width: 450px;" :value="2">
              <v-expansion-panel-header class="text-h5">
                Features
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-3">
                {{ data.featuer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-btn class="mx-auto mt-3">
            Schedule a demo
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="pa-10" cols="12" lg="6" md="6" sm="12" xs="12">
        <VideoPlayer v-if="data.video" containerStyles="containerStyles" playerStyles="playerStyles" :src="data.video"
          allow></VideoPlayer>
        <img v-else :src="data.img"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
export default {
  data() {
    return {
      data: this.$store.state.products[this.$route.params.id - 1]?.page_detail
        ?.section2
    }
  },
  mounted() {
    console.log('data : ', this.data)
  },
  components: {
    VideoPlayer
  }
}
</script>

<style lang="scss" scoped>
.section2 {
  position: relative;
  z-index: 100;
}
</style>
