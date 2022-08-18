<template>
  <div id="header" class="grid grid-cols-3 gap-4 w-screen h-20">
    <div id = "logo" class="self-center w-96 mx-2">
      <img src="/assets/learning_icons_logo.svg" alt="Learning Icons Logo" >
    </div>
    <div id ="menu" class="col-span-2 grid grid-cols-3 space-x-4 items-center font-roboto font-bold text-xl">
      <div id ="learning" class="min-w-min justify-self-center">
        <router-link :to="'learning-icons'">LEARNING ICONS</router-link>
      </div>
      <div id ="inform">
        <h1>INFORM YOUR STUDENTS</h1>
      </div>
      <div id ="feedback">
        <h1>FEEDBACK</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>

</style>