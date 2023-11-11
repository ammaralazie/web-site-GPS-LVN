<template>
  <div class="desc">
    <title-main :align="isMobile ? 'center' : 'left'">
      <span>
        {{ $t(title) }}
      </span>
    </title-main>
    <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
      {{ $t(detail) }}
    </h6>

    <template v-if="items">
      <v-row>
        <v-col class="pa-0"  v-for="(item, key) in items" :key="key" style="white-space: nowrap;text-align:-webkit-auto" cols="12" lg="6" md="6" sm="12" xs="12">
          <v-icon right class="notranslate mx-2" color="success">
            mdi-checkbox-marked-circle
          </v-icon>
          {{ $t(item) }}
        </v-col>
      </v-row>
      <v-btn v-if="btn" color="secondary" large class="btn">
        {{ $t(btn) }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import Title from '../../Title'
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
