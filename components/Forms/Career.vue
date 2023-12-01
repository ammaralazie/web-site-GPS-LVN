<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="12" lg="6" md="6" xs="12" sm="12">
        <v-text-field label="Search" outlined></v-text-field>
      </v-col>
      <v-col cols="12" lg="3" md="3" xs="12" sm="12">
        <v-autocomplete clearable outlined v-model="selectedItem" :items="items" density="compact"></v-autocomplete>
      </v-col>
      <v-col cols="12" lg="3" md="3" xs="12" sm="12">
        <v-autocomplete clearable outlined v-model="selectedItem2" :items="items2" density="compact"></v-autocomplete>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      items: ['Surat', 'Valsad'],
      selectedItem: '',
      items2: [
        'Design',
        'Digital Marketing',
        'Mobile Development',
        'Development',
        'Sales'
      ],
      selectedItem2: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
