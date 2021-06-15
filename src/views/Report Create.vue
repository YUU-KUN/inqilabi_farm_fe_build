<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="row align-items-center my-4">
          <div class="col">

    <h2><b>Detail Laporan</b></h2> 
          </div>
          <!-- Foto Hewan Kurban Anda -->
          <div class="col">
            <input type="radio" class="btn-check" name="options-outlined" id="foto-hewan-kurban" value="foto-hewan-kurban" v-model="currentPage" autocomplete="off" checked>
            <label class="btn btn-danger font-weight-bold text-light px-4" for="foto-hewan-kurban">
              <span class="d-flex justify-content-center">Foto Hewan</span> 
              <span class="d-flex justify-content-center">Kurban Anda</span>
            </label>
          </div>
          <!-- Foto Proses Penyembelihan -->
          <div class="col">
            <input type="radio" class="btn-check" name="options-outlined" id="foto-proses-penyembelihan" value="foto-proses-penyembelihan" v-model="currentPage" autocomplete="off">
            <label class="btn btn-warning font-weight-bold text-light px-4" for="foto-proses-penyembelihan">
              <span class="d-flex justify-content-center">Foto Proses</span> 
              <span class="d-flex justify-content-center">Penyembelihan</span>
            </label>
          </div>
          <!-- Foto Pembagian Kurban -->
          <div class="col">
            <input type="radio" class="btn-check" name="options-outlined" id="foto-pembagian-kurban" value="foto-pembagian-kurban" v-model="currentPage" autocomplete="off">
            <label class="btn btn-warning font-weight-bold text-light px-4" for="foto-pembagian-kurban">
              <span class="d-flex justify-content-center">Foto Pembagian</span> 
              <span class="d-flex justify-content-center">Kurban</span>
            </label>
          </div>
          <div class="card my-4">
            <div class="d-flex justify-content-center my-5">
              <span v-if="currentPage == 'foto-hewan-kurban'">
                <h4><b>Foto Hewan Kurban</b></h4>
              </span>
              <span v-if="currentPage == 'foto-proses-penyembelihan'">
                <h4><b>Foto Proses Penyembelihan Kurban</b></h4>
              </span>
              <span v-if="currentPage == 'foto-pembagian-kurban'">
                <h4><b>Foto Pembagian Kurban</b></h4>
              </span>
            </div>
            <div class="align-items-center mx-auto" style="width: 750px">
              <div class="col">
                <form>
                  <b-form-group>
                    <b-form-input v-if="currentPage == 'foto-hewan-kurban'" id="nama" v-model="nama" placeholder="Atas Nama" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-proses-penyembelihan'" id="penyembelih" v-model="penyembelih" placeholder="Penyembelih" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-pembagian-kurban'" id="lokasi_pembagian" v-model="lokasi_pembagian" placeholder="Lokasi Pembagian" trim required></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-if="currentPage == 'foto-hewan-kurban'" id="jenis" v-model="jenis" placeholder="Jenis Hewan" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-proses-penyembelihan'" id="hari_penyembelihan" v-model="hari_penyembelihan" placeholder="Hari" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-pembagian-kurban'" id="penanggung_jawab" v-model="penanggung_jawab" placeholder="Penanggung Jawab" trim required></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input v-if="currentPage == 'foto-hewan-kurban'" id="berat" v-model="berat" placeholder="Berat" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-proses-penyembelihan'" id="pukul_penyembelihan" v-model="pukul_penyembelihan" placeholder="Pukul" trim required></b-form-input>
                    <b-form-input v-if="currentPage == 'foto-pembagian-kurban'" id="hari_pembagian" v-model="hari_pembagian" placeholder="Hari" trim required></b-form-input>
                  </b-form-group>
                </form>
                  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" useCustomSlot data-toggle="tooltip" title="halo">
                      <div class="dropzone-custom-content" >
                          <img src="../../public/img/entypo_upload-to-cloud.svg" alt="Cloud Upload Icon" height="75px">
                          <div class="subtitle">
                            <span v-if="currentPage == 'foto-hewan-kurban'">Upload Foto Hewan</span>
                            <span v-if="currentPage == 'foto-proses-penyembelihan'">Upload Foto Penyembelihan</span>
                            <span v-if="currentPage == 'foto-pembagian-kurban'">Upload Foto Pembagian Kurban</span>
                          </div>
                      </div>
                  </vue-dropzone>
              </div>
            </div>
            <div class="d-flex justify-content-between my-5" style="margin: auto 150px">
              <router-link to="reportDetail">
                <button class="btn btn-outline-danger">Kembali</button>
              </router-link>
              <router-link to="reportDetail">
                <button class="btn btn-danger ">Simpan</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    <div class="d-flex justify-content-center my-5">
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
      currentPage: 'foto-proses-penyembelihan',
      nama: '',
      jenis: '',
      berat: '',
      penyembelih: '',
      hari_penyembelihan: '',
      pukul_penyembelihan: '',
      lokasi_pembagian: '',
      penanggung_jawab: '',
      hari_pembagian: '',
      foto: '',
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
};
</script>
