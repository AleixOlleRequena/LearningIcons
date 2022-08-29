<template>
  <section id="questionnaire_explanation" class="self-center flex flex-col w-1/3 pt-28">
    <h2 class="font-montserrat text-2xl self-center pb-6 text-center">We offer a tool to help you decide which is the best license for your website</h2>
    <div class="flex flex-col text-justify justify-center pt-20">
      <h1 class="font-montserrat text-2xl self-center pb-10">Choose your license:</h1>
      <p class="font-roboto text-xl text-center pb-24">Answering this questionnaire, you will be able to decide which license best fits your necessities.</p>
      <router-link to="/questionnaire">
      <button type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light" class="shadow-md bg-white rounded-3xl w-full font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">QUESTIONNAIRE</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "InformPage"
}
</script>

<style scoped>

</style>