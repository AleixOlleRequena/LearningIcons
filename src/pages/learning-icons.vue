<template>
  <div>
    <HelloWorld></HelloWorld>
    <router-view></router-view>
  </div>

</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "LearningIcons",
  components:{
    HelloWorld
  },
  mounted() {
    console.log("HOPLA QUE TAL")
  },
beforeUnmount () {
  console.log("HOPLA QUE TAL")
}
}
</script>

<style scoped>

</style>