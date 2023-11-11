<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-resposive>
            <img src="images/mobile-app.png">
          </v-resposive>
          <h2 class="text-center mt-2">Create your own tracking app</h2>
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
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ipsam?
                  </div>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, possimus! Sapiente, eos. At amet
                  nesciunt aut esse non dolorem natus eos quae, nisi qui, neque odit tempore fuga possimus praesentium.
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'integration-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../../Title'

export default {
  components: {
    'title-main': Title
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
      ]
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
