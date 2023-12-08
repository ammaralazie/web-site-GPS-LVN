<template>
  <div class="section5">
    <v-container>
      <v-expansion-panels v-model="panels" multiple>
        <v-expansion-panel class="mb-2" v-for="(item, i) in data" :key="i">
          <v-expansion-panel-header class="text-h6">
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="(answer, index) in item.answer" :key="index" class="mb-6">
              {{ answer }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state?.product_featuer[this.$route.params.id - 1]
        ?.section5,
      panels: []
    }
  }
}
</script>

<style lang="scss" scoped>
.section5 {
  position: relative;
  z-index: 100;
  margin-top: 50px;
}
</style>
