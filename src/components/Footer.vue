<template>
<section>
  <div class="flex flex-row justify-center mt-8 md:-mt-8">
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path= "twitter" width=55 height=55 color="white" @click="openWeb('https://www.upc.edu/')"></svg-icon>
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path="facebook" width=55 height=55 color="white" @click="openWeb('https://www.upc.edu/')"></svg-icon>
    <svg-icon class="cursor-pointer h-8 md:h-32" type="mdi" :path="blog" width=55 height=55 color="white" @click="openWeb('https://blogs.salleurl.edu/en/technology-learning')"></svg-icon>
  </div>
</section>
</template>

<script>
import {
  mdiFacebook,
  mdiTwitter,
  mdiWeb
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
      blog: mdiWeb
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