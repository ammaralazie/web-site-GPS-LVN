<template>
  <div class="section3">
    <v-container :class="{ fixed: isDesktop }">
      <div class="text-h4 text-center mt-14 mb-3">Features of Employee Management System</div>
      <div class="text-body-1 text-center mb-14">Here's why our employee management stand out from the rest</div>
      <u-animate-container>
        <div class="item">
          <v-row :class="[isMobile ? 'column-reverse' : index > 0 ? 'row mt-9' : 'row']"
            v-for="(figure, index) in figures" :key="index">
            <v-col cols="12" md="6" class="px-md-5 px-lg-15">
              <ImagSide v-if="figure.imageSide.right" :type="figure.imageSide.type"
                :image-url="figure.imageSide.imageUrl">
              </ImagSide>
              <TextSide :title="$t(figure.textForm.title)" :items="figure.textForm.items"
                :detail="$t(figure.textForm.detail)" v-else></TextSide>
              <v-row v-if="figure.btn && !figure.imageSide.right">
                <v-col cols="12" class="mt-2">
                  <v-btn color="success">{{ $t(figure.btn) }}</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <ImagSide v-if="figure.imageSide.left" :image-url="figure.imageSide.imageUrl" :type="figure.imageSide.type">
              </ImagSide>
              <TextSide :title="$t(figure.textForm.title)" :items="figure.textForm.items"
                :detail="$t(figure.textForm.detail)" v-else></TextSide>
              <v-row v-if="figure.btn && figure.imageSide.right">
                <v-col cols="12">
                  <v-btn color="success">{{ $t(figure.btn) }}</v-btn>
                </v-col>
              </v-row>
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
export default {
  data() {
    return {
      figures: this.$store.state.futuerForm
    }
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
