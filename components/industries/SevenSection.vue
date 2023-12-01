<template>
  <v-container>
    <div class="text-h3 mx-auto my-10 headTitle align-center text-center">
      {{ $t('GPS LVN is perfect for:') }}
      <p class="text-body-1">
        {{ $t("Whether you're managing a small local delivery service or a large national operation, GPS LVN has the tools you need to streamline your process, reduce costs, and improve customer satisfaction.") }}
      </p>
    </div>
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" xl="3" md="3" sm="6" xs="6">
        <v-card min-height="290" class="pa-4 elevation-3">
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
          title: 'Live Location Tracking',
          detail:
            'Share your live location with customers, so they can see exactly where their delivery is.',
          icon: 'mdi-car-connected'
        },
        {
          title: 'Proof of Delivery',
          detail:
            'Capture an e-signature and photo of the item upon delivery via our mobile app. Your customers can then view this information in real time.',
          icon: 'mdi-wechat'
        },
        {
          title: 'Customer Reviews',
          detail:
            "Capture customer feedback upon the delivery's completion.We’ll then send an SMS allowing your customer to rate their experience and provide feedback.",
          icon: 'mdi-account-group'
        },
        {
          title: 'Delivery Management',
          detail:
            'Reduce wasted resources and labor, as well as ensuring goods arrive safely in a timely manner.',
          icon: 'mdi-network-outline'
        },
        {
          title: 'GPS Tracking',
          detail:
            'Track the status of your vehicles and assets so you can provide customers with accurate ETAs and respond to any issues quickly.',
          icon: 'mdi-google-maps'
        },
        {
          title: 'Last Mile',
          detail:
            'Complete more bookings in less time, reduce fuel costs and improve communication between customers and drivers.',
          icon: 'mdi-go-kart-track'
        },
        {
          title: 'SMS Alerts',
          detail:
            "Tell your customers when you're on route via our automated SMS system.Customers won't have to worry about missing the delivery.",
          icon: 'mdi-wechat'
        },
        {
          title: 'Route Optimization',
          detail:
            'Have the most efficient routes for your delivery drivers generated in seconds.',
          icon: 'mdi-routes'
        }
      ]
    }
  } // /data
}
</script>

<style lang="scss" scoped>
.cardContent,.headTitle {
  display: grid;
}
</style>
