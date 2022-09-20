<template>
  <div id="feedbackPage" class="flex flex-col pt-10 mx-5 z-5">
    <h2 class="font-montserrat text-2xl sm:text-4xl text-center self-center pb-8">{{ $t('Feedback1') }}</h2>
    <div id="feedbackSection" class=" sm:grid sm:grid-cols-2 sm:grid-rows-1 ">
      <!-- PAGES FOR PC USERS-->
      <!-- OPINION SECTION-->
      <section id="opinion" class=" hidden sm:flex row-start-2 row-end-2 flex flex-col sm:mt-0 sm:row-start-1">
         <p class="font-roboto text-xl text-center md:mx-2 md:pb-16 lg:pb-9 xl:pb-12">{{ $t('Feedback2') }}</p>
        <!--DropDown menu opinion-->
        <button @click="isShowOpinion = !isShowOpinion" class=" md:text-sm lg:text-base flex flex-row items-center justify-between shadow-md bg-white rounded-xl font-montserrat h-8 lg:mx-24 mt-8 md:-mt-2 w-4/5 self-center hover:bg-slate-50 active:bg-slate-200">
          {{opinion_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowOpinion" id="dropdown" class=" z-20 select-none bg-white rounded divide-y divide-gray-100 max-h-96 overflow-auto lg:mx-24 mt-2 md:-mt-2 w-4/5 self-center" >
          <div id="list" v-for="(icon, index) in icons" :key="index" class="relative z-40">
            <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShowOpinion = !isShowOpinion" v-on:click="changeOpinionIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <!--image and opinion-->
        <div v-if="path"  class="mt-36 absolute z-0 flex flex-col w-96 self-center sm:mt-12 sm:top-80">
          <img :src="path" class="h-32 lg:h-36 xl:h-52 self-center mb-3">
          <div class=" md:mx-10 lg:mx-2 xl:-mx-28 bg-white resize-none mt-3 h-32 rounded-3xl shadow-inner font-roboto flex flex-col items-center ">
            <textarea v-model="message" type="text" id="message" name="message" class="z-1 resize-none relative  h-full font-roboto w-10/12 xl:w-11/12 md:w-60 lg:w-80 focus:outline-0" ></textarea>
          </div>
          <button v-show="message" @click="sendOpinion" class="self-center w-36 mt-12 md:w-36 md:mt-4 lg:w-2/3 lg:mt-16 xl:mx-28  shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">{{ $t('FeedbackButton1') }}</button>
        </div>
      </section>
      <!-- SEPARATION LINE-->
      <div id="line" class=" hidden sm:block absolute h-1/2 border border-solid left-1/2 border-black rounded"></div>
      <!-- DESIGN SECTION-->
      <section id="design" class="hidden sm:flex row-start-1 row-end-1 flex flex-col justify-items-center">
        <p class="font-roboto text-xl text-center pb-9 lg:pb-7 mx-5">{{ $t('Feedback3') }}</p>

        <!--DropDown menu design-->
        <button @click="isShowDesign = !isShowDesign" class="w-11/12 flex flex-row items-center justify-between self-center shadow-md bg-white rounded-xl font-montserrat h-8 md:text-sm lg:text-base md:w-4/5  lg:mx-28 hover:bg-slate-50 active:bg-slate-200">
          {{design_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowDesign" id="dropdown2" class="relative z-50 select-none bg-white rounded divide-y divide-gray-100 max-h-96 overflow-auto lg:mx-28 mt-2 md:-mt-2 w-4/5 self-center" >
          <div  id="list2" v-for="(icon, index) in icons" :key="index" >
            <p class="flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 z-50" @click="isShowDesign = !isShowDesign" v-on:click="changeDesignIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <DragDropArea v-bind:design_icon="design_icon" @removeIcon="removeIcon"></DragDropArea>
      </section>

      <!-- PAGES FOR MOBILE USERS-->
      <!-- OPINION SECTION-->
      <section id="opinionMobile" v-if="opinionPage" class="sm:hidden row-start-2 row-end-2 flex flex-col sm:mt-0 sm:row-start-1">
        <p class="font-roboto text-xl text-center md:mx-2 md:pb-16 lg:pb-9 xl:pb-12">{{ $t('Feedback2') }}</p>
        <!--DropDown menu opinion-->
        <button @click="isShowOpinion = !isShowOpinion" class=" text-sm lg:text-base flex flex-row items-center justify-between shadow-md bg-white rounded-xl font-montserrat h-8 lg:mx-24 mt-8 md:-mt-2 w-4/5 self-center hover:bg-slate-50 active:bg-slate-200">
          {{opinion_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowOpinion" id="dropdown3" class=" z-20 select-none bg-white rounded divide-y divide-gray-100 max-h-96 overflow-auto lg:mx-24 mt-2 md:-mt-2 w-4/5 self-center" >
          <div id="list3" v-for="(icon, index) in icons" :key="index" class="relative z-40">
            <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShowOpinion = !isShowOpinion" v-on:click="changeOpinionIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <!--image and opinion-->
        <div v-if="path"  class="mt-36 absolute z-0 flex flex-col w-96 self-center sm:mt-12 sm:top-80">
          <img :src="path" class="h-32 lg:h-36 xl:h-52 self-center mb-3">
          <div class=" md:mx-10 lg:mx-2 xl:-mx-28 bg-white resize-none mt-3 h-32 rounded-3xl shadow-inner font-roboto flex flex-col items-center ">
            <textarea v-model="message" type="text" id="message" name="message" class="z-1 resize-none relative  h-full font-roboto w-10/12 xl:w-11/12 md:w-60 lg:w-80 focus:outline-0" ></textarea>
          </div>
          <button v-show="message" @click="sendOpinion" class="self-center w-36 mt-12 md:w-36 md:mt-4 lg:w-2/3 lg:mt-16 xl:mx-28  shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">{{ $t('FeedbackButton1') }}</button>
        </div>
      </section>
      <!-- DESIGN SECTION-->
      <section id="designMobile" v-if="!opinionPage" class="sm:hidden row-start-1 row-end-1 flex flex-col">
        <p class="font-roboto text-xl text-center pb-9 lg:pb-7 mx-5">{{ $t('Feedback3') }}</p>

        <!--DropDown menu design-->
        <button @click="isShowDesign = !isShowDesign" class="w-11/12 flex flex-row items-center justify-between self-center shadow-md bg-white rounded-xl font-montserrat h-8 md:text-sm lg:text-base md:w-4/5  lg:mx-28 hover:bg-slate-50 active:bg-slate-200">
          {{design_icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShowDesign" id="dropdown4" class="relative z-50 select-none bg-white rounded divide-y divide-gray-100 max-h-96 overflow-auto lg:mx-24 mt-2 md:-mt-2 w-4/5 self-center" >
          <div  id="list4" v-for="(icon, index) in icons" :key="index" >
            <p class="flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 z-50" @click="isShowDesign = !isShowDesign" v-on:click="changeDesignIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <DragDropArea v-bind:design_icon="design_icon" @removeIcon="removeIcon" ></DragDropArea>
      </section>
      <!-- Buttons to chenga between mobile sections-->
      <button  @click="opinionPage = !opinionPage" v-show="opinionPage" class="sm:hidden absolute z-20 -rotate-90 items-center right-2 bottom-10 shadow-md rounded-xl font-montserrat ">
        <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center "></svg-icon>
      </button>
      <button  @click="opinionPage = !opinionPage" v-show="!opinionPage" class="sm:hidden absolute z-20 rotate-90 items-center left-2 bottom-10 shadow-md rounded-xl font-montserrat ">
        <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center "></svg-icon>
      </button>
    </div>
  </div>
  <!-- POPUP THAT APPEARS WHEN USERS SEND OPINION OR DESIGN-->
  <ThanksPopUp v-bind:popUp="popUp" v-if="showPopUp" @thanksPopUp= "alternate_thanks_pop_up" class="font-montserrat text-xl text-center"></ThanksPopUp>
  <FooterPage class="absolute self-start -bottom-96 pl-2 left-0"></FooterPage>
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
      opinion_icon: '',
      design_icon: '',
      opinionPage: true
    }
  },
  computed:{
    icons(){
      return [
        {
          name: this.$t('Descriptive'),
          path:"descriptive_processing"
        },
        {
          name: this.$t('Diagnostic'),
          path:"diagnostic_processing"
        },{
      name: this.$t('Predictive'),
          path:"predictive_processing"
    },{
      name: this.$t('Prescriptive'),
          path:"prescriptive_processing"
    },{
      name: this.$t('Cookies'),
          path:"cookies"
    },{
      name: this.$t('Cache') ,
          path:"local_cache"
    },{
      name: this.$t('Personal'),
          path:"personal_data"
    },{
      name: this.$t('General'),
          path:"general_data"
    },{
      name: this.$t('Metadata'),
          path:"metadata"
    },{
      name: this.$t('TransferExtern'),
          path:"third_party"
    },{
      name: this.$t('TransferIntern'),
          path:"intern_transfer"
    },{
      name: this.$t('NotAnonymized'),
          path:"no_anonymized"
    },{
      name: this.$t('Anonymized'),
          path:"anonymized"
    },{
      name: this.$t('Stored'),
          path:"stored_time"
    },{
      name: this.$t('Pseudoanonymized'),
          path:"pseudoanonymized"
    },{
      name: this.$t('Encrypted'),
          path:"encrypted"
    },{
      name: this.$t('Processed'),
          path:"processed_time"
    },
]
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
        this.opinion_icon= ''
        this.path= ''
        // Prepare and show pop up thanking the user
        this.popUp= this.$t('FeedbackOpinionThank')
        this.showPopUp = true
      }
    },
    removeIcon(){
      this.design_icon = ''
      this.popUp= this.$t('FeedbackDesignThank')
      this.showPopUp = true
      console.log(this.popUp)

    }
  }
}
</script>

<style scoped>

</style>