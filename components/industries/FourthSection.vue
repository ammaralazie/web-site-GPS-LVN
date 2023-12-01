<template>
  <div style="position: relative;
    z-index: 20;
    background: #3c9afe;">
    <v-container>
      <v-row>
        <v-col class="d-flex align-center" cols="12" md="6" lg="6" sm="12" xs="12">
          <div>
            <v-header class="text-h2">
              {{ $t(data.header) }}
            </v-header>
            <p class="mt-3">
              {{ $t(data.subheader) }}
            </p>
            <v-col cols="6"><v-btn block>
                {{ $t('Start your free trial.') }}
              </v-btn>
            </v-col>

          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="12" xs="12" class="d-flex align-center justify-center">
          <v-img :src="data.img"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
