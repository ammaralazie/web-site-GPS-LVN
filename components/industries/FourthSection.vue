<template>
  <div class="section4" v-if="data">
    <v-container>
      <div class="text-h2 text-center">
        Solutions
      </div>
      <div class="text-body-1 text-center mt-3">
        {{ data.subtitle }}
      </div>
      <v-carousel v-if="slides > 0" class="mt-14" cycle height="" delimiter-icon="mdi-minus" hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item v-for="(slide, index) in slides" :key="slide">
          <v-sheet style="background-color: transparent;" class="d-flex align-center justify-center px-3">
            <v-row>
              <v-col v-for="(el, i) in dividedArray[index]" :key="i" cols="12" lg="4" md="4" sm="12" xs="12">
                <v-card :to="'/' + $i18n.locale + '/industries/use-case/1'" link
                  class="mx-auto pa-0 mb-14 elevation-3">
                  <v-card-text class="pa-0">
                    <img class="imgSide" :src="el.img" alt="">
                    <div class="pa-2 text-h6 d-flex align-center" style="font-size: 14px; height:80px">
                      {{ el.detail }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import { filter } from '../../helper/filterObjectValue'
export default {
  data() {
    return {
      data: null,
      cards: null,
      dividedArray: null,
      slides: null
    }
  },
  async created() {
    this.data = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.industries
    )?.detail_page?.section4

    this.cards = [...this.data.cards]

    this.sizer(this.$vuetify.breakpoint.name)
  },
  watch: {
    // /witch function
  },
  methods: {
    chunkArray: function(array, chunkSize) {
      const result = []
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
      }
      return result
    }, // /chunkArray
    sizer: function(newVal) {
      switch (newVal) {
        case 'sm':
          this.dividedArray = this.chunkArray(this.cards, 1)
          break
        case 'md':
          this.dividedArray = this.chunkArray(this.cards, 3)
          break
        case 'xs':
          this.dividedArray = this.chunkArray(this.cards, 1)
          break
        default:
          this.dividedArray = this.chunkArray(this.cards, 3)
          break
      } // /switch
      this.slides = this.dividedArray.length
    }
  }
}
</script>

<style lang="scss" scoped>
.section4 {
  position: relative;
  z-index: 12;
  margin-top: 160px;
}

.imgSide {
  height: 300px;
  width: 100%;
  clip-path: polygon(0 2%, 100% 0, 100% 84%, 0% 100%);
}
</style>
