<template>
  <Header></Header>
<div id="questionnaire" class="relative grid grid-cols-4 h-full">
  <div class="relative flex flex-col items-center inset-y-1/2" >
    <p class="font-montserrat text-center my-4 hover:font-bold" v-for="(group, index) in groups" :key="index">{{group.name}}</p>
  </div>
  <div  class="absolute h-96 border border-solid left-1/4 border-black rounded mt-36"></div>
  <div  class="absolute h-96 border border-solid left-3/4 border-black rounded mt-36"></div>
  <div class="relative flex flex-col items-center col-start-2 col-end-4 mt-12">
    <h1 class="font-montserrat text-4xl font-light">{{groups[0].name}}</h1>
    <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[0].description}}</h2>

    <input type="checkbox" id="descriptive processing" value="descriptive processing" v-model="checkedNames" class="accent-cyan-800">
    <label for="descriptive processing">descriptive processing</label>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  <div ></div>
</div>
  <FooterPage class="absolute self-start bottom-0 pl-2 scrollbar-hide"></FooterPage>
</template>

<script>

import Header from "@/components/Header";
import FooterPage from "@/components/Footer";
export default {
  name: "QuestionnairePage",
  components: {FooterPage, Header},
  data() {
    return {
      checkedNames:[],
        groups:[
          {
            name: "Analytical processing",
            description: "¿Will the data be processed?",
            active: false
          },
          {
            name: "Cookies & cache",
            description: "¿Will you use Cookies or caching techniques?",
            active: false
          },
          {
            name: "Data collection",
            description: "¿Will the data be gathered?",
            active: false
          },
          {
            name: "Data transfer",
            description: "¿Will data be transferred?",
            active: false
          },
          {
            name: "Data storage",
            description: "¿How will the data be stored?",
            active: false
          },
          {
            name: "Data processing",
            description: "¿How much time will the data be processed?",
            active: false
          },

        ]
    }
  },
}
</script>

<style scoped>

</style>