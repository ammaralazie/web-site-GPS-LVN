<template>
  <v-container>
    <div class="text-h3 justify-center mx-auto my-10 d-flex ">
      {{ $t("The complete Delivery Management Solution.") }}
    </div>
    <v-row>
      <v-col v-for="(item,i) in items" :key="item.title" cols="12" xl="3" md="3" sm="6" xs="6">
        <v-card :min-height="i > 3 ? '100%':'290'" class="pa-4 elevation-3">
          <v-card-content class="justify-center algin-center cardContent">
            <v-icon class="mx-auto" size="90" color="primary">{{ item.icon }}</v-icon>
            <div class="text-h5">{{ $t(item.title) }}</div>
            <p>
              {{ $t(item.detail) }}
            </p>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
.cardContent {
  display: grid;
}
</style>
