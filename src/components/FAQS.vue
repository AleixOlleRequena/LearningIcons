<template>
  <AppAccordion v-for="(faq, index) in faqs" :key="index" class="self-center pb-5 font-montserrat">
    <template v-slot:title>
      <span class="font-normal text-2xl text-center">{{faq.title}}</span>
    </template>
    <template v-slot:content>
      <p class="pt-5 text-xl">
        {{faq.value}}
      </p>
    </template>
  </AppAccordion>
</template>

<script>
import AppAccordion from "@/components/AppAccordion";
export default {
  name: "FAQS",
  components:{
    AppAccordion

  },
  data () {
    return {
      faqs: [
        {
          title: '¿What is Learning Icons for?',
          value: 'Given a 24-hour day and 360 degrees of longitude around the Earth Given a 24-hour day and 360 degrees of longitude around the Earth Given a 24-hour day and 360 degrees of longitude around the Earth'
        },
        {
          title: 'How long is a day and year on Venus?',
          value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.'
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>