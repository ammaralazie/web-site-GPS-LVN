<template>
  <div>
    <v-container>
      <v-row style="margin-top: 20px;">
        <v-col v-for="(product, index) in products" :key="index" cols="12" lg="4" md="4" sm="12" xs="12">
          <a class="nuxtLink" :href="'/'+$i18n.locale+'/product/detail/'+ product.id">
            <v-card link min-height="210" class="d-flex elevation-4">
              <v-card-content class="d-flex align-center">
                <v-row>
                  <v-col cols="3" class="d-flex px-0 align-center justify-end">
                    <v-icon class="px-2" color="primary" size="70">{{ product.icon }}</v-icon>
                  </v-col>
                  <v-col cols="9">
                    <p class="px-1" style="display: grid;">
                      <strong class="text-title mb-2">{{ $t(product.title) }}</strong>
                      {{ $t(product.discription) }}
                    </p>
                  </v-col>
                </v-row>
              </v-card-content>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: this.$store.state.products
    }
  }, // /data
  mounted() {
    console.log('this page : ', this.products)
  }
}
</script>

<style lang="scss" scoped></style>
