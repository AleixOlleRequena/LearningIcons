<template>

  <AppAccordion v-for="(faq, index) in faqs" :key="index" class="pb-5 ">
    <template v-slot:title>
      <span class="font-normal text-xl md:text-2xl text-center font-montserrat">{{faq.title}}</span>
    </template>
    <template v-slot:content>
      <p class="pt-5 font-roboto">
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
  computed:{
    faqs(){
      return[
        {
          title:  this.$t('FAQSQuestion1'),
          value:  this.$t('FAQSAnswer1')
        },
        {
          title: this.$t('FAQSQuestion2'),
          value: this.$t('FAQSAnswer2')
        },
        {
          title: this.$t('FAQSQuestion3'),
          value: this.$t('FAQSAnswer3')
        },
        {
          title: this.$t('FAQSQuestion4'),
          value: this.$t('FAQSAnswer4')
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>