<template>
  <div class="section5">
    <v-container>
      <div class="text-h4 mb-14">
        Ready to get started? Get in touch with us!
      </div>
      <div class="mt-14">
        <v-btn color="primary rounded-lg" height="60px">
          Schedule a Meeting
        </v-btn>
        <v-btn color="primary rounded-0" text height="60px">
          Plans & Pricing
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Same Day Couriers',
          detail:
            "If you're running a same day courier business, use GPS LVN to manage your deliveries from start to finish.",
          icon: 'mdi-weather-sunny'
        },
        {
          title: 'Food Delivery',
          detail:
            'If you deliver food or run a food truck, GPS LVN is the perfect tool to optimize your delivery run.',
          icon: 'mdi-food'
        },
        {
          title: 'Product Delivery',
          detail:
            'Delivering new products to customers? Use GPS LVN to optimize routes and provide your customers with an accurate ETA.',
          icon: 'mdi-mailbox-up-outline'
        },
        {
          title: 'Grocery Delivery',
          detail:
            'Delivering groceries to your customers? Use GPS LVN to manage your bookings and optimize your run for a seamless delivery experience.',
          icon: 'mdi-cart-minus'
        },
        {
          title: 'Restaurant Delivery',
          detail:
            "Use your own delivery drivers to save time and money. Send your bookings from your delivery platform to GPS LVN and we'll automatically import your bookings.",
          icon: 'mdi-truck-delivery'
        },
        {
          title: 'Retail Delivery',
          detail:
            'Offer customers a same day delivery experience by using your very own delivery team.',
          icon: 'mdi-truck-fast'
        },
        {
          title: 'Delivery Drivers',
          detail:
            "No more manual jobs on paper or excel! GPS LVN optimizes your run and lets your customers know when you'll arrive. Saving you hours!",
          icon: 'mdi-car-sports'
        },
        {
          title: 'Line Haul',
          detail:
            "Use your own delivery drivers to save time and money. Send your bookings from your delivery platform to GPS LVN and we'll automatically import your bookings.",
          icon: 'mdi-truck-fast'
        }
      ]
    }
  }, // /data
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
.section5 {
  margin-top: 160px;
  margin-bottom: 100px;
}
</style>
