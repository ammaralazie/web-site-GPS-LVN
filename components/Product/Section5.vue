<template>
  <div class="section5" v-if="data">
    <v-container>
      <div class="text-h4 text-center">
        {{ data.title }}
      </div>
      <div class="text-body-1 text-center ">
        {{ data.subtitle }}
      </div>
      <v-row class="my-12">
        <!-- card 1 -->
        <v-col cols="12" lg="4" md="4" sm="6" xs="12">
          <v-card class="elevation-3">
            <v-card-title class="d-flex justify-center white--text success">
              Lite
            </v-card-title>
            <v-card-text class="success d-flex justify-center addPadding">
              <v-icon size="120" color="white">
                mdi-bag-personal-outline
              </v-icon>
            </v-card-text>

            <v-card-text class="px-12 mt-8 text-center">
              {{ data.card1 }}
            </v-card-text>

            <v-card-text v-if="position == 0">
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>

                    <template #actions>
                      <v-icon :color="$vuetify.theme.isDark ? 'white' : ''">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="success">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div :style="$vuetify.theme.isDark ? 'color:white' : ''">{{ item.text }}</div>
                      </div>
                      <v-tooltip style="z-index: 100" top v-if="item.icon2">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on">
                            {{ item.icon2 }}
                          </v-icon>
                        </template>
                        <div style='max-width:300px'>{{ item.tooltipContent }}</div>
                      </v-tooltip>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- card 2 -->
        <v-col cols="12" lg="4" md="4" sm="6" xs="12">
          <v-card class="elevation-3">
            <v-card-title class="d-flex justify-center white--text purple">
              Standard
            </v-card-title>
            <v-card-text class="purple d-flex justify-center addPadding">
              <v-icon size="120" color="white">
                mdi-cannabis
              </v-icon>
            </v-card-text>

            <v-card-text class="px-12 mt-8 text-center">
              {{ data.card2 }}
            </v-card-text>

            <v-card-text v-if="position == 0">
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center  text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>
                    <template #actions>
                      <v-icon :color="$vuetify.theme.isDark ? 'white' : ''">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items2" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="purple">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div :style="$vuetify.theme.isDark ? 'color:white' : ''">{{ item.text }}</div>
                      </div>
                      <v-tooltip style="z-index: 100" top v-if="item.icon2">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on">
                            {{ item.icon2 }}
                          </v-icon>
                        </template>
                        <div style='max-width:300px'>{{ item.tooltipContent }}</div>
                      </v-tooltip>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- card 3 -->
        <v-col cols="12" lg="4" md="4" sm="6" xs="12">
          <v-card class="elevation-3">
            <v-card-title class="d-flex justify-center white--text premium  amber">
              Premium
              <v-img class="img right"
                src="https://www.uffizio.com/wp-content/themes/uffizio/assets/images/recommended.svg"></v-img>
            </v-card-title>
            <v-card-text class="amber d-flex justify-center addPadding">
              <v-icon size="120" color="white">
                mdi-crown-outline
              </v-icon>
            </v-card-text>

            <v-card-text class="px-12 mt-8 text-center">
              {{ data.card3 }}
            </v-card-text>

            <v-card-text v-if="position == 0">
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center  text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>
                    <template #actions>
                      <v-icon :color="$vuetify.theme.isDark ? 'white' : ''">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items3" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="amber">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div :style="$vuetify.theme.isDark ? 'color:white' : ''">{{ item.text }}</div>
                      </div>
                      <v-tooltip style="z-index: 100" top v-if="item.icon2">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on">
                            {{ item.icon2 }}
                          </v-icon>
                        </template>
                        <div style='max-width:300px'>{{ item.tooltipContent }}</div>
                      </v-tooltip>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="mx-auto d-flex align-center justify-center my-5">
        <v-btn width="200" class="rounded-0" color="primary darken-2">
          Get A Demo
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { filter } from '../../helper/filterObjectValue'
export default {
  data() {
    return {
      items: [
        {
          icon1: 'mdi-check',
          text: 'Complete Vehicle Analysis',
          icon2: 'mdi-information',
          tooltipContent: `Get insights into fleet travel time, distance, status, work hours, and GPS parameters.`
        },
        {
          icon1: 'mdi-check',
          text: 'Alerts'
        },
        {
          icon1: 'mdi-check',
          text: 'Fleet immobilization',
          icon2: 'mdi-information',
          tooltipContent: ` The perfect anti-theft feature that allows you to disable vehicle ignition remotely.`
        },
        {
          icon1: 'mdi-check',
          text: 'Geofence and Addresses'
        },
        {
          icon1: 'mdi-check',
          text: 'Technician Module',
          icon2: 'mdi-information',
          tooltipContent: ` Track everyday tasks. Get maintenance and installation analytics`
        },
        {
          icon1: 'mdi-check',
          text: 'Multi-level user management',
          icon2: 'mdi-information',
          tooltipContent: `Create User hierarchies. Manage billing through flexible tariff plans.`
        },
        {
          icon1: 'mdi-check',
          text: 'Available in multiple local & international languages'
        },
        {
          icon1: 'mdi-check',
          text: 'Available as desktop and mobile applications'
        }
      ],
      items2: [
        {
          icon1: 'mdi-check',
          text: 'Fuel Management System'
        },
        {
          icon1: 'mdi-check',
          text: '35+ Alerts'
        },
        {
          icon1: 'mdi-check',
          text: 'Temperature Monitoring',
          icon2: 'mdi-information',
          tooltipContent: `Real-time temperature drop or spike alerts to facilitate smooth cold chain logistics`
        },
        {
          icon1: 'mdi-check',
          text: 'Engine Health Analysis'
        },
        {
          icon1: 'mdi-check',
          text: 'Managing Expenses'
        },
        {
          icon1: 'mdi-check',
          text: 'Maintenance Reminders'
        },
        {
          icon1: 'mdi-check',
          text: 'RPM monitoring',
          icon2: 'mdi-information',
          tooltipContent: `Monitor RPM, work hours, and efficiency of your stationary equipment​​`
        },
        {
          icon1: 'mdi-check',
          text: 'Sensor status & analytics',
          icon2: 'mdi-information',
          tooltipContent: `Compatible with analog and digital sensors`
        }
      ],
      items3: [
        {
          icon1: 'mdi-check',
          text: 'Complete Driver Analysis'
        },
        {
          icon1: 'mdi-check',
          text: 'Trakzee Driver App',
          icon2: 'mdi-information',
          tooltipContent: `A distinct app that your driver can use to track their daily tripss`
        },
        {
          icon1: 'mdi-check',
          text: 'Over 75 different ‌alerts'
        },
        {
          icon1: 'mdi-check',
          text: 'Video Telematics',
          icon2: 'mdi-information',
          tooltipContent: `ADAS and DMS Analysis with live-streaming & playback. Integrate AI dashams.`
        },
        {
          icon1: 'mdi-check',
          text: 'Trip Planning & Classification',
          icon2: 'mdi-information',
          tooltipContent: ` Assign stops or delivery points along the way. Get alerts for missed, delayed, upcoming stops. Also, classify trips into different  categories like business or personal`
        },
        {
          icon1: 'mdi-check',
          text: 'Tire Management',
          icon2: 'mdi-information',
          tooltipContent: ` Real-time tire temperature and pressure analytics can be a lifesaver!`
        },
        {
          icon1: 'mdi-check',
          text: 'Load Monitoring',
          icon2: 'mdi-information',
          tooltipContent: `Avoid overloading your trucks with an axle load monitoring system `
        },
        {
          icon1: 'mdi-check',
          text: 'Elocks'
        },
        {
          icon1: 'mdi-check',
          text: 'Ask for personal branding at an added cost'
        },
        {
          icon1: 'mdi-check',
          text: 'Login Page Customization And theme selection'
        }
      ],
      data: null,
      position: null
    }
  },
  async created() {
    this.data = this.data = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.products
    )?.page_detail?.section5

    this.position = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.products,
      true
    )

    console.log('position : ', this.position)
    console.log('this.data : ', this.data)
  }
}
</script>

<style lang="scss" scoped>
.section5 {
  position: relative;
  z-index: 100;
  margin-top: 60px;

  .addPadding {
    padding-bottom: 50px;
    clip-path: polygon(0% 0%, 100% 0, 100% 71%, 52% 100%, 0 71%);
  }

  .premium {
    position: relative;

    .img {
      position: absolute;
      width: 104px;

      &.right {
        right: -6px;
      }
    }
  }
}
</style>
