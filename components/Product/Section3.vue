<template>
  <div class="section3">
    <div v-if="$route.params.id - 1 == 0" class="text-h3 text-center">{{ data.title ? data.titl : 'Key Feature' }}</div>
    <div v-if="$route.params.id - 1 == 0" class="text-title text-center mb-12">
      {{ data.detail_featuer }}
    </div>
    <v-container>
      <v-row v-if="$route.params.id - 1 == 0">
        <v-col v-for="(item, index) in   product_card[$route.params.id - 1]  " :key="index" cols="12" lg="4" md="4" sm="6"
          xs="12">
          <div class="align-center justify-center" style="display: grid;">
            <div class="d-flex align-center justify-center mb-4 mx-auto elevation-4"
              style="border-radius: 50% ; height:120px ; width:120px;">
              <v-icon color="primary" size="60">
                {{ item.icon }}
              </v-icon>
            </div>
            <div class="text-h5 text-center">
              {{ item.title }}
            </div>
            <div class="text-body-1 text-center text--primary">
              <nuxt-link :to="'/' + $i18n.locale + '/features/' + (index + 1)" style="text-decoration: none;">Learn
                more</nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="py-4" v-else>
        <v-col cols="12" class="d-flex align-center justify-center">
          <div>
            <div class="text-h3 text-center mb-3">
              {{ data.title ? data.title : 'Key Feature' }}
            </div>
            <p class="text-body-1 text-center">
              {{ data.detail_featuer }}
            </p>
          </div>
        </v-col>
        <v-col cols="12">
          <v-carousel cycle height="250" delimiter-icon="mdi-minus" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(  slide, index  ) in   slides  " :key="index">
              <v-sheet height="100%" style="background-color: transparent;"
                class="d-flex align-center justify-center px-3">
                <v-row>
                  <v-col v-for="(  item, i  ) in   dividedArray[index]  " :key="i" cols="12" lg="3" md="4" sm="6"
                    xs="12">
                    <v-card link :loading="loading" class="mx-auto mb-14 elevation-3" height="180px">
                      <v-card-text>
                        <div>
                          <v-icon size="50" color="primary">
                            {{ item.icon }}
                          </v-icon>
                        </div>
                        <div class="px-2 mt-2" style="font-size: 20px;">
                          {{ item.title }}
                        </div>

                        <div class="mt-3 px-2" style="font-size: 14px;">
                          {{ item.detail }}
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>

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
      data: this.$store.state.products[this.$route.params.id - 1]?.page_detail
        ?.section3,
      tab: 'option-1',
      slides: 0,
      features: this.$store.state.product_card[this.$route.params.id - 1],
      dividedArray: [],
      screenSize: null,
      tabs: [
        {
          icon: '',
          title: '',
          detail: 'Learn more'
        }
      ],
      product_card: this.$store.state.product_card
    }
  },
  components: {
    VideoPlayer
  },
  created() {
    this.sizer('lg')
  },
  watch: {
    '$vuetify.breakpoint.name'(newVal) {
      this.sizer(newVal)
    } // /witch function
  },
  methods: {
    chunkArray: function (array, chunkSize) {
      const result = []
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
      }
      return result
    }, // /chunkArray

    // eslint-disable-next-line vue/no-dupe-keys
    sizer: function (newVal) {
      switch (newVal) {
        case 'sm':
          this.dividedArray = this.chunkArray(this.features, 2)
          break
        case 'md':
          this.dividedArray = this.chunkArray(this.features, 3)
          break
        case 'xs':
          this.dividedArray = this.chunkArray(this.features, 1)
          break
        default:
          this.dividedArray = this.chunkArray(this.features, 4)
          break
      } // /switch
      this.slides = this.dividedArray.length
    }
  }
}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  margin-top: 40px;
  z-index: 100;

  .round2 {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    background: #1c3347;
  }
}
</style>
