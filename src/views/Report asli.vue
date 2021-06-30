<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Laporan Kurban</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="align-items-center my-4">
          <div class="d-flex">
          
            <div class="col" v-if="pembayaran.proses == 'inqilabi_farm'">
              <div class="row">
                <!-- Foto Hewan Kurban Anda -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="foto_hewan" value="foto_hewan" v-model="proses" autocomplete="off" checked>
                  <label class="btn btn-danger font-weight-bold text-light px-4" for="foto_hewan">
                    <span class="d-flex justify-content-center">Foto Hewan</span> 
                    <span class="d-flex justify-content-center">Kurban Anda</span>
                  </label>
                </div>
                <!-- Foto Proses Penyembelihan -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="penyembelihan" value="penyembelihan" v-model="proses" autocomplete="off">
                  <label class="btn btn-warning font-weight-bold text-light px-4" for="penyembelihan">
                    <span class="d-flex justify-content-center">Foto Proses</span> 
                    <span class="d-flex justify-content-center">Penyembelihan</span>
                  </label>
                </div>
                <!-- Foto Pembagian Kurban -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="pembagian" value="pembagian" v-model="proses" autocomplete="off">
                  <label class="btn btn-warning font-weight-bold text-light px-4" for="pembagian">
                    <span class="d-flex justify-content-center">Foto Pembagian</span> 
                    <span class="d-flex justify-content-center">Kurban</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="col" v-else>
              <div class="row">
                <!-- Foto Hewan Kurban Anda -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="foto_hewan" value="foto_hewan" v-model="proses" autocomplete="off" checked>
                  <label class="btn btn-danger font-weight-bold text-light px-4" for="foto_hewan">
                    <span class="d-flex justify-content-center">Foto Hewan</span> 
                    <span class="d-flex justify-content-center">Kurban Anda</span>
                  </label>
                </div>
                <!-- Foto Proses Pengiriman -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="pengiriman" value="pengiriman" v-model="proses" autocomplete="off">
                  <label class="btn btn-warning font-weight-bold text-light px-4" for="pengiriman">
                    <span class="d-flex justify-content-center">Foto Proses</span> 
                    <span class="d-flex justify-content-center">Pengiriman</span>
                  </label>
                </div>

                <!-- Foto Hewan Sampai di Lokasi -->
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="sampai" value="sampai" v-model="proses" autocomplete="off">
                  <label class="btn btn-warning font-weight-bold text-light px-4" for="sampai">
                    <span class="d-flex justify-content-center">Foto Hewan</span> 
                    <span class="d-flex justify-content-center">Sampai di Lokasi</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div v-if="pembayaran" class="card my-4">
            <div class="text-center px-5" style="margin: 50px auto;">
              <div class="d-flex justify-content-center">
                <h5 v-if="proses == 'foto_hewan'"><b>Foto Hewan Kurban Anda</b></h5>
                <h5 v-else-if="proses == 'penyembelihan'"><b>Foto Proses Penyembelihan Kurban Anda</b></h5>
                <h5 v-else-if="proses == 'pembagian'"><b>Foto Pembagian Kurban Anda</b></h5>
                <h5 v-else-if="proses == 'pengiriman'"><b>Foto Proses Pengiriman Kurban Anda</b></h5>
                <h5 v-else><b>Foto Hewan Kurban Anda Sampai di Lokasi</b></h5>
              </div>
              <br>
              <div class="d-flex align-items-center mb-4">
                <div class="col">
                  <span v-if="detailHewan.foto || detailPenyembelihan.foto || detailPembagian.foto || detailPengiriman.foto || detailSampai.foto">
                    ​<picture v-if="proses == 'foto_hewan'">
                      <source srcset="" type="image/svg+xml">
                      <a data-fancybox :href="baseurl + detailHewan.foto">
                        <img :src="baseurl + detailHewan.foto" class="img-thumbnail" alt="foto hewan kurban">
                      </a>
                    </picture>
                    ​<picture v-if="proses == 'penyembelihan'">
                      <source srcset="" type="image/svg+xml">
                      <a data-fancybox :href="baseurl + detailPenyembelihan.foto">
                        <img :src="baseurl + detailPenyembelihan.foto" class="img-thumbnail" alt="foto penyembelihan">
                      </a>
                    </picture>
                    ​<picture v-if="proses == 'pembagian'">
                      <source srcset="" type="image/svg+xml">
                      <a data-fancybox :href="baseurl + detailPembagian.foto">
                        <img :src="baseurl + detailPembagian.foto" class="img-thumbnail" alt="foto pembagian">
                      </a>
                    </picture>
                    ​<picture v-if="proses == 'pengiriman'">
                      <source srcset="" type="image/svg+xml">
                      <a data-fancybox :href="baseurl + detailPengiriman.foto">
                        <img :src="baseurl + detailPengiriman.foto" class="img-thumbnail" alt="foto pengiriman">
                      </a>
                    </picture>
                    ​<picture v-if="proses == 'sampai'">
                      <source srcset="" type="image/svg+xml">
                      <a data-fancybox :href="baseurl + detailSampai.foto">
                        <img :src="baseurl + detailSampai.foto" class="img-thumbnail" alt="foto sampai">
                      </a>
                    </picture>
                  </span>
                  <span v-else>
                    <picture v-if="proses == 'foto_hewan'">
                      <source srcset="" type="image/svg+xml">
                      <img src="" class="img-fluid img-thumbnail" alt="Dummy Report">
                    </picture>
                  </span>
                </div>
                <div class="col">
                  <div class="text-left" style="margin: 50px auto;" v-if="proses == 'foto_hewan'">
                      <span class="d-flex"><h5>Atas Nama : &nbsp; <b>{{detailHewan.nama}}</b></h5></span>
                      <span class="d-flex"><h5>Jenis Hewan : &nbsp; <b>{{detailHewan.jenis_hewan}}</b></h5></span>
                      <span class="d-flex"><h5>Berat : &nbsp; <b>{{detailHewan.berat_hewan}} Kg</b></h5></span>
                  </div>
                  <div class="text-left" style="margin: 50px auto;" v-if="proses == 'penyembelihan'">
                      <span class="d-flex"><h5>Penyembelih : &nbsp; <b>{{detailPenyembelihan.penyembelih}}</b></h5></span>
                      <span class="d-flex"><h5>Hari : &nbsp; <b>{{detailPenyembelihan.hari_penyembelihan}}</b></h5></span>
                      <span class="d-flex"><h5>Pukul : &nbsp; <b>{{detailPenyembelihan.pukul_penyembelihan}}</b></h5></span>
                  </div>
                  <div class="text-left" style="margin: 50px auto;" v-if="proses == 'pembagian'">
                      <span class="d-flex"><h5>Lokasi Pembagian : &nbsp; <b>{{detailPembagian.lokasi_pembagian}}</b></h5></span>
                      <span class="d-flex"><h5>Penanggung Jawab : &nbsp; <b>{{detailPembagian.penanggung_jawab}}</b></h5></span>
                      <span class="d-flex"><h5>Hari : &nbsp; <b>{{detailPembagian.hari_pembagian | formatDate}}</b></h5></span>
                  </div>
                  <div class="text-left" style="margin: 50px auto;" v-if="proses == 'pengiriman'">
                      <span class="d-flex"><h5>Nama Supir : &nbsp; <b>{{detailPengiriman.supir}}</b></h5></span>
                      <span class="d-flex"><h5>Nomor Handphone : &nbsp; <b>{{detailPengiriman.no_supir}}</b></h5></span>
                      <span class="d-flex"><h5>Mobil Pengirim : &nbsp; <b>{{detailPengiriman.mobil_pengirim}}</b></h5></span>
                  </div>
                  <div class="text-left" style="margin: 50px auto;" v-if="proses == 'sampai'">
                      <span class="d-flex"><h5>Nama Penerima : &nbsp; <b>{{detailSampai.penerima}}</b></h5></span>
                      <span class="d-flex"><h5>Diterima Hari : &nbsp; <b>{{detailSampai.hari_diterima | formatDate}}</b></h5></span>
                      <span class="d-flex"><h5>Diterima Pukul : &nbsp; <b>{{detailSampai.pukul_diterima}}</b></h5></span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseurl: 'http://127.0.0.1:8000/reports/',
      pembayaran: '',
      proses: 'foto_hewan',
      reports: [],
      detailHewan: '',
      detailPenyembelihan: '',
      detailPembagian: '',
      detailPengiriman: '',
      detailSampai: '',
    };
  },
  methods: {
    getPembayaranUser() {
      this.axios.get('pembayaran/'+this.$route.params.id_pembayaran).then(response => {
        this.pembayaran = response.data
      }).catch(error => console.log(error.response))
    },
    // getMyReports() {
    //   this.axios.get(`myReport/${this.$route.params.id_pembayaran}`).then(response => {
    //     console.log(response.data);
    //     this.reports = response.data
    //   }).catch(error => {
    //     console.log(error.response);
    //   })
    // }
    getReportHewan(){
      this.axios.get(`getReportHewan/${this.$route.params.id_pembayaran}`).then(response => {
        this.detailHewan = response.data
      }).catch(error => console.log(error.response))
    },
    getReportPenyembelihan(){
      this.axios.get(`getReportPenyembelihan/${this.$route.params.id_pembayaran}`).then(response => {
        this.detailPenyembelihan = response.data
      }).catch(error => console.log(error.response))
    },
    getReportPembagian(){
      this.axios.get(`getReportPembagian/${this.$route.params.id_pembayaran}`).then(response => {
        this.detailPembagian = response.data
      }).catch(error => console.log(error.response))
    },
    getReportPengiriman(){
      this.axios.get(`getReportPengiriman/${this.$route.params.id_pembayaran}`).then(response => {
        this.detailPengiriman = response.data
      }).catch(error => console.log(error.response))
    },
    getReportSampai(){
      this.axios.get(`getReportSampai/${this.$route.params.id_pembayaran}`).then(response => {
        this.detailSampai = response.data
      }).catch(error => console.log(error.response))
    },
  },
  mounted() {
    this.getPembayaranUser()
    this.getReportHewan()
    this.getReportPenyembelihan()
    this.getReportPembagian()
    this.getReportPengiriman()
    this.getReportSampai()
  }
};
</script>

<style scoped>
.btn-check{
  display:none
}
</style>
