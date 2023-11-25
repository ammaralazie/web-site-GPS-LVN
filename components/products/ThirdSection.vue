<template>
  <!-- forms section  -->
  <v-container :class="{ fixed: isDesktop }" class="mt-9">
    <u-animate-container>
      <div class="item">
        <v-row :class="[isMobile ? 'column-reverse' : index > 0 ? 'row mt-9' : 'row']" v-for="(figure, index) in figures"
          :key="index">
          <v-col cols="12" md="6" class="px-md-5 px-lg-15">
            <ImagSide v-if="figure.imageSide.right" :type="figure.imageSide.type" :image-url="figure.imageSide.imageUrl">
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
</template>

<script>
import ImagSide from './ImagSide.vue'
import TextSide from './TextSide.vue'
export default {
  props: ['figures'],
  data() {
    return {}
  },
  components: {
    TextSide,
    ImagSide
  }
}
</script>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>
