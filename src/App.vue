<!--
LA CLASS DE FOOTER PAGE S'HA DE CANVIAR A CADA PÀGINA DEPENENT DE LES NECESSITATS
class="absolute -bottom-80 pb-4 pl-2" CLASS DE FOOTER A MAINPAGE
class="relative self-start -bottom-36 pl-2 scrollbar-hide" CLASS DE FOOTER A LEARNING ICONS
class="absolute self-start bottom-0 pl-2 scrollbar-hide" CLASS DE FOOTER A INFORM PAGE i FEEDBACK-->

<template>
  <div class="h-auto w-auto flex flex-col mt-5 overflow-x-hidden">
    <Header></Header>
    <router-view></router-view>
    <FooterPage class="absolute -bottom-60 pb-4 pl-2"></FooterPage>
  </div>
</template>


<script>
import Header from "@/components/Header";
import FooterPage from "@/components/Footer";
export default {
  name: 'App',
  components: {
    FooterPage,
    Header

  }
}
</script>

<style>
</style>
