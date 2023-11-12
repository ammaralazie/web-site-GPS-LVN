<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-resposive>
            <img height="80%" src="images/Group-2717.png">
          </v-resposive>
          <h2 class="text-center mt-4">Create your own tracking app</h2>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-row>
            <v-col class="d-flex align-center justify-end">
              <img width="200px" src="images/gpslvnLogo.png">
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div class="text-h3">GPS LVN</div>
              <div class="text-h4">Location tracking and safe driving app</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="text-h4 text-center">Try it for free</div>
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
                        dark: '#FFC72C',
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
          <div class="text-h5">Suitable for:
          </div>
          <v-row>
            <v-col v-for="item in items" :key="item" cols="12" lg="6" md="6" sm="12" xs="12">
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
            Free tracking and safe-driving app to collect location, driving style, driving behaviors, driving
            patterns, lifestyle patterns, vehicle data, and monitor car crashes. Initially, this app has been
            designed
            to showcase telematics SDK and Platform capabilities.
          </div>

          <div class="mb-2">
            We have unlocked the source-code of ZenRoad – our flagman driving monitoring app – to help community
            create products that improve driver safety and efficiency as well as create a new experience for car
            lovers
          </div>

          <div>
            ZenRoad is more advance than any existing vehicle logbook app, mileage tracker, insurance app, driving
            behavior tracker, trip log app, vehicle logger, tracker app, driving app, app telematics, etc.
          </div>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">Full function driving monitoring mobile app</div>
      <no-ssr>
        <v-divider class="my-3"></v-divider>
      </no-ssr>
      <v-row class="mt-4">
        <v-col class="leftItems" cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h4 text-right" v-for="leftItem in leftItems" :key="leftItem">
            {{ leftItem.title }}
            <no-ssr>
              <v-icon right class="text-h4">{{ leftItem.icon }}</v-icon>
            </no-ssr>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <no-ssr>
            <v-img src="images/Slice-39.png"></v-img>
          </no-ssr>
        </v-col>
        <v-col class="rightItems" cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h4 text-left" v-for="rightItem in rightItems" :key="leftItem">
            <no-ssr>
              <v-icon right class="text-h4">{{ rightItem.icon }}</v-icon>
            </no-ssr>
            {{ rightItem.title }}
          </div>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">Host personal data on your side</div>
      <no-ssr>
        <v-divider class="my-4"></v-divider>
      </no-ssr>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h5 text-center mt-7">Login and personal details</div>
          <no-ssr>
            <v-divider class="my-4"></v-divider>
          </no-ssr>
          <div class="text-h4">Data</div>
          <v-col v-for="item in dataleftitems" :key="item" cols="12">
            <no-ssr>
              <v-icon left class="notranslate" color="success">
                mdi-checkbox-marked-circle
              </v-icon>
            </no-ssr>
            {{ $t(item) }}
          </v-col>
          <div class="text-h4">HOSTING OPTIONS</div>
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
          <div class="text-h5 text-center mt-7">DATA MANAGEMENT</div>
          <v-col cols="12">
            <p>
              We respect data privacy and follow personal data protection regulations. That is why using the open-source
              telematics app you have an option to manage the personal data of the app users and host it in a region that
              is
              suitable for you.
            </p>
            <p>
              The app is integrated with Google Firebase. Use this service for Authentication and personal data hosting.
            </p>
          </v-col>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="d-flex align-center justify-center">
          <no-ssr>
            <v-img src="images/Slice-40-2.png"></v-img>
          </no-ssr>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h5 text-center mt-7">Telematics data</div>
          <no-ssr>
            <v-divider class="my-4"></v-divider>
          </no-ssr>
          <v-row>
            <div class="text-h4">Data</div>
            <v-col v-for="item in datarightitems" :key="item" cols="12">
              <no-ssr>
                <v-icon left class="notranslate" color="success">
                  mdi-checkbox-marked-circle
                </v-icon>
              </no-ssr>
              {{ $t(item) }}
            </v-col>
            <v-col cols=12 class="text-h5">HOSTING OPTIONS</v-col>
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
              <div cols="12" class="text-h5">DATA MANAGEMENT</div>
              <v-col cols="12">
                <p>
                  Based on requirements, we provide a full set of data management services including storage (short-term
                  and long-term). However, we also support flexible data management options, where the client has option
                  to export data to own server at any moment.
                </p>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">
        <div>Powerful solution</div>
        <div>driven by GPS LVN telematics suite</div>
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
                Collected data
              </div>
              <div class="mb-2" v-for="item in firstSection" :key="item">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ item }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
              <div class="text-h5 mx-2 mb-3">
                Drive mode
              </div>
              <div class="mb-2" v-for="item in secondeSection" :key="item">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ item }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
              <div class="text-h5 mx-2 mb-3">
                Tracking mode
              </div>
              <div class="mb-2" v-for="item in thirdSection" :key="item">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ item }}</span>
              </div>
            </v-col>
            <v-col cols="12" class="text-h5 text-center">Ready to go solution for:
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div class="mb-2" v-for="item in underFristSection" :key="item">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ item }}</span>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <div class="mb-2" v-for="item in underSecondeSection" :key="item">
                <no-ssr>
                  <v-icon right class="notranslate mx-2" color="success">
                    mdi-checkbox-marked-circle
                  </v-icon>
                </no-ssr>
                <span>{{ item }}</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="text-h3 text-center mt-7">
        Who can benefit from using the tracking and safe-driving app
      </div>
      <no-ssr>
        <v-divider class="my-4"></v-divider>
      </no-ssr>
      <v-row>
        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            Taxi and cab services
          </div>
          <p>
            In the Cab service business, the telematics app allows users to allot the nearest cab when customers book
            online automatically. Without Mobile telematics, efficient and optimal use of the fleet is not possible. It
            can also help In field-based service businesses such as on the spot car repair or car breakdown assistance
            business.
          </p>
        </v-col>

        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            School buses
          </div>
          <p>
            Parents usually wait at the stop for the school bus and care about kids’ safety. With the telematics SDK
            integrated inside the school mobile application, parents can exactly know where the bus is, how safely it is
            driven, and accordingly reach the stop within time without being too early or too late.
          </p>
        </v-col>

        <v-col cols="12" lg="4" md="4" xs="12" sm=12>
          <div class="text-h4 mb-5">
            Tour and Travels
          </div>
          <p>
            Tours and travel agencies operate huge numbers of vehicles and take responsibility for tourists’ safety.
            Tracking them with mobile telematics technology can help in maintaining the punctuality of the vehicles and
            overall road and trip safety. Automatic alerts about the detected crash and real-time location can be sent.
          </p>
        </v-col>

        <v-col cols="12" lg="6" md="6" xs="12" sm=12>
          <div class="text-h4 mb-5">
            Food delivery
          </div>
          <p>
            The businesses can track their delivery agents, delivery vans, bikes, etc. in real-time with tracking
            solutions inside their own mobile applications.
            It helps in allocating the nearest delivery agent to the location and deliver product and services on-time,
            Safely and on budget. Timely deliveries keep food fresh and increase positive ratings.
          </p>
        </v-col>

        <v-col cols="12" lg="6" md="6" xs="12" sm=12>
          <div class="text-h4 mb-5">
            E-Commerce
          </div>
          <p>
            Tracking software helps e-commerce companies in real-time monitoring of shipments, optimizing routes for
            deliveries, and on-time delivery. It also enhances the customer experience by providing them visibility of
            estimated time of arrival.
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
      imgAPI: imgAPI,
      integration1: [
        {
          icon: 'mdi-magnify',
          title: 'Vestibulum a massa'
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'Interdum et malesuada'
        },
        {
          icon: 'mdi-layers',
          title: 'Cras convallis lacus orci'
        },
        {
          icon: 'mdi-rss',
          title: 'Nulla vehicula'
        },
        {
          icon: 'mdi-speedometer',
          title: 'Interdum et malesuada'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Cras convallis lacus orci'
        },
        {
          icon: 'mdi-cloud-upload',
          title: 'Donec sit amet nulla'
        },
        {
          icon: 'mdi-wrench',
          title: 'Donec sit amet nulla'
        }
      ],
      integration2: [
        {
          icon: 'mdi-access-point',
          title: 'Vestibulum a massa'
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'Interdum et malesuada'
        },
        {
          icon: 'mdi-poll',
          title: 'Cras convallis lacus orci'
        },
        {
          icon: 'mdi-plus-circle',
          title: 'Nulla vehicula'
        },
        {
          icon: 'mdi-chart-pie',
          title: 'Interdum et malesuada'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Cras convallis lacus orci'
        },
        {
          icon: 'mdi-source-merge',
          title: 'Donec sit amet nulla'
        },
        {
          icon: 'mdi-sync',
          title: 'Donec sit amet nulla'
        }
      ],
      items: [
        'Trip log app',
        'Mileage tracker app',
        'Driving style tracker app',
        'Insurance app',
        'Location tracking app',
        'Driving coach app',
        'Vehicle logging app',
        'App to track visits',
        'GPS tracking app',
        'Etc...'
      ],
      leftItems: [
        {
          title: 'Telematics SDK',
          icon: 'mdi-cards'
        },
        {
          title: 'User profile',
          icon: 'mdi-badge-account'
        },
        { title: 'Trip log', icon: 'mdi-go-kart-track' },
        {
          title: 'DataHub',
          icon: 'mdi-database'
        }
      ],
      rightItems: [
        {
          title: 'Engagements',
          icon: 'mdi-cube-unfolded'
        },
        {
          title: 'API access',
          icon: 'mdi-code-tags-check'
        },
        { title: 'Trip details', icon: 'mdi-details' },
        {
          title: 'Safe driving',
          icon: 'mdi-go-kart'
        }
      ],
      dataleftitems: ['Login and password', 'Personal details'],
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
