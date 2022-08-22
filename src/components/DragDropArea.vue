<template>
  <div id="dragDropArea" class="flex flex-col rounded-3xl border-2 border-black border-dashed mt-3 mx-28 h-52 justify-center items-center">
    <svg-icon class="justify-center"
              type="mdi" :path="upload_file_icon"></svg-icon>
    <span class="font-bold text-center text-xl"> Drag & Drop file here </span>
    <span class="text-center text-xl"> or </span>

    <input id="uploadmyfile" type="file" ref="file" multiple @change="UploadFile" class="flex flex-row bg-blue-400 hover:bg-blue-500 rounded-lg px-6 py-3 mx-2 font-bold">
  </div>
</template>

<script>
import { mdiFileUpload } from "@mdi/js"
import SvgIcon from '@jamescoyle/vue-icon'


export default {
  name: "DragDropArea",
  components: {
    SvgIcon
  },
  data() {
    return {
      upload_file_icon: mdiFileUpload,
      imgSrc :'',
      icon:"PROVA"
    }
  },
  methods:{
    UploadFile(e){
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.imgSrc = reader.result)
      console.log(reader.result)
      this.sendDesign()
    },
    sendDesign() {
      try {
        var data = this.imgSrc.match(/base64,(.+)$/);


        console.log(this.imgSrc)
        console.log(data)



      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.message = ''
      this.icon= ''
    },
  }
}

</script>

<style scoped>

</style>