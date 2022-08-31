<template>
  <div id="header" class="grid grid-cols-3 gap-4 w-screen h-20">
    <div id = "logo" class="self-center w-96 mx-2 ">
      <router-link to="/">
      <img src="/assets/learning_icons_logo.svg" alt="Learning Icons Logo" >
      </router-link>
    </div>
    <div id ="menu" class="col-span-2 grid grid-cols-3 space-x-4 items-center font-roboto font-bold text-xl">
      <div id ="learning" class="min-w-min justify-self-center transition ease-in-out hover:scale-110 duration-150">
        <router-link to="/learningIcons">{{$t('Header1')}}</router-link>
      </div>
      <div id ="inform" class="transition ease-in-out hover:scale-110 duration-150">
        <router-link to="/informYourStudents">{{$t('Header2')}}</router-link>
      </div>
      <div id ="feedback" class="transition ease-in-out hover:scale-110 duration-150">
        <router-link to="/feedback">{{$t('Header3')}}</router-link>
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