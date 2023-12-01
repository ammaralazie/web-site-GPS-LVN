<template>
  <v-row style="margin-top: 140px;">
    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
      <div class="text-h3 mx-7">
        {{ $t("Company road map with our history") }}
      </div>
    </v-col>
    <v-col cols="12" lg="8" md="8" sm="12" xs="12">
      <v-timeline link :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="item in items" :key="item.title">
          <span slot="opposite" class="year text-h5">{{ item.year }}</span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.detail }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          year: 2002,
          title: 'Startup',
          detail: 'Uffizio GMBH Germany was established'
        },
        {
          year: 2004,
          title: 'Initial Product',
          detail:
            'Developed an Energy management product for the European market'
        },
        {
          year: 2007,
          title: 'Inaugurating Uffizio India',
          detail: 'We incorporated it to cater needs of the Indian market'
        },
        {
          year: '2011-13',
          title: 'First Indian Project',
          detail:
            'We developed an Attendance Record System for businesses in India.'
        },
        {
          year: 2014,
          title: 'Entering the Telematics Industry',
          detail:
            'Our two major products (VTS) Vehicle Tracking Software and Flitrack were developed and ready for sale'
        },
        {
          year: '2015-16',
          title: 'Building a Software Ecosystem',
          detail:
            'Uffizio built multiple logistics solutions to solve business needs.'
        },
        {
          year: 2017,
          title: 'Launching Trakzee',
          detail:
            'Trakzee, our next-gen and highly advanced VTS was designed and market-ready'
        },
        {
          year: 2020,
          title: 'For Personal Tracking needs',
          detail: 'Our Consumer segment product, Trakzee Mini, is on the go!'
        },
        {
          year: 2021,
          title: 'Looking forward',
          detail: 'Cloud-based Energy Management System to be realized in June'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
