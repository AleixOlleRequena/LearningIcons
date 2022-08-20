<template>
  <div id="feedbackPage" class="flex flex-col pt-14 mx-5">
    <h2 class="font-montserrat text-4xl self-center pb-8">HELP US TO KEEP IMPROVING</h2>
    <div id="feedbackSection" class="grid grid-cols-2 ">
      <section id="opinion" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-24">Give your opinion about the different icons we have created</p>
        <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
          <textarea v-model="message" type="text" id="message" name="message" class="mx-28 h-32 rounded-3xl shadow-inner font-roboto"></textarea>
          <input type="submit" value="Send" data-mdb-ripple="true"
                 data-mdb-ripple-color="light" class="mx-28 mt-28 shadow-md bg-white rounded-3xl font-montserrat  h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">
        </form>
      </section>
      <section id="design" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-24">If you think you have a good design, send us your propose and we will analise it to keep improving</p>
      </section>
    </div>
  </div>
</template>


<script>
import emailjs from 'emailjs-com';

export default {
  name: "FeedbackPage",
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendEmail() {
      try {
        console.log(this.message)
        emailjs.sendForm('service_a4gmiv4', 'template_edecbp1', this.$refs.form,
            'a4_ijyWw1e5xdKrY3')

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.message = ''
    },
  }
}
</script>

<style scoped>

</style>