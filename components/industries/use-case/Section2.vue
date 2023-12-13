<template>
  <div class="section2">
    <v-container>
      <div class="text-h4 text-center">
        How it works
      </div>
      <div class="text-body-1 text-center">
        Lorem ipsum dolor sit amet consectetur.
      </div>

      <v-timeline class="mt-14">
        <v-timeline-item class="align-center" v-for="(year, i) in years" :key="i" color="error" small>
          <template #opposite>
            <div class="d-flex align-center justify-center" style="width: 100%;">
              <img class="mx-auto" width="200px"
                src="https://www.uffizio.com/wp-content/uploads/2022/07/tracking-and-monitoring-healthcare-equipment-1-2.png">
            </div>
          </template>
          <v-card class="elevation-3">
            <v-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, aliquam iure amet cum vel unde enim vero
              veniam quasi minus.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: 'cyan',
          year: '1960'
        },
        {
          color: 'green',
          year: '1970'
        },
        {
          color: 'pink',
          year: '1980'
        },
        {
          color: 'amber',
          year: '1990'
        },
        {
          color: 'orange',
          year: '2000'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
