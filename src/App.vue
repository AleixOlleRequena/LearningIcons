//VEURE PERQUE ROUTER NO FUNCIONA
<template>
  <div class="h-auto flex flex-col">
    <Header></Header>
    <MainPage class="my-24 h-screen"></MainPage>
    <FooterPage></FooterPage>
    <!-- <button @click="changeImg" class="ba">Toggle Background Colour</button> -->
  </div>
</template>


<script>
import Header from "@/components/Header";
import MainPage from "@/pages/main";
import FooterPage from "@/components/Footer";

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
    FooterPage,
    MainPage,
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
