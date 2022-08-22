<template>
  <div id="feedbackPage" class=" flex flex-col pt-10 mx-5">
    <h2 class="font-montserrat text-4xl self-center pb-8">HELP US TO KEEP IMPROVING</h2>
    <div id="feedbackSection" class=" grid grid-cols-2 ">
      <section id="opinion" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-16">Give your opinion about the different icons we have created</p>

        <!--FER COMPONENT QUE SIGUI EL DROPDOWN MENU-->
        <button @click="isShow = !isShow" class="  flex flex-row justify-end mb-4 mx-28 shadow-md bg-white rounded-3xl font-montserrat h-8 text-xl hover:bg-slate-50 active:bg-slate-200">
            {{icon}}
            <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
          </button>
          <div v-if="isShow" id="dropdown" class=" select-none -mt-2 bg-white mx-28 rounded divide-y divide-gray-100 max-h-96 overflow-auto" >
            <div  id="list" v-for="(icon, index) in icons" :key="index" >
              <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShow = !isShow" v-on:click="changeIcon(icon)">{{ icon.name }}</p>
            </div>
          </div>

        <form v-if="path" ref="form" @submit.prevent="sendEmail" class="  flex flex-col">
          <img :src="path" class="h-52 self-center mb-3">
          <textarea v-model="message" type="text" id="message" name="message" class="resize-none mt-3 mx-28 h-32 rounded-3xl shadow-inner font-roboto"></textarea>
          <input v-show="message" type="submit" value="Send" data-mdb-ripple="true"
                 data-mdb-ripple-color="light" class=" mx-28 mt-16 shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">
        </form>
      </section>
      <div id="line" class="absolute h-1/2 border border-solid left-1/2 border-black rounded"></div>
      <section id="design" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-16">If you think you have a good design, send us your propose and we will analise it to keep improving</p>

        <!--FER COMPONENT QUE SIGUI EL DROPDOWN MENU-->
        <button @click="isShow = !isShow" class="  flex flex-row justify-end mb-4 mx-28 shadow-md bg-white rounded-3xl font-montserrat h-8 text-xl hover:bg-slate-50 active:bg-slate-200">
          {{icon}}
          <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
        </button>
        <div v-if="isShow"  class=" select-none -mt-2 bg-white mx-28 rounded divide-y divide-gray-100 max-h-96 overflow-auto" >
          <div  v-for="(icon, index) in icons" :key="index" >
            <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShow = !isShow" v-on:click="changeIcon(icon)">{{ icon.name }}</p>
          </div>
        </div>

        <form ref="form" class="flex flex-col">
          <DragDropArea></DragDropArea>
          <input type="submit" value="Send" data-mdb-ripple="true"
                 data-mdb-ripple-color="light" class="mx-28 mt-16 shadow-md bg-white rounded-3xl font-montserrat  h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">
        </form>
      </section>
    </div>
  </div>
</template>


<script>
import {
  mdiChevronDown
} from "@mdi/js";
import SvgIcon from '@jamescoyle/vue-icon'
import emailjs from 'emailjs-com';
import DragDropArea from "@/components/DragDropArea";

export default {
  name: "FeedbackPage",
  components:{
    SvgIcon,
    DragDropArea
  },
  data() {
    return {
      chevron: mdiChevronDown,
      isShow: false,
      path :'',
      message: '',
      icon:'',
      icons:[
        {
          name:"descriptive processing",
          path:"analisis_descriptivo"
        },
        {
          name:"diagnostic processing",
          path:"analisis_diagnostico"
        },{
          name:"predictive processing",
          path:"analisis_predictivo"
        },{
          name:"prescriptive processing",
          path:"analisis_prescriptivo"
        },{
          name:"cookies",
          path:"cookies"
        },{
          name:"caching techniques",
          path:"cache"
        },{
          name:"personal data gathering",
          path:"recoleccion_datos_personales"
        },{
          name:"general data gathering",
          path:"recoleccion_datos_no_personales"
        },{
          name:"metadata gathering",
          path:"metadata"
        },{
          name:"third-party data transfer",
          path:"transfer_extern"
        },{
          name:"intern data transfer",
          path:"transfer_internal"
        },{
          name:"no anonymized data",
          path:"no_anonymized"
        },{
          name:"anonymized data",
          path:"anonymized"
        },{
          name:"data stored during x time",
          path:"stored_x_time"
        },{
          name:"pseudoanonymized data",
          path:"pseudoanonymized"
        },{
          name:"Encrypted data",
          path:"encrypted"
        },{
          name:"data processed during x time",
          path:"processed_x_time"
        },
      ]
    }
  },
  methods: {
    changeIcon(icon){
      this.icon = icon.name;
      this.path = "/assets/icons/" + icon.path + ".svg";
      console.log(this.path);
    },
    sendEmail() {
      try {
        const templateParams = {
          icon: this.icon,
          message: this.message
        };

        emailjs.send('service_a4gmiv4', 'template_edecbp1', templateParams,
            'a4_ijyWw1e5xdKrY3')

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.message = ''
      this.icon= ''
    },
  }
}
</script>

<style scoped>

</style>