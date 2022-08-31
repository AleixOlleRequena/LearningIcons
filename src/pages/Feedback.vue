<template>
  <div id="feedbackPage" class="flex flex-col pt-10 mx-5 z-5">
    <h2 class="font-montserrat text-4xl self-center pb-8">{{ $t('Feedback1') }}</h2>
    <div id="feedbackSection" class=" grid grid-cols-2 ">
      <section id="opinion" class="flex flex-col">
         <p class="font-roboto text-xl text-center pb-16">{{ $t('Feedback2') }}</p>
        <!--DropDown menu-->
        <button @click="isShowOpinion = !isShowOpinion" class=" flex flex-row items-center justify-between mb-4 mx-28 shadow-md bg-white rounded-xl font-montserrat h-8  hover:bg-slate-50 active:bg-slate-200">
          {{opinion_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowOpinion" id="dropdown" class=" z-20 select-none -mt-2 bg-white mx-28 rounded divide-y divide-gray-100 max-h-96 overflow-auto" >
          <div id="list" v-for="(icon, index) in icons" :key="index" class="relative z-40">
            <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShowOpinion = !isShowOpinion" v-on:click="changeOpinionIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <!--image and opinion-->
        <div v-if="path"  class="absolute z-0 flex flex-col w-96 self-center mt-12 top-80">
          <img :src="path" class=" h-52 self-center mb-3">
          <div class="-mx-28 bg-white resize-none mt-3 h-32 rounded-3xl shadow-inner font-roboto flex flex-col items-center ">
            <textarea v-model="message" type="text" id="message" name="message" class="z-1 resize-none relative w-11/12 h-full font-roboto focus:outline-0" ></textarea>
          </div>
          <button v-show="message" @click="sendOpinion" class="-mx-28 mt-16 shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">{{ $t('FeedbackButton1') }}</button>
        </div>
      </section>

      <div id="line" class="absolute h-1/2 border border-solid left-1/2 border-black rounded"></div>

      <section id="design" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-16 mx-5">{{ $t('Feedback3') }}</p>

        <!--DropDown menu-->
        <button @click="isShowDesign = !isShowDesign" class=" flex flex-row items-center justify-between mb-4 mx-28 shadow-md bg-white rounded-xl font-montserrat h-8  hover:bg-slate-50 active:bg-slate-200">
          {{design_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowDesign" id="dropdown2" class=" relative z-50 select-none -mt-2 bg-white mx-28 rounded divide-y divide-gray-100 max-h-96 overflow-auto" >
          <div  id="list2" v-for="(icon, index) in icons" :key="index" >
            <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 z-50" @click="isShowDesign = !isShowDesign" v-on:click="changeDesignIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <DragDropArea v-bind:design_icon="design_icon" @removeIcon="removeIcon"></DragDropArea>
      </section>
    </div>
  </div>
  <!-- POPUP THAT APPEARS WHEN USERS SEND OPINION OR DESIGN-->
  <ThanksPopUp v-bind:popUp="popUp" v-if="showPopUp" @thanksPopUp= "alternate_thanks_pop_up" class="font-montserrat text-xl text-center"></ThanksPopUp>
  <FooterPage class="absolute self-start bottom-0 pl-2 scrollbar-hide"></FooterPage>
</template>


<script>
import DragDropArea from "@/components/DragDropArea";
import firebase from "firebase/compat/app";
import {mdiChevronDown} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import ThanksPopUp from "@/components/ThanksPopUp";
import FooterPage from "@/components/Footer";

export default {
  name: "FeedbackPage",
  components:{
    ThanksPopUp,
    DragDropArea,
    SvgIcon,
    FooterPage
  },
  data() {
    return {
      path :'',
      message: '',
      popUp:'',
      showPopUp:false,
      chevron: mdiChevronDown,
      isShowOpinion: false,
      isShowDesign: false,
    }
  },
  computed:{
    icons(){
      return [
        {
          name: this.$t('Descriptive'),
          path:"analisis_descriptivo"
        },
        {
          name: this.$t('Diagnostic'),
          path:"analisis_diagnostico"
        },{
      name: this.$t('Predictive'),
          path:"analisis_predictivo"
    },{
      name: this.$t('Prescriptive'),
          path:"analisis_prescriptivo"
    },{
      name: this.$t('Cookies'),
          path:"cookies"
    },{
      name: this.$t('Cache') ,
          path:"cache"
    },{
      name: this.$t('Personal'),
          path:"recoleccion_datos_personales"
    },{
      name: this.$t('General'),
          path:"recoleccion_datos_no_personales"
    },{
      name: this.$t('Metadata'),
          path:"metadata"
    },{
      name: this.$t('TransferExtern'),
          path:"transfer_extern"
    },{
      name: this.$t('TransferIntern'),
          path:"transfer_internal"
    },{
      name: this.$t('NotAnonymized'),
          path:"no_anonymized"
    },{
      name: this.$t('Anonymized'),
          path:"anonymized"
    },{
      name: this.$t('Stored'),
          path:"stored_x_time"
    },{
      name: this.$t('Pseudoanonymized'),
          path:"pseudoanonymized"
    },{
      name: this.$t('Encrypted'),
          path:"encrypted"
    },{
      name: this.$t('Processed'),
          path:"processed_x_time"
    },
]
    },
    opinion_icon(){
      return this.$t('FeedbackOpinion')
    },
    design_icon(){
      return    this.$t('FeedbackDesign')
          }
  },
  methods: {
    alternate_thanks_pop_up: function () {
      this.showPopUp = !this.showPopUp;
    },
    changeOpinionIcon(icon){
      this.opinion_icon = icon.name;
      this.path = "/assets/icons/" + icon.path + ".svg";
    },
    changeDesignIcon(icon){
      this.design_icon = icon.name;
    },
    sendOpinion() {
      let text=this.$t('FeedbackQuestion')
      if(confirm(text) === true){
        const post = {
          icon: this.opinion_icon,
          message: this.message,
          date: new Date().toString()
        };
        console.log(post.date)
        firebase.database().ref('Opinions').push(post)
            .then((response) => {
              console.log(response)
            })
            .catch(err => {
              console.log(err)
            })
        // Reset form field
        this.message = ''
        this.opinion_icon= this.$t('FeedbackOpinion')
        this.path= ''
        // Prepare and show pop up thanking the user
        this.popUp= this.$t('FeedbackOpinionThank')
        this.showPopUp = true
      }
    },
    removeIcon(){
      this.design_icon = this.$t('FeedbackDesign')
      this.popUp= this.$t('FeedbackDesignThank')
      this.showPopUp = true
    }
  }
}
</script>

<style scoped>

</style>