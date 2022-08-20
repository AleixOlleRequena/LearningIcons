<template>
  <div id="feedbackPage" class="flex flex-col pt-14 mx-5">
    <h2 class="font-montserrat text-4xl self-center pb-8">HELP US TO KEEP IMPROVING</h2>
    <div id="feedbackSection" class="grid grid-cols-2 ">
      <section id="opinion" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-24">Give your opinion about the different icons we have created</p>
        <vue-dropdown></vue-dropdown>
      </section>
      <section id="design" class="flex flex-col">
        <p class="font-roboto text-xl text-center pb-24">If you think you have a good design, send us your propose and we will analise it to keep improving</p>
      </section>
    </div>
  </div>
</template>


<script>
import VueDropdown from 'vue-dynamic-dropdown'

export default {
  name: "FeedbackPage",
  components: {
    VueDropdown
  },
  data: function() {
    return {
      config: {
        options: [
          {
            value: "option 1"
          },
          {
            value: "option 2"
          },
          {
            value: "option 3"
          },
        ],
        prefix: "The",
        backgroundColor: "green",
        disabled: false,
      }
    }
  }
}
</script>

<style scoped>

</style>