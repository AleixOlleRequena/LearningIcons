<!--VEURE PERQUE ROUTER NO FUNCIONA
LA CLASS DE FOOTER PAGE S'HA DE CANVIAR A CADA PÀGINA DEPENENT DE LES NECESSITATS
class="absolute -bottom-80 pb-4 pl-2" CLASS DE FOOTER A MAINPAGE
class="relative self-start -bottom-36 pl-2 scrollbar-hide" CLASS DE FOOTER A LEARNING ICONS
class="absolute self-start bottom-0 pl-2 scrollbar-hide" CLASS DE FOOTER A INFORM PAGE-->

<template>
  <div class="h-auto w-auto flex flex-col mt-5">
    <Header></Header>
    <!-- <MainPage class="my-24 h-screen"></MainPage> -->
    <!-- <LearningIcons></LearningIcons> -->
    <InformPage></InformPage>
    <FooterPage class="absolute self-start bottom-0 pl-2 scrollbar-hide"></FooterPage>
  </div>
</template>


<script>
import Header from "@/components/Header";
import FooterPage from "@/components/Footer";
import InformPage from "@/pages/InformPage";

export default {
  name: 'App',
  components: {
    InformPage,
    FooterPage,
    Header
  }
}
</script>

<style>
</style>
