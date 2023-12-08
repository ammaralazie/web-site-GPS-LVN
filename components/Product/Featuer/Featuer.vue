<template>
  <div>
    <Section></Section>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <Section5>s</Section5>
  </div>
</template>

<script>
import Section from './Section.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'

export default {
  components: {
    Section,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5
  }
}
</script>

<style lang="scss" scoped></style>
