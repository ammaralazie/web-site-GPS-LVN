<template>
  <div class="about">
    <div class="wrapperAbout">
      <video x-webkit-airplay="deny" playsinline autoplay loop muted class="AboutVedio"
        poster="https://d14shz2u67ig8m.cloudfront.net/images/about_poster.png">
        <source src="https://d14shz2u67ig8m.cloudfront.net/images/about_video.mp4?up=2" type="video/mp4">
      </video>
      <div class="wave wave-cover"></div>
    </div>

    <v-container>
      <v-row style="margin-top: 140px;">
        <v-col class="ma-auto" cols="12" gl="6" md="6" xs="12" sm="12">
          <strong class="text--primary text-h4">
            {{ $t("Who we are") }}
          </strong>
          <p class="mt-4">
            {{ $t("We are GPS LVN, and we provide made-to-order IoT software solutions and services. We make use of GPS technology and internet connectivity to empower businesses. We listen well and outdo expectations every time!") }}
          </p>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="12" gl="6" md="6" xs="12" sm="12">
          <v-card class="d-flex align-center" :width="!isMobile ? '400px' : ''" height="250px">
            <v-card-text>
              <strong class="text--primary text-h4">
                {{ $t("Our Philosophy") }}
              </strong>
              <p class="mt-4">
                {{ $t("We are a synergistic company, and we hold our employees and partners in high regard. Purpose-driven and disciplined—we get things done right!") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <Section3></Section3>
      <Section4></Section4>
    </v-container>
    <Section5></Section5>
    <v-container style="position: relative;z-index:15">
      <Contact></Contact>
    </v-container>
  </div>
</template>

<script>
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'
import Contact from '../../Forms/Contact'
export default {
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  },
  components: {
    Section3,
    Section4,
    Section5,
    Contact
  }
}
</script>

<style lang="scss" scoped>
@import "./about.scss"
</style>
