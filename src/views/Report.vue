<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Laporan Kurban</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="row align-items-center my-4">
          <!-- Foto Hewan Kurban Anda -->
          <div class="col">
            <input type="radio" class="btn-check" name="options-outlined" id="foto-hewan-kurban" value="foto-hewan-kurban" v-model="currentPage" autocomplete="off" checked>
            <label class="btn btn-danger font-weight-bold text-light px-4" for="foto-hewan-kurban">
              <span class="d-flex justify-content-center">Foto Hewan</span> 
              <span class="d-flex justify-content-center">Kurban Anda</span>
            </label>
            <!-- <button class="btn btn-danger font-weight-bold text-light px-4">
              <span class="d-flex justify-content-center">Foto Hewan</span> 
              <span class="d-flex justify-content-center">Kurban Anda</span>
            </button> -->
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

          <pre>{{currentPage}}</pre>

          <div class="card my-4">
            <div class="text-center" style="margin: 50px auto; ">
              <div class="d-flex justify-content-center">
                <h5><b>Foto Hewan Kurban Anda</b></h5>
              </div>
              <br>
              <div class="row d-flex align-items-center mb-4">
                  <div class="col-auto">
                    <!-- <img src="../../public/img/foto hewan kurban anda.svg" alt="" width="250px"> -->
                    ​<picture>
                      <source srcset="" type="image/svg+xml">
                      <img src="../../public/img/foto hewan kurban anda.svg" class="img-fluid img-thumbnail" alt="...">
                    </picture>
                  </div>
                  <div class="col-auto">
                    <div class="text-left" style="margin: 50px auto; ">
                        <span class="d-flex"><h5>Atas Nama : &nbsp; <b>Transbara Al-Fatih</b></h5></span>
                        <span class="d-flex"><h5>Jenis Hewan : &nbsp; <b>Kambing / Domba Jantan Super</b></h5></span>
                        <span class="d-flex"><h5>Berat : &nbsp; <b>25 Kg</b></h5></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="d-flex justify-content-center my-5">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: '',
    };
  },
};
</script>
