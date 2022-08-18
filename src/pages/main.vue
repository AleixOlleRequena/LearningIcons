<template>
  <div v-on:click="changeImg" id="mainPage" class="absolute grid grid-rows-3">
    <section id="links" class="grid grid-rows-2">
      <img :src="path" class="object-fill w-full h-full">
      <h1 class="self-end font-montserrat text-6xl px-6">{{ name }}</h1>
    </section>
    <section id="explicacio" class ="flex flex-col pt-20">
      <h2 class="font-montserrat text-4xl self-center pb-6">WHAT IS LEARNING ICONS</h2>
      <div class="text-center">
        <p class="px-60 font-roboto self-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in lorem nec euismod. Nunc porttitor porta imperdiet. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. </p>
      </div>
    </section>
    <section id="collaborators" class="w-screen grid grid-rows-2 justify-center">
      <h2 class="font-montserrat text-4xl justify-self-center self-end">COLLABORATORS</h2>
      <div id="collaboratorsImages" class="flex flex-row justify-center">
        <img src="/assets/lasalle.png" @click="openInNewTab('https://www.salleurl.edu')" class="scale-50 cursor-pointer">
        <img src="/assets/upc.png" @click="openInNewTab('https://www.upc.edu/')" class="scale-50 cursor-pointer">
        <img src="/assets/usal.png" @click="openInNewTab('https://www.usal.es/')" class="scale-50 cursor-pointer">
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      path : "/assets/IconsImage.svg",
      name : "LEARNING ICONS",
      timer : null
    }
  },
      /* images: [
         {
           path: "/assets/IconsImage.svg",
           name: "LEARNING ICONS",
           route: "/learning_icons"
         },
         {
           path: "/assets/imatge.svg",
           name: "GIVE YOUR OPINION",
           route: "/feedback"
         }
       ]
     }
   },*/
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
          this.route = "/learning_icons"
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