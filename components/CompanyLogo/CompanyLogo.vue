<template>
  <v-container class="logo-container">
    <div class="root">
      <a  v-for="(logo, index) in logos" :key="index">
        <v-btn class="buttonLogos" text>
          <img :src="logo" :alt="'logo' + index">
        </v-btn>
      </a>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
.buttonLogos {
  &:hover {
    background-color: unset;
  }
}
</style>

<script>
export default {
  data() {
    return {
      logos: [
        '/images/aciasell-logo.svg',
        '/images/logos/ITPC-removebg-preview.png',
        '/images/logos/zain-logo-removebg-preview.png',
        '/images/logos/شركة_السلام_العامة-removebg-preview.png',
        '/images/logos/شركة_العلام_و_الاتصالات-removebg-preview.png',
        '/images/logos/Asiacell_logo-removebg-preview.png'
      ]
    }
  }
}
</script>
