<template>
  <div class="section2">
    <v-container>
      <div class="text-h3 text-center">
        Integrated Devices
      </div>
      <div class="text-body-1 text-center mt-3">
        Our GPS tracking system is flexible and user-friendly, which is; why it's the best GPS tracking platform available
        in the market. Our Web and Mobile-based tracking and management software; end dependency on any particular Tracker
        hardware.
      </div>

      <div class="mt-10 mx-auto d-flex align-center justify-center" style="width: 50%;">
        <v-autocomplete outlined scrollable clearable label="Select an item" :items="items"></v-autocomplete>
      </div>

      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-for="card in cards" :key="card.title">
          <v-card height="250px" link min-height="210" class="d-flex elevation-4 pa-10">
            <v-card-content class="d-flex align-center">
              <v-row>
                <v-col cols="3" class="d-flex px-0 align-center justify-end">
                  <v-img :src="card.img" class="mx-3"></v-img>
                </v-col>
                <v-col cols="9" class="d-flex align-center">
                  <p class="px-1" style="display: grid;">
                    <strong class="text-title mb-2">
                      {{ card.title }}
                    </strong>
                    {{ card.detail }}
                  </p>
                </v-col>
              </v-row>
            </v-card-content>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'A-Telematics AT-10',
        'Alematics AM1 Series',
        'Teltonika FMB120',
        'Amwell T360',
        'Cargo Unit',
        'Eview EV 07S',
        'Gosafe G2P',
        'Shenzhen Cantrack G01/02',
        'Toptraking TP-200',
        'WanWayTech GP08',
        'Blackbox TM77',
        'Cellocator CANiQ',
        'ADD REVT107',
        'Armoli S300',
        'Atlanta B-100',
        'Atlanta EV100',
        'Atlanta WP-30C',
        'Atlanta G-100',
        'Cellocator CelloTrack',
        'Topten GT08',
        'Meitrack MT90',
        'AMT MT-OBD',
        'Atlanta O-100',
        'Shenzhen Concox GT300',
        'ATrack AX9',
        'Shenzhen Concox GT350',
        'Alematics AE1 Series',
        'Shenzhen Concox Qbit',
        'Anbtek AS201E',
        'Atlanta L-100',
        'ATrack AX11',
        'Atlanta WP-20C',
        'Atlanta WP-30L',
        'Atlanta C-100',
        'ATrack AS3',
        'Teltonika HB-A8E',
        'ATrack AS1',
        'Teltonika TMT250',
        'Teltonika GH5200',
        'Toptraking TP 07S',
        'ATrack AS 11',
        'TrackLit P130',
        'TWIG Embody Wrist',
        'WanWayTech GP06',
        'ATrack AK11',
        'ATrack AL1',
        'Bitrek BI 530P',
        'Bitrek BI 530R',
        'Bitrek BI 530RE',
        'Bitrek BI 520',
        'Bitrek BI 520L',
        'Bitrek BI520R',
        'Blackbox TM22',
        'Bofan PT502',
        'BSJ Tech KM-01/02',
        'Atlanta AM-100',
        'CarGo Spy',
        'Geosat 6701',
        'Aquilla Asset Tracker',
        'Jointech JT701',
        'Jointech JT707A',
        'Libi Technologies LT05 Plus',
        'Libi Technologies LT05',
        'Meitrack T355',
        'Cargo Light 2',
        'Meitrack K211G',
        'Queclink GL300',
        'Queclink GV300W'
      ],
      cards: [
        {
          title: 'AVL Hardware',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/Pet-GPS-Trackers.svg',
          detail: `An AVL or Automatic Vehicle Locator is a GPS tracking device that empowers you to track vehicle locations from anywhere you like.`
        },
        {
          title: 'Personal GPS Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/Personal-GPS-Trackers.svg',
          detail: `A personal tracker is a small tracking device usually worn around the neck or wrist. They help in tracking family members or employees in real-time.`
        },
        {
          title: 'OBD Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/OBD-Trackers.svg',
          detail: `OBD tracker has a self-diagnostic and reporting capability for detecting vehicle faults which is extremely useful in tracking engine health. `
        },
        {
          title: 'GPS Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/GPS-Trackers.svg',
          detail: `GPS tracking is a satellite-based navigation system and helps you to figure out exactly where something is using triangulation.`
        },
        {
          title: 'Pet GPS Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/Pet-GPS-Trackers.svg',
          detail: `A Pet tracker is a GPS tracker used for monitoring pets and other animals. This tracker is usually attached to your pet's collar.`
        },
        {
          title: 'Asset GPS Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/Asset-GPS-Trackers.svg',
          detail: `Asset GPS tracker is used for monitoring the location and movement of valuable assets throughout their journey for added safety and security.`
        },
        {
          title: 'AIS 140 GPS Trackers',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/07/AIS-140-GPS-Trackers.svg',
          detail: `AIS 140 GPS tracking devices are mandatory in all public vehicles because they ensure passenger safety and monitor driver behaviour.`
        },
        {
          title: 'Fuel Sensors',
          img:
            'https://www.uffizio.com/wp-content/uploads/2022/09/AdditionalHardware.png',
          detail: `Fuel Sensors are devices that are used to measure the level of fuel in the tanks. Our software is compatible with all the brands and models of fuel sensors.`
        },
        {
          title: 'Video Monitoring Devices',
          img:
            'https://www.uffizio.com/wp-content/uploads/2023/02/Dash-Cam.png',
          detail: `Video monitoring is a surveillance system capable of capturing images and videos that can be compressed, stored, or sent over communication networks.`
        },
        {
          title: 'Additional Hardware',
          img:
            'https://www.uffizio.com/wp-content/uploads/2023/02/Fuel-sensors.png',
          detail: `Our solutions offer you the flexibility to utilise any additional sensors or hardware connected to the GPS tracker.  Uffizio's solutions are compatible with all kinds of additional hardware.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section2 {
  position: relative;
  z-index: 100;
  margin-top: 70px;
}
</style>
