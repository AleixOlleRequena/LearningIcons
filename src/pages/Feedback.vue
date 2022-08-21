<template>
  <div id="feedbackPage" class=" flex flex-col pt-14 mx-5">
    <h2 class="font-montserrat text-4xl self-center pb-8">HELP US TO KEEP IMPROVING</h2>
    <div id="feedbackSection" class=" grid grid-cols-2 ">
      <section id="opinion" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-20">Give your opinion about the different icons we have created</p>

        <!--FER COMPONENT QUE SIGUI EL DROPDOWN MENU-->
        <button @click="isShow = !isShow" class="  flex flex-row justify-end mb-4 mx-28 shadow-md bg-white rounded-3xl font-montserrat h-8 text-xl hover:bg-slate-50 active:bg-slate-200">
            {{icon}}
            <svg-icon :path= "chevron" type="mdi" width=44 height=44 color="black" class="self-center"></svg-icon>
          </button>
          <div v-if="isShow" id="dropdown" class=" -mt-2 bg-white mx-28 rounded divide-y divide-gray-100 max-h-96 overflow-auto" >
            <div  id="list" v-for="(icon, index) in icons" :key="index" >
              <p class=" flex mx-2 items-center font-roboto py-4 h-4 hover:bg-slate-50 " @click="isShow = !isShow" v-on:click="changeIcon(icon)">{{ icon }}</p>
            </div>
          </div>

        <form v-if="path" ref="form" @submit.prevent="sendEmail" class="  flex flex-col">
          <img :src="path" class="h-1/4 w-1/3 self-center mb-3">
          <textarea v-model="message" type="text" id="message" name="message" class="resize-none mt-3 mx-28 h-32 rounded-3xl shadow-inner font-roboto"></textarea>
          <input type="submit" value="Send" data-mdb-ripple="true"
                 data-mdb-ripple-color="light" class=" mx-28 mt-16 shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">
        </form>
      </section>
      <div id="line" class="absolute h-1/2 border border-solid left-1/2 border-black rounded"></div>
      <section id="design" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-24">If you think you have a good design, send us your propose and we will analise it to keep improving</p>

        <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
          <textarea v-model="message" type="text" id="message" name="message" class="resize-none mx-28 h-32 rounded-3xl shadow-inner font-roboto"></textarea>
          <input type="submit" value="Send" data-mdb-ripple="true"
                 data-mdb-ripple-color="light" class="mx-28 mt-28 shadow-md bg-white rounded-3xl font-montserrat  h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">
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

export default {
  name: "FeedbackPage",
  components:{
  SvgIcon},
  data() {
    return {
      chevron: mdiChevronDown,
      isShow: false,
      path :'',
      message: '',
      icon:'',
      icons:[
          "metadata",
          "cookies",
          "c",
          "d",
        "metadata",
        "cookies",
        "c",
        "d",
        "metadata",
        "cookies",
        "c",
        "d",
        "metadata",
        "cookies",
        "c",
        "d",
        "metadata",
        "cookies",
        "c",
        "d"
      ]
    }
  },
  methods: {

    changeIcon(icon){
      this.icon = icon;
      this.path = "/assets/" + icon + ".svg";
      console.log(this.path);
    },
    sendEmail() {
      try {
        var templateParams = {
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