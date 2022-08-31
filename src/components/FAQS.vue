<template>
  <AppAccordion v-for="(faq, index) in faqs" :key="index" class="pb-5 font-montserrat">
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