<template>
  <div class="absolute right-0 top-0 mt-1 mr-5">
    <div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng" class="cursor-pointer">
          <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
            {{ languages[lng].nativeName }}
          </a>
          <strong v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </strong>
          <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data () {
    return {
      languages: {
        en: {nativeName: 'EN'},
        es: {nativeName: 'ES'}
      }
    }
  }
}
</script>

<style scoped>

</style>