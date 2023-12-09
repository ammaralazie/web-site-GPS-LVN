<template>
  <div class="exhibitions">

    <!-- section 1 -->
    <div class="section1 d-flex align-center">
      <v-img height="100%" src="/images/background-gpslvn.gif" class="d-flex align-center white-color">
        <v-container>
          <div class="text-h4">
            Exhibitions
          </div>
          <p class="mt-10" style="line-height: 2.5;">
            We are constantly striving to stay in touch with our valued clientele and other industry pioneers, and our
            proactive participation in networking events validates it.
          </p>
        </v-container>
      </v-img>
    </div>

    <!-- section 2 -->
    <div class="section2 mt-15">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-h4">
            Exhibitions Till Date
          </v-col>
        </v-row>
        <v-row v-for="(item,i) in $store.state.exhibitions_items" :key="i">
          <!-- caroursel section -->
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
            <v-carousel class="" cycle height="250" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item class="mx-auto" v-for="(img, i) in item.images" :key="i">
                <img :src="img" alt="">
              </v-carousel-item>
            </v-carousel>
          </v-col>

          <!-- text section -->
          <v-col cols="12" lg="8" md="8" sm="12" xs="12">
            <div class="text-3 title">{{item.title}}<span class="primary"
                :style="$i18n.locale == 'en' ? 'left:0px' : 'right:0px'"></span></div>
            <v-row class="mt-4" style="max-width: 564px;">
              <v-col class="d-flex" cols="5" lg="6" md="6" sm="12" xs="12">
                <v-icon color="primary">mdi-calendar-month</v-icon>
                <div>{{item.date}}</div>
              </v-col>
              <v-col class="d-flex" cols="1" lg="6" md="6" sm="12" xs="12">
                <v-icon color="primary">
                  mdi-arrow-top-right-thick
                </v-icon>
                <div>
                  {{ item.location }}
                </div>
              </v-col>
            </v-row>

            <p class="mt-14">
              {{ item.detail }}
            </p>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'https://placehold.co/400x250',
        'https://placehold.co/400x250',
        'https://placehold.co/400x250',
        'https://placehold.co/400x250',
        'https://placehold.co/400x250'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './exhibitions.scss';
</style>
