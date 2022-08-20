<template>
  <div>
    <dropdown :options="faqs" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>

  </div>
</template>

<script>
import dropdown from 'vue-dropdowns';

export default {
  name: "DropDownMenu",
  data() {
    return {
      faqs: [
          "a"
        , "b",
          "c"
      ],
      object: {
        name: 'Object Name',
      }
    }
  },
  components: {
    dropdown,
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
}
</script>

<style scoped>

</style>