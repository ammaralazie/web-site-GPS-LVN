<template>
  <div class="section3" v-if="figures">
    <v-container :class="{ fixed: isDesktop }">
      <div class="text-h4 text-center mt-14 mb-3">{{ figures.title }}</div>
      <div class="text-body-1 text-center mb-14">{{ figures.subtitle }}</div>
      <u-animate-container>
        <div class="item">
          <v-row :class="[isMobile ? 'column-reverse' : index > 0 ? 'row mt-9' : 'row']"
            v-for="(figure, index) in figures.cards" :key="index">
            <v-col cols="12" md="6" class="px-md-5 px-lg-15">
              <ImagSide v-if="figure.imageSide.right" :type="figure.imageSide.type"
                :image-url="figure.imageSide.imageUrl">
              </ImagSide>
              <TextSide :icon="figure.textForm.title" :title="$t(figure.textForm.title)"
                :detail="$t(figure.textForm.detail)" v-else></TextSide>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <ImagSide v-if="figure.imageSide.left" :image-url="figure.imageSide.imageUrl" :type="figure.imageSide.type">
              </ImagSide>
              <TextSide :title="$t(figure.textForm.title)"
                :detail="$t(figure.textForm.detail)" v-else></TextSide>ٍ
            </v-col>
          </v-row>
        </div>
      </u-animate-container>
    </v-container>
  </div>
</template>

<script>
import ImagSide from './ImagSide.vue'
import TextSide from './TextSide.vue'
import { filter } from '../../helper/filterObjectValue'
export default {
  data() {
    return {
      figures: null
    }
  },
  async created() {
    this.figures = await filter(
      'title',
      this.$route.params.id,
      this.$store.state.industries
    )?.detail_page?.section3
  },
  components: {
    TextSide,
    ImagSide
  }
}
</script>

<style lang="scss" scoped>
@import './feature-style.scss';

.section3 {
  margin-top: 160px !important;
}
</style>
