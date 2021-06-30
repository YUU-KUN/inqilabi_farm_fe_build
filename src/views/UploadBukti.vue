<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2 v-if="!uploaded"><b>Upload Bukti Transfer</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="align-items-center my-4">
            <vue-dropzone v-if="!uploaded" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" useCustomSlot style="height:300px; ">
                <!-- <div class="dropzone-custom-content" style="margin-bottom:20px"> -->
                    <img src="../../public/img/entypo_upload-to-cloud.svg" alt="Cloud Upload Icon" height="175px">
                    <!-- <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div> -->
                <!-- </div> -->
            </vue-dropzone>
            <div class="justify-content-center" v-if="uploaded">
                <h4>Terimakasih, Kami akan mengkonfirmasi pembayaran Anda</h4>
                <h4>Silahkan kembali ke dashboard</h4>
            </div>
        </div>
      </div>

    <div class="d-flex justify-content-center my-5">
        <button class="btn btn-danger px-4" v-if="!uploaded" @click="upload">
            <span class="text-light">Upload</span>
        </button>
        <router-link to="/" class="text-light text-decoration-none">
            <button class="btn btn-danger px-4" v-if="uploaded">
                Kemball
            </button>
        </router-link>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    components: {
      vueDropzone: vue2Dropzone
  },
  data() {
    return {
        uploaded: false,
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          // thumbnailWidth: 'auto',
          // thumbnailHeight: 'auto',
          // thumbnailHeight: 150,
          // thumbnailWidth: 150,
          // thumbnailWidth: 120,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
  methods: {
      upload() {
          this.uploaded = !this.uploaded
      }
  }
};
</script>
