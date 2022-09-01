<template>
  <div id="header" class="grid grid-cols-3 lg:gap-4 w-screen h-20">
    <div id = "logo" class="self-center lg:w-46 mx-2 xl:w-96 ">
      <router-link to="/">
      <img src="/assets/learning_icons_logo.svg" alt="Learning Icons Logo" >
      </router-link>
    </div>
    <div id ="menu" class="col-span-2 grid grid-cols-3 items-center font-roboto lg:font-bold lg:text-xl">
      <div id ="learning" class=" text-xs min-w-min justify-self-center transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/learningIcons">{{$t('Header1')}}</router-link>
      </div>
      <div id ="inform" class="md:text-center lg:text-start text-xs transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/informYourStudents">{{$t('Header2')}}</router-link>
      </div>
      <div id ="feedback" class=" text-xs transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/feedback">{{$t('Header3')}}</router-link>
      </div>
    </div>
  </div>
  <language-switcher></language-switcher>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {LanguageSwitcher}
}
</script>

<style scoped>

</style>