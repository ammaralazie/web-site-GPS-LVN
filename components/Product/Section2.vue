<template>
  <div class="section2">
    <v-row>
      <v-col cols="12" lg="6" md="6" class="d-flex align-center justify-center" sm="12" xs="12">
        <div class="justify-center" style="display: grid;">
          <div class="text-h3">
            Fleet Management System
          </div>
          <v-expansion-panels v-model="panel" multiple class="mt-10">
            <v-expansion-panel class="mb-3" style="max-width: 450px;" :value="1">
              <v-expansion-panel-header class="text-h5">
                Product Description
              </v-expansion-panel-header>
              <v-expansion-panel-content max-width="100%">
                <p>
                  Our advanced fleet management software significantly enables businesses to monitor their vehicles’
                  real-time location and movement. Additionally, they can oversee driver behavior to ensure safety and
                  compliance while optimizing their fleet’s fuel usage.
                </p>

                <p class="mt-8 ">
                  Furthermore, it aids in reducing downtime by facilitating maintenance scheduling and tracking, which
                  extends the vehicles’ lifespan.
                </p>

                <p class="mt-8 ">
                  In essence, our software transforms into a comprehensive solution for businesses aiming to streamline
                  operations, enhance safety measures, and optimize resource utilization.
                </p>

                <p class="mt-8 ">
                  Moreover, whether it’s minimizing downtime through effective maintenance tracking or ensuring optimal
                  fuel
                  efficiency for each journey, our advanced fleet management software acts as a strategic partner in your
                  business’s success.
                </p>

                <p class="mt-8 ">
                  Therefore, embrace the future of fleet management with a tool that doesn’t just monitor but actively
                  contributes to the growth and sustainability of your fleet.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="mb-3" style="max-width: 450px;" :value="2">
              <v-expansion-panel-header class="text-h5">
                Features
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-3">
                <p>
                  Our software provides various features, such asfuel monitoring, tire management, video telematics, tire
                  pressure monitoring, maintenance reminders, temperature monitoring, and monitoring of driving behavior,
                  among others.
                </p>

                <p class="mt-8 ">
                  Furthermore, in addition to offering real-time insights, our software can efficiently automate tasks
                  like
                  dispatching, routing, and scheduling. It significantly minimizes the necessity for manual intervention.
                </p>

                <p class="mt-8 ">
                  One of the key features that sets our software apart is its ability to optimize fuel usage. Certainly,
                  by
                  providing detailed analytics and real-time data, businesses can make informed decisions to enhance fuel
                  efficiency, undeniably leading to cost savings and reduced environmental impact.

                </p>

                <p class="mt-8 ">
                  This strategic approach aligns with modern sustainability goals, while positioning your fleet as a
                  responsible and eco-friendly entity in the market.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-btn class="mx-auto mt-3">
            Schedule a demo
          <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="pa-10" cols="12" lg="6" md="6" sm="12" xs="12">
        <video controls width="100%" src="/video/hd0992.mov" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section2 {
  position: relative;
  z-index: 100;
}
</style>
