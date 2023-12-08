<template>
  <div class="section1">
    <v-img height="300" src="/images/background-gpslvn.gif" class="d-flex algin-center">
      <v-container class="my-auto d-flex align-center" style=" height:300px">
        <div class="text-h3 white-color">
          {{ data.title }}
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    const i = this.$store.state.resources.findIndex(
      obj => obj.title === this.$route.params.id
    )
    this.data = this.$store.state.resources_page[i] || {
      title: 'Resources'
    }
  }
}
</script>

<style lang="scss" scoped>
.section1 {
  position: relative;
  z-index: 100;
}
</style>
