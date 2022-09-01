<template>
  <div class="flex flex-col absolute inset-0 justify-center place-items-center">
    <div class="flex flex-col bg-white w-11/12 sm:w-1/2 sm:h-1/3 xl:w-1/5 xl:h-1/5 rounded-3xl z-50">
      <div class ="w-4/5 h-4/5 self-center p-4">
        <p>{{popUp}}</p>
      </div>
      <button class="self-center bg-blue-400 hover:bg-blue-500 rounded-lg py-3 w-1/6 h-1/9 mb-4" @click="hidePopUp">
        {{ $t('PopUpExit') }}</button>
    </div>
    <div class="absolute w-full h-full  z-10" @click="hidePopUp"></div>
  </div>
</template>


<script>
export default {
  name: "ThanksPopUp",
  emits: ['thanksPopUp'],
  props:['popUp'],
  methods: {
    hidePopUp: function () {
      this.$emit('thanksPopUp')
    }
  }
}

</script>

<style scoped>

</style>