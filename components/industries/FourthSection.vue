<template>
  <div class="section4">
    <v-container>
      <div class="text-h2 text-center">
        Solutions
      </div>
      <div class="text-body-1 text-center mt-3">
        See how businesses in this industry are using our platform for greater productivity and profits!
      </div>
      <v-carousel class="mt-14" cycle height="250" delimiter-icon="mdi-minus" hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item v-for="item in 5" :key="item">
          <v-sheet height="100%" style="background-color: transparent;" class="d-flex align-center justify-center px-3">
            <v-row>
              <v-col v-for="i in 4" :key="i" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card :to="'/'+$i18n.locale+'/industries/use-case/1'" link class="mx-auto mb-14 elevation-3" height="180px">
                  <v-card-text>
                    <div>
                      <v-icon size="50" color="primary">
                        mdi-home
                      </v-icon>
                    </div>
                    <div class="px-2 mt-2" style="font-size: 20px;">
                      Lorem, ipsum dolor.
                    </div>
                    <div class="mt-3 px-2" style="font-size: 14px;">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit.
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section4 {
  position: relative;
  z-index: 12;
  margin-top: 160px;
}
</style>
