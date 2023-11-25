<template>
  <v-container style="position: relative;
      z-index: 20;">
    <div class="text-h4 text-center mb-5">{{$t('Frequently asked questions.')}}</div>
    <v-expansion-panels focusable v-model="panel" multiple>
      <v-expansion-panel class="mb-3" v-for="(item, i) in items" :key="item.quastion" :value="i">
        <v-expansion-panel-header class="text-h5">{{ $t(item.quastion) }}</v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t(item.answer) }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          quastion: 'What Is Fleet Management Software?',
          answer:
            'Fleet management software is a tool used to access important information relating to fleet performance and customer service. Fleet management software works to keep up with vehicle maintenance, reduce downtime and boost operational efficiency. Learn more about fleet management software by clicking here.'
        },
        {
          quastion:
            "How does GPS LVN's fleet management software reduce operating costs?",
          answer:
            'The fleet management software from GPS LVN lowers operational expenses for enterprises by increasing safety, optimizing resource use, and lowering fuel usage.Through GPS LVN, fleet owners have access to data that can be used to maximize driver performance, decrease idle time, and enhance fuel efficiency.Users may make better fleet decisions by comprehending and precisely tracking fleet activity.'
        },
        {
          quastion:
            "Can GPS LVN's fleet management software be used for route optimization?",
          answer:
            'Yes, GPS LVN’s fleet management software includes a route optimization feature that generates the most efficient delivery routes in seconds. This is achieved by taking into account weather and traffic conditions, driver availability, vehicle type, product type etc.'
        },
        {
          quastion:
            "How does GPS LVN's fleet management software improve customer service?",
          answer:
            'GPS LVN’s fleet management software allows users to share a live tracking link with their customers for unprecedented delivery visibility. This eliminates the issue of large time windows and missed deliveries as the customer can see exactly where their order is, building trust and increasing the odds of repeat purchases.'
        },
        {
          quastion:
            "Can GPS LVN's fleet management software be integrated with my existing systems?",
          answer:
            'Yes, you can easily link our fleet management software with the systems you already have in place.'
        },
        {
          quastion:
            "How can I sign up for a free trial of GPS LVN's fleet management software?",
          answer:
            'You can sign up for a free trial of GPS LVN by clicking the “Sign Up for a Free Trial” button on this page.'
        }
      ],
      panel: []
    }
  } // /data
}
</script>

<style lang="scss" scoped></style>
