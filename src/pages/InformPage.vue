<template>
  <section id="questionnaire_explanation" class="self-center flex flex-col mx-20 pt-28">
    <h2 class="font-montserrat text-2xl self-center pb-6 text-center">{{ $t('informPage1') }}</h2>
    <div class="flex flex-col text-justify justify-center pt-20">
      <h1 class="font-montserrat text-2xl self-center pb-10">{{ $t('informPage2') }}</h1>
      <p class="font-roboto text-xl text-center pb-24">{{ $t('informPage3') }}</p>
      <router-link to="/questionnaire">
      <button type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light" class="shadow-md bg-white rounded-3xl w-full font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">QUESTIONNAIRE</button>
      </router-link>
    </div>
  </section>
  <FooterPage class="relative self-start -bottom-44 pl-2 left-0 xl:-bottom-56"></FooterPage>

</template>

<script>
import FooterPage from "@/components/Footer";
export default {
  name: "InformPage",
  components:{
    FooterPage
  }
}
</script>

<style scoped>

</style>