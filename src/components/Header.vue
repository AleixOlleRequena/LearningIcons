<template>
  <div id="header" class="grid grid-cols-3 lg:gap-4 w-100 h-20">
    <div id = "logo" class="self-center lg:w-46 mx-2 xl:w-96 ">
      <router-link to="/LearningIcons">
      <img src="LearningIcons/assets/learningiconslogo.svg" alt="Learning Icons Logo" >
      </router-link>
    </div>
    <div id ="menu" class="col-span-2 grid grid-cols-4 items-center font-roboto lg:font-bold lg:text-xl">
      <div id ="project" class="-rotate-45 md:rotate-0 text-xs min-w-min justify-self-center transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/project">{{$t('Header1')}}</router-link>
      </div>
      <div id ="learning" class="-rotate-45 md:rotate-0 text-xs min-w-min justify-self-center transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/Icons">{{$t('Header2')}}</router-link>
      </div>
      <div id ="inform" class="-rotate-45 md:rotate-0 md:text-center  text-xs transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/informYourStudents">{{$t('Header3')}}</router-link>
      </div>
      <div id ="feedback" class="-rotate-45 md:rotate-0 md:text-center text-xs transition ease-in-out hover:scale-110 duration-150 md:text-xl">
        <router-link to="/feedback">{{$t('Header4')}}</router-link>
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