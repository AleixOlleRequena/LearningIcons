<template>
  <div id="mainPage" class="lg:relative h-screen grid grid-rows-3 md:flex flex-col">
    <div id="links" class="relative h-max flex flex-col justify-items-end mt-4">
      <router-link :to="route">
        <img :src="path" class="w-screen">
        <h1 class="font-montserrat text-xl md:text-6xl px-6">{{ name }}</h1>
      </router-link>
    </div>

    <div id="explicacio" class ="-mt-24 md:mt-24 md:relative flex flex-col lg:pt-44 lg:mt-24">
      <h2 class="font-montserrat text-2xl md:text-4xl self-center pb-6 md:mt-16 lg:-mt-16 ">{{ $t('Main1') }}</h2>
      <div class="text-center">
        <p class="font-roboto self-center px-4 lg:px-24 md:px-16 xl:px-60 ">{{ $t('Main2') }} </p>
      </div>
    </div>

    <div id="collaborators" class="relative w-screen justify-center mt-56 sm:mt-24 md:flex flex-col lg:-mt-4 lg:grid grid-rows-2">
      <h2 class="font-montserrat text-center text-2xl md:self-center md:mt-10 md:text-4xl justify-self-center">{{ $t('Main3') }}</h2>
      <div id="collaboratorsImages" class="flex flex-col justify-center  lg:grid grid-cols-3 lg:place-items-center  md:flex-col md:mt-20 lg:mt-10 ">
        <img src="assets/lasalle.png" @click="openInNewTab('https://www.salleurl.edu')" class="scale-50 lg:scale-100 lg:place-self-center cursor-pointer">
        <img src="assets/upc.png" @click="openInNewTab('https://www.upc.edu/')" class="scale-50 cursor-pointer">
        <img src="assets/usal.png" @click="openInNewTab('https://www.usal.es/')" class="scale-50 cursor-pointer">
      </div>
    </div>
    <FooterPage class=" relative -bottom-96 lg:self-start lg:mr-96 lg:pb-4 lg:pl-2 lg:bottom-0"></FooterPage>
  </div>

</template>

<script>
import FooterPage from "@/components/Footer";
export default {
  name: "MainPage",
  data() {
    return {
      path : "assets/IconsImage.svg",
      name : "LEARNING ICONS",
      route:"/learningIcon",
      timer : null
    }
  },
  components:{
    FooterPage
  },
  methods: {
    changeImg(){
      this.timer = setInterval(() => {
        if(this.name === "LEARNING ICONS"){
          this.path = "assets/imatge.svg"
          this.name = "GIVE YOUR OPINION"
          this.route = "/feedback"
        }else{
          this.path = "assets/IconsImage.svg"
          this.name = "LEARNING ICONS"
          this.route = "/learningIcon"
        }
      }, 5000)
    },
    openInNewTab(url) {
      window.open(url);
    }
  },
  mounted() {
    this.changeImg();
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>