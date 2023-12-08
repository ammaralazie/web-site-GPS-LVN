<template>
  <div>
    <v-container>
      <v-row style="margin-top: 20px;">
        <v-col v-for="(item, index) in industries" :key="index" cols="12" lg="4" md="4" sm="12" xs="12">
          <nuxt-link class="nuxtLink" :to="'/'+$i18n.locale+'/industries/detail/'+ item.id">
            <v-card link min-height="210" class="d-flex elevation-4">
              <v-card-content class="d-flex align-center">
                <v-row>
                  <v-col cols="3" class="d-flex px-0 align-center justify-end">
                    <v-icon class="px-2" size="50">{{ item.icon }}</v-icon>
                  </v-col>
                  <v-col cols="9">
                    <p class="px-1" style="display: grid;">
                      <strong class="text-title mb-2">{{ $t(item.title) }}</strong>
                      {{ $t(item.discription) }}
                    </p>
                  </v-col>
                </v-row>
              </v-card-content>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      industries: this.$store.state.industries
    }
  }, // /data
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
