<template>
  <div class="section6">
    <v-container>
      <v-expansion-panels class="mt-10">
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-for="(item, index) in panels" :key="index">
            <v-expansion-panel class="mb-3 mx-3" style="max-width: 450px;">
              <v-expansion-panel-header class="text-title" style="font-weight: 600;">
                {{ item.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.answer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
        </v-row>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      panels: [
        {
          question: 'How can fleet management software help me stay compliant?',
          answer: `Significantly, take advantage of our timely alerts and reminders to ensure your business adheres to all regulations. Moreover, Emphasizing compliance is crucial for ensuring the safety and effectiveness of your fleet management. Furthermore, with our DVIR solutions, pre and post trip inspections become simpler for both you and your drivers. Additionally, Our paperless solutions are specifically designed to expedite inspections and help you address issues promptly.`
        },
        {
          question:
            'Can I integrate another software onto your fleet management platform?',
          answer: `Surely, you can incorporate third-party software seamlessly into our system. Thanks to our user-friendly API designed for easy integration while make your experience better. Undoubtedly use our platform.`
        },
        {
          question:
            'Which GPS devices are compatible with your fleet management solution?',
          answer: `Surely, our fleet management software is designed to work with a wide range of hardware. Moreover, we’ve successfully integrated over 1200 different hardware devices. Additionally, you can explore the list of compatible devices right here. If, however, you happen to not see your specific hardware device listed, don’t worry; simply get in touch with us. we will surely help you find a solution for integration using our protocol document.`
        },
        {
          question:
            'How can your fleet management help me with fleet maintenance?',
          answer: `Surely, regular vehicle maintenance is crucial, yet it can be quite challenging. Trakzee simplifies the entire fleet maintenance process, handling tasks such as tracking service dates and repair costs.
          Moreover, We assist you in creating a maintenance plan for your fleet, guaranteeing that you never overlook a needed repair.`
        },
        {
          question: 'What makes your software stand out?',
          answer: `Surely, Our software combines cutting-edge technology with user-friendly interfaces, ensuring a seamless experience.
          Moreover, it records and reports data trends that impact your fleet business, allowing you to make informed decisions.
          Surely! Our software is designed to be flexible. It significantly allows customization to suit your unique requirements.`
        },
        {
          question: 'How secure is your fleet management software?',
          answer: `Surely, Security is our top priority. Moreover, we employ advanced encryption and security measures to safeguard your data. Undoubtedly use our software for all your business needs.`
        },
        {
          question:
            'What is route optimization, and how does it benefit fleets?',
          answer: `Basically, route optimization is the process of finding the most efficient routes for vehicles to minimize fuel consumption, reduce travel time, and improve overall productivity. Additionally, fleet management software with route optimization capabilities can help lower operating costs and improve customer service.`
        },
        {
          question: 'Is your fleet management reduce my insurance premiums?',
          answer: `Surely, Fleet insurance providers provide reduced premiums to fleets that have a clean accident record.
          Additionally, you can qualify for discounted insurance rates when you integrate driver monitoring systems. Features such as dashcams and driver scorecards assist in identifying high-risk drivers.
          Moreover, you can offer real-time coaching to ensure that drivers avoid reckless behavior. By proactively preventing aggressive driving, you can significantly enjoy savings on your insurance premiums.`
        },
        {
          question: 'How can fleet management improve the safety of drivers?',
          answer: `Basically, Telematics can bring about notable safety enhancements for businesses in various industries. Thereby, it assists in identifying driver fatigue and unsafe driving, as well as addressing vehicle maintenance concerns. Moreover, by addressing these factors. It improves both driver and also vehicle safety`
        },
        {
          question: 'Can your fleet management support the size of my fleet?',
          answer: `Surely, our platform is versatile, and capable of accommodating anywhere from 10 to 1000 vehicles. Furthermore, you can tailor it to match your business’s size and nature effortlessly. Furthermore, it offers simple scalability options. This certainly allows you to adapt as your business requirements evolve. Undoubtedly use our software.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section6 {
  position: relative;
  z-index: 100;
  margin-top: 70;
}
</style>
