<template>
  <div class="section3" v-if="data">
    <v-row v-if="i != 0">
      <v-col v-for="(item, i) in data.cards" :key="i" cols="12" lg="4" md="4" sm="6" xs="12">
        <v-card link height="310" class="card elevation-3">
          <v-img class="rounded-0 img" height="160" :src="item.img"></v-img>
          <v-sheet class="detail" height="311">
            <v-card-text class="text-subtitle-1 text-center threeDots p">
              {{ item.date }}
            </v-card-text>
            <v-card-title class="threeDots title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="mt-3" v-if="item.detail">
              {{ item.detail }}
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-carions class="actions">
              <v-btn link href="" text block class="rounded-0">
                <div>
                  Read More
                </div>
                <v-spacer></v-spacer>
                <v-icon>
                  mdi-chevron-double-right
                </v-icon>
              </v-btn>
            </v-card-carions>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>

    <div v-else>
      <div v-for="(data, index) in data" :key="index">
        <nuxt-link class="text-h4 my-2 nuxtLink" :to="`/${$i18n.locale}/resources/${data.title}`">{{ data.title }}</nuxt-link>
        <v-row>
          <v-col v-for="(item, i) in data.cards.slice(0,3)" :key="i" cols="12" lg="4" md="4" sm="6" xs="12">
            <v-card link height="310" class="card elevation-3">
              <v-img class="rounded-0 img" height="160" :src="item.img"></v-img>
              <v-sheet class="detail" height="311">
                <v-card-text class="text-subtitle-1 text-center threeDots p">
                  {{ item.date }}
                </v-card-text>
                <v-card-title class="threeDots title">
                  {{ item.title }}
                </v-card-title>
                <v-card-text class="mt-3" v-if="item.detail">
                  {{ item.detail }}
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-carions class="actions">
                  <v-btn link href="" text block class="rounded-0">
                    <div>
                      Read More
                    </div>
                    <v-spacer></v-spacer>
                    <v-icon>
                      mdi-chevron-double-right
                    </v-icon>
                  </v-btn>
                </v-card-carions>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      data: null,
      i: null
    }
  },
  created() {
    const i = this.$store.state.resources.findIndex(
      obj => obj?.title === this.$route.params.id
    )
    this.i = i
    if (i !== 0) this.data = this.$store.state.resources_page[i]
    else this.data = Object.values(this.$store.state.resources_page)
  }
}
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  z-index: 100;

  .card {
    position: relative;
    overflow: hidden;
    height: 300px;

    .img {
      position: absolute;
      z-index: 0;
      top: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      transition: opacity 0.6s ease;
    }

    .detail {
      position: absolute;
      z-index: 2;
      top: 160px;
      width: 100%;
      transition: all 0.3s ease;

      .actions {
        position: absolute;
        bottom: 0px;
        width: 100%;
      }
    }

    &:hover .detail {
      top: 0px;

      .title,
      .p {
        overflow: visible !important;
        max-inline-size: none;
        text-overflow: clip;
        white-space: normal;
        text-align: center;
      }
    }

    &:hover .img {
      opacity: 0;
    }
  }
}
</style>
