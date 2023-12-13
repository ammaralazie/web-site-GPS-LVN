<template>
  <div class="section3">
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div class="text-h4">
            {{ data.leftSide }}
          </div>
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12" xs="12">
          <v-row>
            <v-col v-for="(item, i) in data.rightSide" :key="i" cols="12" lg="4" md="4" sm="6" xs="12">
              <v-card class="pa-3 elevation-3">
                <v-icon color="primary">
                  mdi-check-circle
                </v-icon>
                <div class="text-h5 mt-7">
                  {{ item.title }}
                </div>
                <div class="text-body mt-7">
                  {{ item.detail }}
                </div>
              </v-card>
            </v-col>
          </v-row>
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
        ?.section3
    }
  },
}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  z-index: 100;
  margin-top: 50px;
}
</style>
