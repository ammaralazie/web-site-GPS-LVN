<template>
  <div class="desc">
    <v-icon>{{ icon }}</v-icon>
    <title-main :align="isMobile ? 'center' : 'left'">
      <span>
        {{ $t(title) }}
      </span>
    </title-main>
    <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
      {{ $t(detail) }}
    </h6>

    <template v-if="items">
      <v-row class="mt-5">
        <v-col class="pa-0 d-flex" v-for="(item, key) in items" :key="key" style="text-align:-webkit-auto" cols="12"
          lg="6" md="6" sm="12" xs="12">
          <div>
            <v-icon right class="notranslate mx-2" color="success">
              mdi-checkbox-marked-circle
            </v-icon>
          </div>
          <div>
            {{ $t(item) }}
          </div>
        </v-col>
      </v-row>
      <v-btn v-if="btn" color="secondary" large class="btn">
        {{ $t(btn) }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import Title from '../Title'
export default {
  name: 'TextSide',
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    btn: {
      type: String
    },
    items: {
      type: Array
    },
    icon: {
      required: true,
      type: String
    }
  },
  components: {
    'title-main': Title
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
