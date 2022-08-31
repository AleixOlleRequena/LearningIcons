<template>
  <div id="mainPage" class="lg:relative h-screen grid grid-rows-3 md:flex flex-col">
    <div id="links" class="relative h-max flex flex-col justify-items-end mt-4">
      <router-link :to="route">
        <img :src="path" class="w-screen">
        <h1 class="font-montserrat text-6xl px-6">{{ name }}</h1>
      </router-link>
    </div>
    <div id="explicacio" class =" md:relative relative flex flex-col lg:pt-44">
      <h2 class="font-montserrat text-4xl self-center pb-6 md:mt-16 lg:-mt-16 ">{{ $t('Main1') }}</h2>
      <div class="text-center">
        <p class="font-roboto self-center lg:px-60 md:px-16 ">{{ $t('Main2') }} </p>
      </div>
    </div>
    <div id="collaborators" class="relative w-screen justify-center md:flex flex-col lg:grid grid-rows-2">
      <h2 class="font-montserrat text-4xl justify-self-center  md:self-center mt-10  ">{{ $t('Main3') }}</h2>
      <div id="collaboratorsImages" class="flex justify-center lg:grid grid-cols-3 place-items-center  md:flex-col mt-20 ">
        <img src="/assets/lasalle.png" @click="openInNewTab('https://www.salleurl.edu')" class="md:scale-150 lg:scale-100 cursor-pointer">
        <img src="/assets/upc.png" @click="openInNewTab('https://www.upc.edu/')" class="scale-50 cursor-pointer">
        <img src="/assets/usal.png" @click="openInNewTab('https://www.usal.es/')" class="scale-50 cursor-pointer">
      </div>
    </div>
  </div>
  <FooterPage class="absolute -bottom-80 pb-4 pl-2"></FooterPage>

</template>

<script>
import FooterPage from "@/components/Footer";
export default {
  name: "MainPage",
  data() {
    return {
      path : "/assets/IconsImage.svg",
      name : "LEARNING ICONS",
      route:"/learningIcons",
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
          this.path = "/assets/imatge.svg"
          this.name = "GIVE YOUR OPINION"
          this.route = "/feedback"
        }else{
          this.path = "/assets/IconsImage.svg"
          this.name = "LEARNING ICONS"
          this.route = "/learningIcons"
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