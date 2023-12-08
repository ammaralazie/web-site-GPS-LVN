<template>
  <div class="section4">
    <v-img src="https://www.uffizio.com/wp-content/uploads/2022/08/Route-bg.jpg?id=4723">
      <v-container class="text-white">
        <div class="text-h3 text-center mt-12">
          <v-responsive>
            <img width="40%" :src="data.img_logo" alt="">
          </v-responsive>

          <v-row class="mt-8">
            <v-col cols="12" lg="3" md="3" sm="4" xs="6" v-for="(item, index) in data.icons" :key="item.text">
              <div v-if="index <= 3" class="d-flex">
                <v-icon color="primary darken-2" size="60px">
                  {{ item.icon }}
                </v-icon>
                <div class="mx-3">
                  <div class="text-h4 white--text">
                    {{ item.count }}
                  </div>
                  <div class="text-h5 text-capitalize white--text" style="white-space: nowrap">
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row class="my-13">
            <v-col cols="12">
              <div class="text-h5 text-center primary--text lighten-2">
                Read what they have to say about us
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="6" xs="12">
              <div>
                <v-img src="https://www.uffizio.com/wp-content/uploads/2022/08/sourceforge_mg.png"></v-img>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="6" xs="12">
              <div>
                <v-img src="https://www.uffizio.com/wp-content/uploads/2022/08/capterra-ratting.png"></v-img>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="6" xs="12">
              <div>
                <v-img src="https://www.uffizio.com/wp-content/uploads/2022/08/sourceforge-ratting.png"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-earth',
          number: '70+',
          text: 'countries'
        },
        {
          icon: 'mdi-account-group-outline',
          number: '500+',
          text: 'partners'
        },
        {
          icon: 'mdi-emoticon-wink-outline',
          number: '50,000+',
          text: 'happy users'
        },
        {
          icon: 'mdi-image-filter-center-focus-weak',
          number: '1200+',
          text: 'supported trackers'
        }
      ],
      data: this.$store.state.products[this.$route.params.id - 1]?.page_detail
        ?.section4
    }
  }
}
</script>

<style lang="scss" scoped>
.section4 {
  margin-top: 50px;
  position: relative;
  z-index: 100;
}
</style>
