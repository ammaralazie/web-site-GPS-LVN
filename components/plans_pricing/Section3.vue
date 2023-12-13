<template>
  <div class="section3">
    <v-container class="py-14">
      <v-row class="my-10">
        <v-col class="d-flex align-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <div>
            <div class="text-h4 mb-2">
              Start growing and optimising your business today.
            </div>
            <p>
              We at Uffizio believe in maintaining long-lasting and fruitful business relationships.
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-form>
            <v-label>First Name*</v-label>
            <v-text-field outlined></v-text-field>
            <v-label>Email*</v-label>
            <v-text-field outlined></v-text-field>
            <v-label>
              Phone Number*
            </v-label>
            <v-text-field outlined></v-text-field>
            <v-btn block class="rounded-0">
              Contact Sales
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  z-index: 12;
}
</style>
