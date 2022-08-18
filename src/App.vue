<!--VEURE PERQUE ROUTER NO FUNCIONA
LA CLASS DE FOOTER PAGE S'HA DE CANVIAR A CADA PÀGINA DEPENENT DE LES NECESSITATS
class="absolute -bottom-80 pb-4 pl-2" CLASS DE FOOTER A MAINPAGE-->
<template>
  <div class="h-auto flex flex-col">
    <Header></Header>
    <!-- <MainPage class="my-24 h-screen"></MainPage> -->
    <LearningIcons></LearningIcons>
    <FooterPage class="relative self-start -bottom-40 pb-4 pl-2"></FooterPage>
  </div>
</template>


<script>
import Header from "@/components/Header";
import FooterPage from "@/components/Footer";
import LearningIcons from "@/pages/learning-icons";

export default {
  name: 'App',
  data(){
    return{
      pseudoanonimizados: {
        display: ""
      },
      datos_no_personales: {
        display: ""
      },
      transfer_externa: {
        display: ""
      },
      tratamiento_datos: {
        display: ""
      },
      datos_personales: {
        display: ""
      },
      transfer_interna: {
        display: ""
      },
      encriptados: {
        display: ""
      },
      no_anonimizados: {
        display: ""
      },
      metadata: {
        display: ""
      },
      almacenamiento: {
        display: ""
      },
      cache: {
        display: ""
      },
      anonimizados: {
        display: ""
      },
      prescriptivo: {
        display: ""
      },
      predictivo: {
        display: ""
      },
      diagnostico: {
        display: ""
      },
      descriptivo: {
        display: ""
      },
      cookies: {
        display: ""
      }
    }
  },
  components: {
    LearningIcons,
    FooterPage,
    Header
  },
  methods: {
    changeImg: function () {
      console.log("POJFPEADOJ")

        this.pseudoanonimizados.display = "none";


    }
  }
}
</script>

<style>
</style>
