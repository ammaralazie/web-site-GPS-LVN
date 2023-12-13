<template>
  <v-container class="mt-13" style="position: relative;
      z-index: 20;">
    <div class="text-h4 text-center mb-10">
      {{ $t('Transform Your Delivery Operations with GPS LVN.') }}
    </div>
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" lg="6" md="6" xl="6" sm="12" xs="12">
        <v-card min-height="300" class="pa-9 elevation-3 ">
          <v-card-content>
            <img :src="item.img" width="100px" alt="">
            <div class="d-flex align-center justify-space-between">
              <div class="text-h4">{{ $t(item.title) }}</div>
              <div>
                <v-rating half-increments readonly active-color="warning" :length="5" :size="!isMobile ? 32 : 20" :value="5" />
              </div>
            </div>
            <p class="mt-3">
              {{ $t(item.detail) }}
            </p>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col :cols="isDesktop ? '6' : '12'" class="mx-auto">
        <v-card min-height="300" class="pa-9 elevation-3">
          <v-card-content>
            <img src="https://www.GPS LVN.com/wp-content/uploads/UR-Drive-Logo-1.png" width="100px" alt="">
            <div class="d-flex align-center justify-space-between">
              <div class="text-h4">{{$t('Tom Grove')}}</div>
              <div>
                <v-rating half-increments readonly active-color="warning" :length="5" :size="!isMobile ? 32 : 20" :value="5" />
              </div>
            </div>
            <p class="mt-3">
              {{ $t("I'm blown away by the effectiveness of the GPS LVN devices and the flexibility it affords my business.") }}
            </p>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: 'https://www.GPS LVN.com/wp-content/uploads/logo_cx.svg',
          title: 'David Zelton',
          detail:
            'Great service and very helpful, nothing is a problem to them. I would recommend them to anyone A+.'
        },
        {
          img:
            'https://www.GPS LVN.com/wp-content/uploads/husk-bakery_logo-1.png',
          title: 'Aaron Clark',
          detail:
            'I trialled GPS LVN and it was perfect - Automatically increased customers by about 30% on the first day.'
        },
        {
          img:
            'https://www.GPS LVN.com/wp-content/uploads/franz-buildingsupp-logo-2.png',
          title: 'Michael Godwin',
          detail:
            'Love about GPS LVN was the live-tracking features and proof of delivery.'
        },
        {
          img:
            'https://www.GPS LVN.com/wp-content/uploads/superpharmacy-2.png',
          title: 'Aaron Clark',
          detail:
            'Before GPS LVN, we used to have to generate new routes if we wanted to change the order of things whereas with GPS LVN we can just adjust the days deliveries on the fly, allowing us to move orders into a higher priority and it all works it out in the background pretty quickly.'
        }
      ]
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style lang="scss" scoped></style>
