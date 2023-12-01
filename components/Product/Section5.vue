<template>
  <div class="section5">
    <v-container>
      <div class="text-h4 text-center">
        Fleet Management Platform That Grows With You
      </div>
      <div class="text-body-1 text-center ">
        Start with lite version and upgrade as you grow, or hit the ground running with one of our premium edition
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
              Basic features to kickstart your fleet management business
            </v-card-text>

            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="success">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div>{{ item.text }}</div>
                      </div>
                      <v-icon v-if="item.icon2">
                        {{ item.icon2 }}
                      </v-icon>
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
              Includes advanced features that will help you master fleet management
            </v-card-text>

            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center  text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items2" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="purple">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div>{{ item.text }}</div>
                      </div>
                      <v-icon v-if="item.icon2">
                        {{ item.icon2 }}
                      </v-icon>
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
              <v-img class="img right" src="https://www.uffizio.com/wp-content/themes/uffizio/assets/images/recommended.svg"></v-img>
            </v-card-title>
            <v-card-text class="amber d-flex justify-center addPadding">
              <v-icon size="120" color="white">
                mdi-crown-outline
              </v-icon>
            </v-card-text>

            <v-card-text class="px-12 mt-8 text-center">
              Includes customizable and cutting-edge tools that will drive your business forward
            </v-card-text>

            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel class="elevation-0" style="background-color: unset;">
                  <v-expansion-panel-header class="primary--text darken-2">
                    <v-row no-gutters>
                      <v-col cols="12" class="text-center  text-subtitle-1">
                        See all features
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="item in items2" :key="item.text" class="d-flex align-center justify-space-between mb-3">
                      <div class="d-flex">
                        <div class="mx-2"><v-icon color="amber">
                            {{ item.icon1 }}
                          </v-icon></div>
                        <div>{{ item.text }}</div>
                      </div>
                      <v-icon v-if="item.icon2">
                        {{ item.icon2 }}
                      </v-icon>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="mx-auto d-flex align-center justify-content my-5">
        <v-btn width="200" class="rounded-0" color="primary darken-2">
          Get A Demo
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon1: 'mdi-check',
          text: 'Complete Vehicle Analysis',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Alerts'
        },
        {
          icon1: 'mdi-check',
          text: 'Fleet immobilization',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Geofence and Addresses'
        },
        {
          icon1: 'mdi-check',
          text: 'Technician Module',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Multi-level user management',
          icon2: 'mdi-information'
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
          text: '35+ Alerts',
          icon2: 'mdi-information'
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
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Sensor status & analytics',
          icon2: 'mdi-information'
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
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Over 75 different ‌alerts'
        },
        {
          icon1: 'mdi-check',
          text: 'Video Telematics',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Trip Planning & Classification',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Tire Management',
          icon2: 'mdi-information'
        },
        {
          icon1: 'mdi-check',
          text: 'Load Monitoring',
          icon2: 'mdi-information'
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
      ]
    }
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
