<template>
  <div class="ml-2 flex flex-col absolute inset-0 justify-center place-items-center bg-gray-400 bg-opacity-75 transition-opacity">
    <div class="flex flex-col bg-blue-200 w-1/5 h-1/5 rounded-3xl z-50">
      <div class ="w-4/5 h-4/5 self-center p-4">
        <p>{{popUp}}</p>
      </div>
      <button class="self-center bg-blue-400 hover:bg-blue-500 rounded-lg py-3 w-1/6 h-1/9 mb-4" @click="hidePopUp">EXIT</button>
    </div>
    <div class="absolute w-full h-full filter backdrop-blur-sm z-10" @click="hidePopUp"></div>
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