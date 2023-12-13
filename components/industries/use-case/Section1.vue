<template>
  <div class="section1">
    <v-container>
      <v-row>
        <v-col class="d-flex align-center" cols="12" lg="6" md="6" sm="12" xs="12">
          <div>
            <div class="text-h4">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div class="text-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum, dignissimos perferendis quo
              quibusdam tempore enim aliquid at in qui.
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <v-img src="https://placehold.co/600x400">
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // window.addEventListener(
    //   'load',
    //   function () {
    //     var ctx = document.getElementById('myCanvas').getContext('2d')

    //     for (let index = 0; index < 5; index++) {
    //       var img = new Image()

    //       var x = 1 * index,
    //         y = 1 * index
    //       img.src =
    //         'http://www.gravatar.com/avatar/a1f80339c0cef95be6dc73e0ac510d5d?s=32&d=identicon&r=PG'
    //       console.log('img : ', img)

    //       img.addEventListener(
    //         'load',
    //         function () {
    //           for (var i = 0; i < 10; i++) {
    //             setInterval(
    //               (function () {
    //                 return function () {
    //                   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //                   ctx.drawImage(img, x, y)

    //                   x += 0.5
    //                   if (x > ctx.canvas.width) {
    //                     x = 0
    //                   }
    //                 }
    //               })(),
    //               1000 / 40
    //             )
    //           }
    //         },
    //         false
    //       )
    //     }
    //   },
    //   false
    // )
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.section1 {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 12;

  .bg-ground {
    width: 100%;
    height: 300px;

    .myCanvas {
      width: 100%;
    }
  }
}
</style>
