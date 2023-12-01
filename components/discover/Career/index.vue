<template>
  <div class="career">
    <div class="careerWrapper">
      <div class="section1">
        <v-container>
          <div class="text-h4">
            Career
          </div>
          <p class="mt-10" style="line-height: 2.5;">
            GPS LVN provides uncountable opportunities and scope for the individuals to share their ideas, perspectives,
            opinions, methods on its ground to grow as a great employee. A happy employee is your best representative.
            Making employees happy is equally important as making an employee more productive because employees
            productivity
            is interrelated with their emotional state. GPS LVN brings its best to make the work environment happy and
            make
            the individual feel as family member rather than a staff member.
          </p>
        </v-container>
      </div>

      <!-- search inputs  -->
      <div class="section2">
        <v-container>
          <Career></Career>
        </v-container>
      </div>

      <!-- jops -->
      <div class="section3">
        <div style="min-height: 4px;">
          <v-progress-linear v-model="value" :active="show" :indeterminate="query" :query="true"></v-progress-linear>
        </div>
        <v-container>
          <v-sheet class="my-2 px-2">
            <v-row>
              <v-col cols="12">Development</v-col>
              <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                <v-card class="elevation-3">
                  <v-card-text>
                    <div class="text-h5">
                      title for the jobs
                    </div>
                    <div style="gap: 6px;" class="d-flex mt-2">
                      <div>category</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>+2 experince</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>Full Time</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                <v-card class="elevation-3">
                  <v-card-text>
                    <div class="text-h5">
                      title for the jobs
                    </div>
                    <div style="gap: 6px;" class="d-flex mt-2">
                      <div>category</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>+2 experince</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>Full Time</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                <v-card class="elevation-3">
                  <v-card-text>
                    <div class="text-h5">
                      title for the jobs
                    </div>
                    <div style="gap: 6px;" class="d-flex mt-2">
                      <div>category</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>+2 experince</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>Full Time</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="4" md="4" sm="6" xs="12">
                <v-card class="elevation-3">
                  <v-card-text>
                    <div class="text-h5">
                      title for the jobs
                    </div>
                    <div style="gap: 6px;" class="d-flex mt-2">
                      <div>category</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>+2 experince</div>
                      <v-icon small style="opacity: .5;">mdi-checkbox-blank-circle</v-icon>
                      <div>Full Time</div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Career from '../../Forms/Career.vue'
export default {
  data() {
    return {
      value: 0,
      query: true,
      show: false,
      interval: 10
    }
  },
  components: {
    Career
  }
}
</script>

<style lang="scss" scoped>
@import "./career.scss"
</style>
