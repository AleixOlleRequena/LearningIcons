<template>
<section>
  <div class="flex flex-row justify-center mt-8 md:-mt-8">
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path= "twitter" width=55 height=55 color="white" @click="openWeb('https://twitter.com/LaSalleBCN?s=20&t=nyXeVw5dKN_hQ86QbN2GSA')"></svg-icon>
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path="facebook" width=55 height=55 color="white" @click="openWeb('https://www.facebook.com/LaSalleBCN')"></svg-icon>
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path="blog" width=55 height=55 color="white" @click="openWeb('https://blogs.salleurl.edu/en/technology-learning')"></svg-icon>
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path="github" width=55 height=55 color="white" @click="openWeb('https://github.com/LS-LEDA')"></svg-icon>
  </div>
</section>
</template>

<script>
import {
  mdiFacebook,
  mdiGithub,
  mdiTwitter,
  mdiWeb,

} from "@mdi/js";
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: "FooterPage",
  components: {
    SvgIcon
  },
  data() {
    return {
      twitter: mdiTwitter,
      facebook: mdiFacebook,
      blog: mdiWeb,
      github: mdiGithub
    }
  },
  methods:{
    openWeb(url) {
      window.open(url);
    }
  }
}
</script>

<style scoped>

</style>