<template>
  <div id="dragDropArea" @dragover.prevent @drop.prevent @dragover="dragover" @dragleave="dragleave" @drop="dragFile" class="flex flex-col rounded-3xl border-2 border-black border-dashed mt-3 mx-28 h-52 justify-center items-center">

    <div id="dragDropMessage"  class="flex flex-col justify-center items-center" v-if="!imageData">
      <svg-icon class="justify-center"
                type="mdi" :path="upload_file_icon"></svg-icon>
      <span class="font-bold text-center text-xl"> Drag & Drop file here </span>
      <span class="text-center text-xl"> or </span>
    </div>

    <div v-if="imageData" class="mb-8">
      <span class="font-bold text-center text-xl"> {{numberOfImages}} </span>
    </div>

    <input type="file" ref="input" multiple @change="previewImage" accept="image/*" class="hidden" >
    <button @click="this.$refs.input.click()" class="flex flex-row bg-blue-400 hover:bg-blue-500 rounded-lg px-6 py-3 mx-2 font-bold">Browse pictures</button>
    <div class="hidden" @click="this.$parent.$refs.upload.click()"></div>
  </div>
  <div class="flex flex-col mt-3 ">
    <button v-show="imageData" @click="onUpload" class="mx-28 mt-16 shadow-md bg-white rounded-3xl font-montserrat h-16 text-2xl hover:bg-slate-50 active:bg-slate-200">Send</button>
  </div>
</template>

<script>
import { mdiFileUpload } from "@mdi/js"
import SvgIcon from '@jamescoyle/vue-icon'
import firebase from 'firebase/compat/app';

export default {
  name: "DragDropArea",
  components: {
    SvgIcon,
  },
  data() {
    return {
      upload_file_icon: mdiFileUpload,
      imageData: null,
      picture: null,
      uploadValue: 0,
      numberOfImages:''
    }
  },
  props:['design_icon'],
  methods: {
    dragFile(e) {
      e.currentTarget.classList.remove('bg-blue-300');
      this.previewImage(e)
    },
    previewImage(event) {
      if (event.type === "drop") {
        this.imageData = event.dataTransfer.files;
      } else {
        this.imageData = event.target.files;
      }
      this.uploadValue = 0;
      this.picture = null;
      if (this.imageData.length === 1) {
        this.numberOfImages = "There is 1 image"
      } else {
        this.numberOfImages = "There are " + this.imageData.length + " images"
      }
    },
    onUpload() {
      let text = "Do you want to send your design?"
      if (confirm(text) === true) {
        const post = {
          photo: this.imageData[0].name,
          name: this.design_icon,
          date: firebase.database.ServerValue.TIMESTAMP
        };
        this.picture = null;
        for (var i = 0; i < this.imageData.length; i++) {
          const storageRef = firebase.storage().ref(`${this.imageData[i].name}`).put(this.imageData[i]);
          storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              }, error => {
                console.log(error.message)
              },
              () => {
                this.uploadValue = 100;
                storageRef.snapshot.ref.getDownloadURL().then((url) => {
                  this.picture = url;
                  console.log(this.picture)
                });
              }
          );
        }
        firebase.database().ref('Designs').push(post)
            .then((response) => {
              console.log(response)
            })
            .catch(err => {
              console.log(err)
            })
        this.imageData = ''
        this.numberOfImages = ''
        this.$emit('removeIcon', '')
      }

    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-blue-300')) {
        event.currentTarget.classList.add('bg-blue-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.remove('bg-blue-300');
    }
  }
}

</script>

<style scoped>

</style>