<template>
  <div class="section6">
    <v-container>
      <div class="text-h6 mb-3" style="color: blue;">
        Collaborate with Uffizio
      </div>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <div class="text-h4 mb-3">
            Start growing and optimizing your business today
          </div>
          <p style="border-right: 1px dotted;">
            We at Uffizio believe in maintaining long-lasting and fruitful business relationships. Uffizio has hardware
            partners across the globe. So, we can help you find a partner—if that’s what you’re looking for. Also, we’d be
            honoured if you partnered with us and would be more than happy to assist you with it.
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <div style="display: grid;">
            <div v-for="i in 2" :key="i" class="d-flex align-center mb-14">
              <v-icon class="mx-2" size="70" color="primary">mdi-home</v-icon>
              <div>
                <div>
                  Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. ro quia mamet.
                </div>
                <v-btn class="px-8" height="40px" style="height: 40px;color: #c3c30e;background: #0f395e;margin-top: 5px;">
                  <strong>
                    Find A Partner
                  </strong>
                </v-btn>
              </div>

            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section6 {
  position: relative;
  z-index: 12;
  background-color: #0a2540;
  color: white;
  padding: 40px 0px;
}
</style>
