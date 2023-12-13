<template>
  <div class="section1">
    <v-container>
      <div class="text-h4 text-center  my-14">
        {{ data.title }}
      </div>

      <v-row v-for="(item, i) in data.sides" :key="i">

        <v-col v-if="!item.img.left" cols="12" lg="6" md="5" sm="12" xs="12">
          <div class="mb-10 text-h5">
            {{ item.text.title }}
          </div>
          <div v-for="(text, index) in item.text.detail" :key="index" class="mb-6">
            {{ text }}
          </div>
        </v-col>
        <v-col v-if="item.img.right" class="d-flex align-center" cols="12" lg="6" md="5" sm="12" xs="12">
          <img width="100%" :src="item.img.src">
        </v-col>


        <v-col v-if="item.img.left" class="d-flex align-center" cols="12" lg="6" md="5" sm="12" xs="12">
          <img width="100%" :src="item.img.src">
        </v-col>
        <v-col v-if="!item.img.right" cols="12" lg="6" md="5" sm="12" xs="12">
          <div class="mb-10 text-h5">
            {{ item.text.title }}
          </div>
          <div v-for="(text, index) in item.text.detail" :key="index" class="mb-6">
            {{ text }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state?.product_featuer[this.$route.params.id - 1]
        ?.section1
    }
  }
}
</script>
<style lang="scss" scoped>
.section1 {
  position: relative;
  z-index: 100;
}
</style>
