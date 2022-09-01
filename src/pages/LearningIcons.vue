<template>
  <section id="explicacio" class ="flex flex-col pt-20">
    <h2 class="font-montserrat text-4xl self-center pb-6 text-center">{{ $t('LearningIcons1') }}</h2>
    <div class="text-justify">
      <p class="px-10 lg:px-20 xl:px-60 font-roboto self-center">{{ $t('LearningIcons2') }}</p>
    </div>
  </section>
  <section id="FAQS" class ="self-center flex flex-col w-2/3 pt-10">
    <h2 class="font-montserrat text-4xl self-center pb-6 mb-9">FAQ'S</h2>
    <FAQS></FAQS>
  </section>
  <FooterPage class="relative self-start -bottom-36 pl-2 scrollbar-hide"></FooterPage>
</template>

<script>

import FAQS from "@/components/FAQS";
import FooterPage from "@/components/Footer";

export default {
  name: "LearningIcons",
  components:{
    FAQS,
    FooterPage
  },
  mounted() {
  },
  beforeUnmount () {
  }
}

</script>

<style scoped>

</style>