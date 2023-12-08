<template>
  <div>
    <Section1></Section1>
    <v-container class="mt-13">
      <v-row>
        <v-col cols="12" lg="3" md="3" sm="12" xs="12">
          <Section2></Section2>
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12" xs="12">
          <Section3></Section3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
export default {
  components: {
    Section1,
    Section2,
    Section3
  }
}
</script>

<style lang="scss" scoped></style>
