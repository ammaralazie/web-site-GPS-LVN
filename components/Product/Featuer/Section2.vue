<template>
  <div class="section2">
    <v-container style="display: grid;" class="py-14 justify-center">
      <img class="mx-auto mb-10" src="https://www.uffizio.com/wp-content/uploads/2023/03/trakzeebyNumber_.svg" alt="">
      <v-row>
        <v-col v-for="(item,i) in icons" :key="i" class="d-flex" cols="12" lg="4" md="4" sm="6" xs="12">
          <div>
            <v-icon size="80" color="white">{{ item.icon }}</v-icon>
          </div>
          <div class="mx-3">
            <div class="text-h4">
              {{ item.count }}
            </div>
            <div class="text-h5" style="white-space: nowrap;">
              {{ item.title }}
            </div>
          </div>
        </v-col>
      </v-row>

      <v-btn href="/contact" class="mx-auto rounded-0 mt-13" style="color: black; background-color:white; width:250px">
        Contact us
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          title: 'Countries',
          count: '70+',
          icon: 'mdi-earth'
        },
        {
          title: 'happy Customers',
          count: '50,000+',
          icon: 'mdi-emoticon-excited-outline'
        },
        {
          title: 'Supported Trackers',
          count: '1200+',
          icon: 'mdi-plus'
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
  background-color: #01809c !important;
  color: white !important;
}
</style>
