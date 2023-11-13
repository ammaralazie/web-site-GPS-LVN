<template>
  <div class="root">

    <!-- you tube section -->
    <v-container :class="{fixed:isDesktop}" style="position: relative;z-index:10">
      <v-row class="text-center my-6" style="position: relative;z-index:10">
          <v-col cols="12" class="ma-auto">
            <h2 class="text-h3 mb-9">
              {{ $t("Vehicle Management System (GPS LVN): A One Stop Fleet Management Solution") }}
            </h2>
            <div class="text-h5">
              {{ $t("Vehicle Management System Software (GPS LVN) is the most modern system to manage large vehicles and fleets.This software will manage every single piece of data of your all vehicles.") }}
            </div>
          </v-col>
          <v-col cols="12" class="ma-auto d-flex justify-center">
            <v-btn text link :class="isDesktop ? 'mx-2' : ''">
              View Demo
            </v-btn>
            <v-btn link color="success">
              Buy Now
            </v-btn>
          </v-col>
        </v-row>
      <v-card>
          <v-img
            src="/images/lottie/vehicle-management-system.png"
            class="align-center justify-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
          >
            <v-card-title fab class="text-white justify-center">
              <YouTubeDialog></YouTubeDialog>
            </v-card-title>
          </v-img>

            </v-card>
    </v-container>

      <!-- text-section -->
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="text-center my-6" style="position: relative;z-index:10">
        <v-col cols="12" class="ma-auto">
          <h2 class="text-h3 mb-9">
            {{ $t("Be Tactical, Chose Automation, Ensure Profitability") }}
          </h2>
          <div class="text-h5">
            {{ $t("This fleet management system provides an ordained solution for the problems, generally a transport manager faced. Have an attentive tour from top to bottom & get a complete idea about a vehicle management system.") }}
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- big card section  -->
    <v-container :class="{ fixed: isDesktop }">
      <v-row style="position: relative;z-index:10">
        <v-col cols="12" lg="4" md="4" sm="6" xs="12" v-for="item in bigCards" :key="item.title">
          <v-card class="cardFeatuer" link height="400px">
            <v-img :src="item.img" width="180px" class="ma-auto" cover></v-img>
            <v-card-title>
              {{ $t(item.title) }}
            </v-card-title>
            <v-card-subtitle>
              {{ $t(item.subtitle) }}
            </v-card-subtitle>
        </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- text-section1 -->
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="text-center my-6" style="position: relative;z-index:10">
        <v-col cols="12" class="ma-auto">
          <h2 class="text-h3 mb-9">
            {{ $t("Vehicle Management System") }}
          </h2>
          <div class="text-h5">
            {{ $t("Vehicle management system is an automated software for the transportation industry or an organization"+
                        "which owns a large number of vehicle & managing fleets.It is an organized code which provides management"+
                        "functions that permit corporations to get rid of or minimize the risks related to vehicles.It helps a"+
                        "business to boost up some outstanding criteria including the daily management of vehicles, fuel and services"+
                        "management, cost & inventory management etc.") }}
          </div>

          <div class="text-h5 mt-7">
            {{ $t("Bdtask has designed the most modern vehicle management software to manage large vehicles and fleets."+
                        "This system processes and analyzes every single data of all vehicles.It is an online based software which is"+
                        "really helpful for Bus, Car, Taxi, Cover Van & Truck operators to manage everyday workflow and performance.")
            }}
          </div>
        </v-col>
        <v-col cols="12" class="ma-auto d-flex justify-center">
          <v-btn text link :class="isDesktop ? 'mx-2' : ''">
            View Demo
          </v-btn>
          <v-btn link color="success">
            Buy Now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- text section 2 -->
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="text-center" style="position: relative;z-index:10">
        <v-col cols="12" class="ma-auto">
          <h2 class="text-h3 mb-9">
            {{ $t("Why Does an Intelligent Fleet Management Agency Owner Use a Vehicle Management System?") }}
          </h2>
          <h6 class="text-h5">
            {{ $t("Only hard work is not the key to good luck. If it were, then the donkey would have been the king of the"+
                        "jungle but Lion.So, to be successful, you have to be tactful. & only an intelligent transportation business"+
                        "owner chose an automation system like vehicle management system to get following benefits:") }}
          </h6>
        </v-col>
      </v-row>
      <v-row style="    position: relative; z-index: 10;">
        <v-col class="pa-2 d-flex align-start" v-for="(item, key) in textFeatuers" :key="key" cols="12" lg="6" md="6"
          sm="12" xs="12">
          <v-icon right class="notranslate mx-2" color="success">
            mdi-checkbox-marked-circle
          </v-icon>
          <div>
            {{ $t(item) }}
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- samll card section  -->
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="text-center">
        <v-col cols="12" class="ma-auto">
          <h2 class="text-h3 mb-9">
            {{ $t("Which Features Make The GPS LVN System Best ?") }}
          </h2>
        </v-col>
      </v-row>
      <v-row style="position: relative;z-index:10" class="mt-4">
        <v-col cols="12" lg="3" md="3" sm="6" xs="12" v-for="item in lottie" :key="item.title">
          <v-card link class="cardFeatuer" height="240px" style="display: grid">
            <div class="justify-center align-center ma-auto" style="display: grid;">
              <img :src="item.image" class="ma-auto mb-2" />
              <div class="px-2 text-center text-capitalize font-weight-bold mt-2">{{ $t(item.title) }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- backgound section -->
    <div class="decoration-bg">
      <svg class="wave">
        <use xlink:href="/images/saas2/deco-bg.svg#main" />
      </svg>
    </div>

    <!-- forms section  -->
    <v-container :class="{ fixed: isDesktop }" class="mt-9">
      <u-animate-container>
        <div class="item">
          <v-row :class="[isMobile ? 'column-reverse' : index > 0 ? 'row mt-9' : 'row']"
            v-for="(feature, index) in features" :key="index">
            <v-col cols="12" md="6" class="px-md-5 px-lg-15">
              <ImagSide v-if="feature.imageSide.right" :image-url="feature.imageSide.imageUrl"></ImagSide>
              <TextSide :title="feature.textForm.title" :items="feature.textForm.items" :detail="feature.textForm.detail"
                v-else></TextSide>
                <v-row v-if="feature.btn && !feature.imageSide.right">
                  <v-col cols="12" class="mt-2">
                    <v-btn color="success">{{ $t(feature.btn) }}</v-btn>
                  </v-col>
                </v-row>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <ImagSide v-if="feature.imageSide.left" :image-url="feature.imageSide.imageUrl"></ImagSide>
              <TextSide :title="feature.textForm.title" :items="feature.textForm.items" :detail="feature.textForm.detail"
                v-else></TextSide>
                <v-row v-if="feature.btn && feature.imageSide.right">
                  <v-col cols="12">
                    <v-btn color="success">{{ $t(feature.btn) }}</v-btn>
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
        </div>
        <!-- <div class="item">
          <v-row>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <div class="desc">
                <title-main :align="isMobile ? 'center' : 'right'">
                  <span>
                    {{ $t('saas2.feature_title1') }}
                    <strong>
                      {{ $t('saas2.feature_titlestrong2') }}
                    </strong>
                  </span>
                </title-main>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('saas2.feature_desc2') }}
                </h6>
                <div :class="[isMobile ? 'text-center' : 'text-end']">
                  <v-btn color="secondary" large class="btn">
                    {{ $t('saas2.see_detail') }}
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <u-animate :offset="200" name="fadeInRightShort" duration="0.5s">
                <div class="screen-wrap">
                  <img class="plant2 img-2d3d" :src="imgAPI.saas2[12]" :data-2d="imgAPI.saas2[11]"
                    :data-3d="imgAPI.saas2[12]" alt="plant" />
                  <div class="illustration">
                    <figure>
                      <img :src="imgAPI.saas2[20]" alt="screen" />
                    </figure>
                  </div>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <title-main align="center">
            <span>
              {{ $t('saas2.feature_title3') }}
              <strong>
                {{ $t('saas2.feature_titlestrong3') }}
              </strong>
            </span>
          </title-main>
          <v-row class="spacing6" justify="center">
            <v-col md="10" cols="12" class="pa-6">
              <h6 class="text-center use-text-subtitle2">
                {{ $t('saas2.feature_desc3') }}
              </h6>
              <u-animate :offset="10" name="fadeInUpShort" duration="0.5s">
                <div class="screen-wrap">
                  <img class="plant3 img-2d3d" :src="imgAPI.saas2[14]" :data-2d="imgAPI.saas2[13]"
                    :data-3d="imgAPI.saas2[14]" alt="plant" />
                  <div class="illustration screen-center">
                    <figure>
                      <img :src="imgAPI.saas2[21]" alt="screen" />
                    </figure>
                  </div>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </div> -->
      </u-animate-container>
    </v-container>

  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import YouTubeDialog from './YouTubeDialog.vue'
import imgAPI from '~/static/images/imgAPI'
import Title from '../../Title'
import ImagSide from './ImagSide.vue'
import TextSide from './TextSide.vue'

export default {
  components: {
    'title-main': Title,
    ImagSide,
    TextSide,
    YouTubeDialog
  },
  data() {
    return {
      imgAPI: imgAPI,
      features: this.$store.state.futuerForm,
      lottie: this.$store.state.lottie,
      textFeatuers: this.$store.state.textFeatuers,
      bigCards: this.$store.state.bigCards
    }
  },
  mounted() {
    const inputString = `
Add employee
Manage employee
Position & Department
Manage driver
Manage license
Driver performance
Manage requisition approval
`;

    // Split the string into an array by line breaks
    const lines = inputString.trim().split('\n');

    // Convert the string values to an object where keys are based on the values
    const resultObject = {};
    lines.forEach((line, index) => {
      const key = line.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '_').toLowerCase;
      resultObject[key] = line;
    });

    console.log(resultObject);

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
