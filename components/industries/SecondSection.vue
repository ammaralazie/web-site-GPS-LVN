<template>
  <v-container>
    <div class="text-center text-h3">
      {{ $t('Used by:') }}
    </div>
    <v-row class="mt-10">
      <v-col v-for="(img, index) in images" :key="index" xl="3" md="3" sm="6" xs="6">
        <v-img class="mx-auto" width="100px" :src="img"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://www.locate2u.com/wp-content/uploads/amart-newlogo.png',
        'https://www.locate2u.com/wp-content/uploads/BingLee_Logo.png',
        'https://www.locate2u.com/wp-content/uploads/franz-buildingsupp-logo.png',
        'https://www.locate2u.com/wp-content/uploads/image-46.png',
        'https://www.locate2u.com/wp-content/uploads/happypaws_logo.png',
        'https://www.locate2u.com/wp-content/uploads/happypaws_logo.png',
        'https://www.locate2u.com/wp-content/uploads/logo-01-1.png',
        'https://www.locate2u.com/wp-content/uploads/perth-couriers.png',
        'https://www.locate2u.com/wp-content/uploads/red-frogs-australia.png',
        'https://www.locate2u.com/wp-content/uploads/red-frogs-australia.png',
        'https://www.locate2u.com/wp-content/uploads/superpharmacy.png',
        'https://www.locate2u.com/wp-content/uploads/superpharmacy.png',
        'https://www.locate2u.com/wp-content/uploads/superpharmacy.png'
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>
