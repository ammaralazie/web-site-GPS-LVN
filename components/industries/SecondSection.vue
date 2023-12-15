<template>
  <div class="section2" v-if="data">
    <div class="frame"></div>
    <v-container>
      <div class="primary--text text-h5">
        Tools that help you excel
      </div>
      <div class="text-h4 mt-9">
        {{ data.title }}
      </div>
      <div class="text-subtitle1 mt-9" :style="!isMobile ? 'width: 60%;' : 'width: 100%;'">
        {{ data.subtitle }}
      </div>
      <v-row class="mt-10">
        <v-col v-for="(item, i) in data.cards" :key="i" cols="12" lg="3" md="3" sm="6" xs="12">
          <v-icon color="primary" class="px-3" size="40px">
            {{ item.icon }}
          </v-icon>
          <v-alert class="mt-3 px-3" height="50px" colored-border>
            {{ item.title }}
          </v-alert>
          <div class="px-3">
            {{ item.detail }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { filter } from '../../helper/filterObjectValue'
export default {
  data() {
    return {
      data: null
    }
  },
  async created() {
    this.data = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.industries
    )?.detail_page?.section2
    console.log('industries : ', this.data)
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
.section2 {
  width: 100%;
}
</style>
