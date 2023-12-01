<template>
  <v-row class="elevation-2">
    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
      <v-img :src="imagText.img"></v-img>
    </v-col>
    <v-col cols="12" lg="7" md="7" sm="12" xs="12" class="d-flex align-center">
      <div class="pa-7">
        <img width="200px" :src="imagText.text.logo">
        <div class="text-h5 mt-4" v-if="imagText.text.smallHeader">
          {{ $t(imagText.text.smallHeader) }}
        </div>
        <div class="text-h3 mt-4">
          {{ $t(imagText.text.boldHeader) }}
        </div>
        <p class="mt-4">
          {{ $t(imagText.text.subtitle) }}
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['imagText']

}
</script>

<style lang="scss" scoped></style>
