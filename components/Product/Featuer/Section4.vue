<template>
  <div class="section4 py-14">
    <v-container>
      <v-row>
        <v-col style="line-height: ;" class="text-h5 text-lowercase" cols="12" lg="8" md="8" sm="12" xs="12">
         Learn how you can use our {{ $store.state.product_card[0][$route.params.id-1].title }} and make most of it.
        </v-col>
        <v-col class="d-flex justify-center" cols="12" lg="4" md="4" sm="12" xs="12">
          <v-btn color="white" class="rounded-lg" style="color:rgb(61, 61, 166)">
            Download E-book
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section4 {
  position: relative;
  z-index: 100;
  margin-top: 50px;
  background-color: #01809c !important;
  color: white !important;
}
</style>
