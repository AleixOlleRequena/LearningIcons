<template>
  <section id="explicacio" class ="flex flex-col pt-20">
    <h2 class="font-montserrat text-4xl self-center pb-6">WHAT IS LEARNING ICONS</h2>
    <div class="text-justify">
      <p class="px-60 font-roboto self-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in lorem nec euismod. Nunc porttitor porta imperdiet. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. </p>
    </div>
  </section>
  <section id="FAQS" class ="self-center flex flex-col w-3/4 pt-10">
    <h2 class="font-montserrat text-4xl self-center pb-6 mb-9">FAQ'S</h2>
    <FAQS></FAQS>
  </section>
</template>

<script>

import FAQS from "@/components/FAQS";

export default {
  name: "LearningIcons",
  components:{
    FAQS
  },
  mounted() {
    console.log("HOPLA QUE TAL")
  },
  beforeUnmount () {
    console.log("HOPLA QUE TAL")
  }
}

</script>

<style scoped>

</style>