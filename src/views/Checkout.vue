<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Konfirmasi</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
          <div class="row">
            <div class="col-3">
            </div>
            <div class="col-2">
                <h4>Jenis Hewan</h4>
            </div>
            <div class="col">
                <h4>Tipe</h4>
            </div>
            <div class="col">
                <h4>Harga</h4>
            </div>
            <div class="col">
                <h4>Jumlah</h4>
            </div>
            <div class="col">
                <h4><b>Total</b></h4>
            </div>
        </div>
        <div class="row d-flex align-items-center mb-4">
            <div class="col-3">
                <img src="../../public/img/domba_jantan.svg" alt="Product Image" width="250px">
            </div>
            <div class="col-2">
                <h4><b>Kambing / Domba Super</b></h4>
            </div>
            <div class="col">
                <h4><b>Jantan</b></h4>
            </div>
            <div class="col">
                <h4><b>Rp 2.500.000</b></h4>
            </div>
            <div class="col">
                <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
            </div>
            <div class="col">
                <h4><span class="text-danger"><b>Rp 5.000.000</b></span></h4>
            </div>
        </div>
        <div class="row d-flex align-items-center mb-4">
            <div class="col-3">
                <img src="../../public/img/domba_jantan.svg" alt="Product Image" width="250px">
            </div>
            <div class="col-2">
                <h4><b>Kambing / Domba Super</b></h4>
            </div>
            <div class="col">
                <h4><b>Jantan</b></h4>
            </div>
            <div class="col">
                <h4><b>Rp 2.500.000</b></h4>
            </div>
            <div class="col">
                <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
            </div>
            <div class="col">
                <h4><span class="text-danger"><b>Rp 5.000.000</b></span></h4>
            </div>
        </div>
      </div>

      <!-- <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" value="halooo" v-model="button">
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" value="tesss" id="danger-outlined" autocomplete="off" v-model="button">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
<pre> hasilnya {{button}}</pre> -->

    <div class="row d-flex justify-content-center" style="margin: 25px">
        <div>
            <div class="row">
                <div class="col-3">
                    <label for="nama" class="col-form-label"><h5>Atas Nama</h5></label>
                </div>
                <div class="col-9">
                    <select name="" id="nama" class="form-control" style="width: 750px">
                        <option value="" selected disabled>Nama</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-3">
                    <label for="nama" class="col-form-label"><h5>Penyaluran</h5></label>
                </div>
                <div class="col-9">
                    <div class="card btn-group btn-group-toggle" style="width: 750px" data-toggle="buttons">
                        <div class="row m-2">
                            <div class="col d-flex align-items-center ">
                                <a class="btn btn-danger btn-sm px-3 mx-2" data-toggle="collapse" href="#option1" role="button" aria-expanded="false" aria-controls="option1">
                                    <b>?</b>
                                </a>
                                <b>Biar kami yang menyalurkan ke tempat yang membutuhkan</b>
                                <!-- <button class="btn btn-outline-danger ml-auto px-4 py-0" type="button">Pilih</button> -->
                                <div class="btn-group btn-group-toggle ml-auto " data-toggle="buttons">
                                    <label class="btn btn-outline-danger px-4 py-0">
                                        <input type="radio" name="options" value="option1" v-model="selectedOption" checked> Pilih
                                    </label>
                                </div>
                                <!-- <input type="radio" id="btn-outline-danger" class="btn-check" autocomplete="off" checked>
                                <label for="btn-outline-danger" class="btn btn-outline-danger ml-auto px-4 py-0">Pilih</label> -->
                                <!-- <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
                                <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>
                                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                                <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label> -->
                            </div>

                            <!-- DESKRIPSI -->
                            <div class="collapse" id="option1">
                            <p>
                                <div class="card card-body py-3">
                                    Anda  menyerahkan sepenuhnya amanah kurban anda kepada kami, segala proses
                                akan kami selesaikan dengan baik dan memberikan laporan kepada anda. Anda
                                dapat melihat progres terbaru di profil > laporan dan anda juga akan mendapatkan
                                laporan update secara realtime via nomor whatsapp yang sudah didaftarkan.
                                </div>
                            </div>
                        </div>

                        <div class="row m-2">
                            <div class="col d-flex align-items-center ">
                            <a class="btn btn-danger btn-sm px-3 mx-2" data-toggle="collapse" href="#option2" role="button" aria-expanded="false" aria-controls="option2">
                                <b>?</b>
                            </a>
                            <b>Kirim hewan kurban ke tempat anda / masjid pilihan anda</b>

                            <div class="btn-group btn-group-toggle ml-auto " data-toggle="buttons">
                                <label class="btn btn-outline-danger px-4 py-0">
                                    <input type="radio" name="options" value="option2" v-model="selectedOption"> Pilih
                                </label>
                            </div>
                            </div>
                            <!-- DESKRIPSI -->
                            <div class="collapse" id="option2">
                            <p>
                                <div class="card card-body py-3">
                                    Hewan kurban akan kami kirimkan ke masjid / lokasi yang anda inginkan.  Silahkan mengisi formulir untuk lokasi pengiriman.
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <!-- <input type="checkbox"> -->
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label for="defaultCheck1">
                            Saya menyetujui <router-link to="" class="text-warning font-weight-bold text-decoration-none">syarat dan ketentuan</router-link>
                        </label>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-3">
                    <label for="nama" class="col-form-label"><h5>Formulir Penyaluran</h5></label>
                </div>
                <div class="col-9">
                    <div class="mb-3">
                        <select name="" id="nama" class="form-control" style="width: 750px">
                            <option value="" selected disabled>Nama Penerima</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" style="width: 750px" placeholder="No. Wa">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" style="width: 750px" placeholder="Tempat Penerima (Masjid/Musholla)">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" style="width: 750px" placeholder="Alamat">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" style="width: 750px" placeholder="Kecamatan">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" style="width: 750px" placeholder="Kota">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" style="width: 750px" placeholder="Provinsi">
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center my-5">
                <router-link to="confirmCheckout" class="text-light text-decoration-none">
                    <button class="btn btn-danger px-4">
                        Lanjutkan
                    </button>
                </router-link>
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-auto">
                <label for="nama" class="col-form-label"><h5>Penyaluran</h5></label>
            </div>
            <div class="col-auto">
                <div class="card">
                    <button class="btn btn-danger btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                        >
                    </button>
                    Biar kami yang menyalurkan ke tempat yang membutuhkan
                    <button class="btn btn-outline-danger px-4" type="button">
                        Pilih
                    </button>
                </div>
            </div>
        </div> -->

        <!-- <div class="col" >
            <div class="row justify-content-center align-content-around flex-wrap">
                <div class="col-6" style="margin: 20px auto">
                    <div class="d-flex justify-content-center">
                        <div class="card" style="padding: 0 10px;">
                            <div class="row">
                                <div class="col d-flex align-items-center justify-content-end" style="padding: 0">
                                    <div class="d-flex flex-column" >
                                        <img src="../../public/img/patungan_sapi.png" alt="" width="150px">
                                        <p>Berat: <b>200 Kg</b></p>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-center justify-content-center" >
                                    <div>
                                        <h5><b>Kurban Sapi <span class="text-danger">Mandiri</span></b></h5>
                                        <h4><b>Rp 17.500.000</b></h4>
                                        <b-button pill variant="danger"><b>Kurban Sekarang</b></b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="padding: 0 10px;">
                            <div class="row">
                                <div class="col d-flex align-items-center justify-content-end" style="padding: 0">
                                    <div class="d-flex flex-column" >
                                        <img src="../../public/img/patungan_sapi.png" alt="" width="150px">
                                        <p>Berat: <b>200 Kg</b></p>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-center justify-content-center" >
                                    <div>
                                        <h5><b>Patungan Kurban <span class="text-danger">2 Orang</span></b></h5>
                                        <h4><b>Rp 17.500.000</b></h4>
                                        <b-button pill variant="danger"><b>Kurban Sekarang</b></b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        value: 1,
        checkedButton: false,
        button: '',
        selectedOption: '',

    };
  },
  computed: {
      check() {
          if (this.button == 'halooo') {
              this.checkedButton
              
          }
      }
  }
};
</script>

<style scoped>

.card button:hover {
  opacity: 0.7;
}
</style>
