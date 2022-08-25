<template>
  <Header></Header>
<div id="questionnaire" class="relative grid grid-cols-4 h-full">
  <!-- LEFT MENU-->
  <div class="relative flex flex-col items-center inset-y-1/2" >
    <p class="font-montserrat text-center my-4 hover:font-bold" v-for="(group, index) in groups" :key="index" v-on:click="showGroup(group)">{{group.name}}</p>
  </div>
  <!-- SEPARATING LINES-->
  <div  class="absolute h-96 border border-solid left-1/4 border-black rounded mt-36"></div>
  <div  class="absolute h-96 border border-solid left-3/4 border-black rounded mt-36"></div>

  <!-- CENTRAL PART ANALYTICAL PROCESSING-->
    <div id="questionnaire_analytical" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[0].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[0].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[0].description}}</h2>

      <!-- QUESTIONNAIRE PART-->
        <div class="relative w-full h-full grid grid-rows-2 mt-28" >
          <div class="flex flex-row justify-around">
            <div>
              <input type="checkbox" id="descriptive processing" value="descriptive processing" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
              <label for="descriptive processing" class="mx-2 font-roboto">descriptive processing</label>
            </div>
            <div>
              <input type="checkbox" id="diagnostic processing" value="diagnostic processing" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
              <label for="diagnostic processing" class="mx-2 font-roboto">diagnostic processing</label>
            </div>
          </div>
          <div class="flex flex-row justify-around mt-12">
            <div>
              <input type="checkbox" id="predictive processing" value="predictive processing" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
              <label for="predictive processing" class="mx-2 font-roboto">predictive processing</label>
            </div>
            <div>
              <input type="checkbox" id="prescriptive processing" value="prescriptive processing" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
              <label for="prescriptive processing" class="mx-2 font-roboto">prescriptive processing</label>
            </div>
          </div>
        </div>
    </div>

    <!-- CENTRAL PART COOKIES & CACHE-->
    <div id="questionnaire_cookies" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[1].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[1].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[1].description}}</h2>
      <!-- QUESTIONNAIRE PART-->
      <div  class="relative w-full h-full grid grid-rows-2 mt-44" >
        <div class="flex flex-row justify-around">
          <div>
            <input type="checkbox" id="cookies" value="cookies" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="cookies" class="mx-2 font-roboto">cookies</label>
          </div>
          <div>
            <input type="checkbox" id="local_cache" value="local cache" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="local_cache" class="mx-2 font-roboto">local cache</label>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTRAL PART DATA COLLECTION-->
    <div id="questionnaire_data_gathering"  class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[2].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[2].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[2].description}}</h2>
      <!-- QUESTIONNAIRE PART-->
      <div class="relative w-full h-full grid grid-rows-2 mt-28" >
        <div class="flex flex-row justify-around">
          <div>
            <input type="checkbox" id="personal_data" value="personal_data" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="personal_data" class="mx-2 font-roboto">personal data gathering</label>
          </div>
          <div>
            <input type="checkbox" id="general_data" value="general_data" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="general_data" class="mx-2 font-roboto">general data</label>
          </div>
        </div>
      </div>
      <div class="relative w-full h-full flex mt-24 justify-center" >
        <div class="flex flex-row">
          <div>
            <input type="checkbox" id="metadata" value="metadata" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="metadata" class="mx-2 font-roboto">metadata gathering</label>
          </div>

        </div>
      </div>
    </div>

    <!-- CENTRAL PART DATA TRANSFER-->
    <div id="questionnaire_data_transfer" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[3].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[3].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[3].description}}</h2>
      <!-- QUESTIONNAIRE PART-->
      <div  class="relative w-full h-full grid grid-rows-2 mt-44" >
        <div class="flex flex-row justify-around">
          <div>
            <input type="checkbox" id="third_party" value="third party" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="third_party" class="mx-2 font-roboto">third-party data transfer </label>
          </div>
          <div>
            <input type="checkbox" id="intern" value="intern transfer" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="intern" class="mx-2 font-roboto">intern data transfer</label>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTRAL PART DATA STORAGE-->
    <div id="questionnaire_data_storage" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[4].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[4].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[4].description}}</h2>
      <!-- QUESTIONNAIRE PART-->
      <div  class="relative w-full h-full grid grid-rows-3 mt-44" >
        <div class="flex flex-row justify-around">
          <div>
            <input type="checkbox" id="no_anonymized" value="no anonymized" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="no_anonymized" class="mx-2 font-roboto">no anonymized data </label>
          </div>
          <div>
            <input type="checkbox" id="anonymized" value="anonymized" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="anonymized" class="mx-2 font-roboto">anonymized data </label>
          </div>
        </div>
        <div class="flex flex-row justify-around my-8">
          <div>
            <input type="checkbox" id="stored_time" value="stored time" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="stored_time" class="mx-2 font-roboto">Data stored during </label>
          </div>
          <select id="amounts"  v-model="times_selected.storage_time" class=" w-96 bg-gray-100 rounded border-gray-300">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select id="periods" v-model="times_selected.storage_period" class="bg-gray-100 rounded border-gray-300">
            <option value="Seconds">Seconds</option>
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
            <option value="Days">Days</option>
            <option value="Years">Years</option>
          </select>
        </div>
        <div class="flex flex-row justify-around">
          <div>
            <input type="checkbox" id="pseudoanonymized" value="pseudoanonymized" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="pseudoanonymized" class="mx-2 font-roboto">pseudoanonymized data </label>
          </div>
          <div>
            <input type="checkbox" id="encrypted" value="encrypted" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="encrypted" class="mx-2 font-roboto">encrypted data </label>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTRAL PART DATA TRANSFER-->
    <div id="questionnaire_data_processing" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="groups[5].active">
      <!-- GROUP NAME AND EXPLANATION-->
      <h1 class="font-montserrat text-4xl font-light">{{groups[5].name}}</h1>
      <h2 class="font-montserrat text-2xl font-light mt-4">{{groups[5].description}}</h2>
      <!-- QUESTIONNAIRE PART-->
      <div  class="relative w-full h-full flex flex-col mt-44" >
        <div class="flex flex-row justify-around my-8">
          <div>
            <input type="checkbox" id="processed_time" value="processed time" v-model="checkedNames" class="w-4 h-4 bg-gray-100 rounded border-gray-300">
            <label for="processed_time" class="mx-2 font-roboto">Data processed during </label>
          </div>
          <select id="amounts1"  v-model="times_selected.processing_time" class=" w-96 bg-gray-100 rounded border-gray-300">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select id="periods1" v-model="times_selected.processing_period" class="bg-gray-100 rounded border-gray-300">
            <option value="Seconds">Seconds</option>
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
            <option value="Days">Days</option>
            <option value="Years">Years</option>
          </select>

        </div>
      </div>
    </div>

  <p>{{checkedNames}}, {{times_selected}}</p>
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
      checkedNames: [],
      times_selected: {
      storage_time: '',
      storage_period:'',
      processing_time: '',
      processing_period:''
    },
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
            active: true
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
          }
        ]
    }
  },
  methods:{
    showGroup(group){
      const found = this.groups.findIndex(e => e.name === group.name);
      console.log(found)
      for (let i = 0; i < this.groups.length; i++) {

        if(i === found){
          this.groups[i].active = true;
        }else{
          this.groups[i].active = false;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>