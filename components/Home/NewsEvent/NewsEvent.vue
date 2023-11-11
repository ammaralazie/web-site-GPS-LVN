<template>
  <div class="root">
    <div v-if="loaded" class="carousel">
      <slick :options="settings">
        <div v-for="(item, index) in newsContent" :key="index">
          <div class="item">
            <news-card :img="item.img" :text="item.text" :type="item.type" />
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import NewsCard from '../../Cards/NewsEventCard'

const newsContent = [
  {
    text: 'Export of high-frequiency(up to100Hz) crash data buffer',
    img: '/images/lottie/json/export-data.json',
    type: 'caption_export_data'
  },
  {
    text: 'Fully configuring rewarding points based on performance',
    img: imgAPI.photo[2],
    type: 'caption_drive_coins'
  },
  {
    text: 'Driving parameters and detailed analysis of a vehicle utilization',
    img: imgAPI.photo[3],
    type: 'caption_driving_details'
  },
  {
    text: 'Fully configuring model to identify inefficient drivers',
    img: imgAPI.photo[4],
    type: 'caption_eco_driving'
  },
  {
    text: 'Realtime Driver rankings based on driving parameters',
    img: imgAPI.photo[5],
    type: 'caption_leaderboard'
  },
  {
    text: 'Recorded mileage with parameters of driving',
    img: imgAPI.photo[6],
    type: 'caption_mileage_tracker'
  }
]

export default {
  components: {
    NewsCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      newsContent: newsContent,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
