<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-resposive>
            <img height="80%" src="images/Group-2717.png">
          </v-resposive>
          <h2 class="text-center mt-4">{{ $t('created_app') }}</h2>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-row>
            <v-col :class="!isMobile ? 'd-flex align-center justify-end' : 'd-flex align-center justify-center'">
              <img width="200px" src="images/gpslvnLogo.png">
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div :class="!isMobile ? 'text-h3' : 'text-h3 text-center'">{{ $t('name_app') }}</div>
              <div :class="!isMobile ? 'text-h4' : 'text-h4 text-center'">{{ $t('location_tracking') }}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="text-h4 text-center">{{ $t('try_it') }}</div>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                  <no-ssr>
                    <v-btn text>
                      <img height="70px" src="images/google-play.png" alt="">
                    </v-btn>
                    <v-btn text>
                      <img height="70px" src="images/app-store.png" alt="">
                    </v-btn>
                    <v-btn text>
                      <img height="70px" src="images/app-gallery.png" alt="">
                    </v-btn>
                  </no-ssr>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                  <no-ssr>
                    <qrcode value="set yorr link here" @change="onDataUrlChange" :options="{
                      color: {
                        dark: '#215bad',
                        light: '#0000000',
                      },
                      width: 250,
                    }"></qrcode>
                  </no-ssr>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <div class="text-h5">{{ $t('Suitable') }}
          </div>
          <v-row>
            <v-col v-for="(item, index) in items" :key="index" cols="12" lg="6" md="6" sm="12" xs="12">
              <no-ssr>
                <v-icon right class="notranslate mx-2" color="success">
                  mdi-checkbox-marked-circle
                </v-icon>
              </no-ssr>
              {{ $t(item) }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <div class="mb-2">
            {{ $t('free_tracking_and_safe_driving') }}
          </div>

          <div class="mb-2">
            {{ $t('we_have_unlocked') }}
          </div>

          <div>
            {{ $t('driving_behavior') }}
          </div>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">{{ $t('full_function') }}</div>
      <no-ssr>
        <v-divider class="my-3"></v-divider>
      </no-ssr>
      <v-row class="mt-4">
        <v-col class="leftItems" :style="isMobile ? 'display:unset' : ''" cols="12" lg="4" md="4" sm="12" xs="12">
          <no-ssr>
            <v-card :style="isMobile ? `margin-bottom: 10px` : ''" v-for="(leftItem, index) in leftItems" :key="index"
              class="elevation-3">
              <v-card-text>
                <div :class="lang == 'en' ? 'text-h4 text-right d-flex' : 'text-h4 text-left d-flex'">
                  <div>
                    {{ $t(leftItem.title) }}
                  </div>
                  <no-ssr>
                    <v-icon right class="text-h4">{{ leftItem.icon }}</v-icon>
                  </no-ssr>
                </div>
              </v-card-text>
            </v-card>
          </no-ssr>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <no-ssr>
            <v-img src="images/Slice-39.png"></v-img>
          </no-ssr>
        </v-col>
        <v-col class="rightItems" :style="isMobile ? 'display:unset' : ''" cols="12" lg="4" md="4" sm="12" xs="12">
          <no-ssr>
            <v-card :style="isMobile ? `margin-bottom: 10px` : ''" v-for="(rightItem, index) in rightItems" :key="index"
              class="elevation-3">
              <v-card-text>
                <div :class="lang == 'en' ? 'text-h4 text-right d-flex' : 'text-h4 text-left d-flex'">
                  <no-ssr>
                    <v-icon right class="text-h4">{{ rightItem.icon }}</v-icon>
                  </no-ssr>
                  <div>{{ $t(rightItem.title) }}</div>
                </div>
              </v-card-text>
            </v-card>
          </no-ssr>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">{{ $t('host_personal') }}</div>
      <no-ssr>
        <v-divider class="my-4"></v-divider>
      </no-ssr>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h5 text-center mt-7">{{ $t('login_details') }}</div>
          <no-ssr>
            <v-divider class="my-4"></v-divider>
          </no-ssr>
          <div class="text-h4">{{ $t('data') }}</div>
          <v-col v-for="(item, index) in dataleftitems" :key="index" cols="12">
            <no-ssr>
              <v-icon left class="notranslate" color="success">
                mdi-checkbox-marked-circle
              </v-icon>
            </no-ssr>
            {{ $t(item) }}
          </v-col>
          <div class="text-h4">{{ $t('hosting_option') }}</div>
          <v-row>
            <v-col cols="12" lg="6" md="6" xs="12" sm="12" class="d-flex align-center justify-center">
              <no-ssr>
                <img height="150px" class="mx-auto" src="images/firebase-logo.png">
              </no-ssr>
            </v-col>
            <v-col cols="12" lg="6" md="6" xs="12" sm="12">
              <div class="text-h4">Firebase</div>
              <div>
                > US
              </div>
              <div>
                > Europe
              </div>
              <div>
                > Singapore
              </div>
            </v-col>
          </v-row>
          <div class="text-h5 text-center mt-7">{{ $t('data_managment') }}</div>
          <v-col cols="12">
            <p>
              {{ $t('we_respect') }}
            </p>
            <p>
              {{ $t('the_app') }}
            </p>
          </v-col>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="d-flex align-center justify-center">
          <no-ssr>
            <v-img src="images/Slice-40-2.png"></v-img>
          </no-ssr>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h5 text-center mt-7">{{ $t('telematics_data') }}</div>
          <no-ssr>
            <v-divider class="my-4"></v-divider>
          </no-ssr>
          <v-row>
            <div class="text-h4">{{ $t('data') }}</div>
            <v-col v-for="(item, index) in datarightitems" :key="index" cols="12">
              <no-ssr>
                <v-icon left class="notranslate" color="success">
                  mdi-checkbox-marked-circle
                </v-icon>
              </no-ssr>
              {{ $t(item) }}
            </v-col>
            <v-col cols=12 class="text-h5">{{ $t('hosting_option') }}</v-col>
            <v-col cols=12>
              <div>
                > US
              </div>
              <div>
                > Europe (Default)
              </div>
              <div>
                > Any region (Data export option)
              </div>
            </v-col>
            <v-col cols=12>
              <div cols="12" class="text-h5">{{ $t('data_managment') }}</div>
              <v-col cols="12">
                <p>
                  {{ $t('based_on') }}
                </p>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">
        <div>{{ $t('powerful_solution') }}</div>
        <div>{{ $t('driven_by') }}</div>
      </div>
      <no-ssr>
        <v-divider class="my-4"></v-divider>
      </no-ssr>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <no-ssr>
            <img height="70%" src="images/Zenroad-trip-details.png">
          </no-ssr>
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12" xs="12">
          <v-row>
            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
              <div class="text-h5 mx-2 mb-3">
                {{ $t('collected_data') }}
              </div>
              <div class="mb-2" v-for="(item, index) in firstSection" :key="index">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ $t(item) }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
              <div class="text-h5 mx-2 mb-3">
                {{ $t('drive_mode') }}
              </div>
              <div class="mb-2" v-for="(item, index) in secondeSection" :key="index">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ $t(item) }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
              <div class="text-h5 mx-2 mb-3">
                {{ $t('tracking_mode') }}
              </div>
              <div class="mb-2" v-for="(item, index) in thirdSection" :key="index">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ $t(item) }}</span>
              </div>
            </v-col>
            <v-col cols="12" class="text-h5 text-center">{{ $t('ready_to_go') }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div class="mb-2" v-for="(item, index) in underFristSection" :key="index">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ $t(item) }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div class="mb-2" v-for="(item, index) in underSecondeSection" :key="index">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ $t(item) }}</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">
        {{ $t('who_can') }}
      </div>
      <no-ssr>
        <v-divider class="my-4"></v-divider>
      </no-ssr>
      <v-row>
        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            {{ $t('taxi_and') }}
          </div>
          <p>
            {{ $t('in_the_cab') }}
          </p>
        </v-col>

        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            {{ $t('school_buses') }}
          </div>
          <p>
            {{ $t('parents_usually') }}
          </p>
        </v-col>

        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            {{ $t('tour') }}
          </div>
          <p>
            {{ $t('tours_and_travel') }}
          </p>
        </v-col>

        <v-col cols="12" lg="6" md="6" xs="12" sm=12>
          <div class="text-h4 mb-5">
            {{ $t('food_delivery') }}
          </div>
          <p>
            {{ $t('the_businesses') }}
          </p>
        </v-col>

        <v-col cols="12" lg="6" md="6" xs="12" sm=12>
          <div class="text-h4 mb-5">
            {{ $t('e_eommerce') }}
          </div>
          <p>
            {{ $t('tracking_software') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'integration-style.scss';

.leftItems,
.rightItems {
  display: grid;
  justify-content: end;
  align-items: center;
}

.rightItems {
  justify-content: start;
}
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../../Title'
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  components: {
    'title-main': Title,
    qrcode: VueQrcode
  },
  data() {
    return {
      lang: 'en',
      imgAPI: imgAPI,
      integration1: [
        {
          icon: 'mdi-magnify',
          title: 'vestibulum_a_massa'
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'interdum_et_malesuada'
        },
        {
          icon: 'mdi-layers',
          title: 'cras_convallis_lacus_orci'
        },
        {
          icon: 'mdi-rss',
          title: 'nulla_vehicula'
        },
        {
          icon: 'mdi-speedometer',
          title: 'interdum_et_malesuada'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'cras_convallis_lacus_orci'
        },
        {
          icon: 'mdi-cloud-upload',
          title: 'vestibulum_a_massa'
        },
        {
          icon: 'mdi-wrench',
          title: 'Donec sit amet nulla'
        }
      ],
      integration2: [
        {
          icon: 'mdi-access-point',
          title: 'vestibulum_a_massa'
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'interdum_et_malesuada'
        },
        {
          icon: 'mdi-poll',
          title: 'cras_convallis_lacus_orci'
        },
        {
          icon: 'mdi-plus-circle',
          title: 'nulla_vehicula'
        },
        {
          icon: 'mdi-chart-pie',
          title: 'interdum_et_malesuada'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'cras_convallis_lacus_orci'
        },
        {
          icon: 'mdi-source-merge',
          title: 'donec_sit_amet_nulla'
        },
        {
          icon: 'mdi-sync',
          title: 'donec_sit_amet_nulla'
        }
      ],
      items: [
        'trip_log_app',
        'mileage_tracker_app',
        'driving_style_tracker_app',
        'insurance_app',
        'location_tracking_app',
        'driving_coach_app',
        'vehicle_logging_app',
        'app_to_track_visits',
        'gps_tracking_app',
        'etc'
      ],
      leftItems: [
        {
          title: 'telematics_sdk',
          icon: 'mdi-cards'
        },
        {
          title: 'user_profile',
          icon: 'mdi-badge-account'
        },
        { title: 'trip_log', icon: 'mdi-go-kart-track' },
        {
          title: 'data_hub',
          icon: 'mdi-database'
        }
      ],
      rightItems: [
        {
          title: 'engagements',
          icon: 'mdi-cube-unfolded'
        },
        {
          title: 'api_access',
          icon: 'mdi-code-tags-check'
        },
        { title: 'trip_details', icon: 'mdi-details' },
        {
          title: 'safe_driving',
          icon: 'mdi-go-kart'
        }
      ],
      dataleftitems: ['login_details', 'personal_details'],
      datarightitems: [
        'GPS Data (location, speed, etc)',
        'Sensors data (Accelerometer, gyro, etc)',
        'Device status',
        'Enriched location data'
      ],
      firstSection: [
        'Distracted driving',
        'Speed limit violation',
        'Driving habits',
        'Trip log and waypoints',
        'Locations'
      ],
      secondeSection: [
        'Monitor driving',
        'Real time data',
        'Driving behavior',
        'In-vehicle data'
      ],
      thirdSection: ['Automatic', 'On-demand', 'Tagging', 'Scheduled'],
      underFristSection: [
        'Defensive driving',
        'UBI Insurance',
        'Teenage drivers',
        'Family members',
        'Transportation companies'
      ],
      underSecondeSection: [
        'Shared mobility',
        'Gig economy',
        'Newly licensed drivers',
        'Vehicle logging app',
        'E-driving schools'
      ]
    }
  },

  mounted() {
    this.lang = this.$i18n.locale
  },

  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  methods: {
    onDataUrlChange(dataUrl) {
      console.log(dataUrl)
    }
  }
}
</script>
