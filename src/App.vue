<template>
  <div class="h-auto w-auto flex flex-col mt-5">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>
