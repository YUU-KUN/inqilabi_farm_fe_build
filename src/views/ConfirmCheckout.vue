<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Konfirmasi</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="row my-4">
            <div class="col-3">
                <h4>Atas Nama</h4>
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
                <h4><b>Transbara Wahyu</b></h4>
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
                <h4><b>2</b></h4>
            </div>
            <div class="col">
                <h4><span class="text-danger"><b>Rp 5.000.000</b></span></h4>
            </div>
        </div>
        <div class="row d-flex align-items-center mb-4">
            <div class="col-3">
                <h4><b>Transbara Wahyu</b></h4>
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
                <h4><b>2</b></h4>
            </div>
            <div class="col">
                <h4><span class="text-danger"><b>Rp 5.000.000</b></span></h4>
            </div>
        </div>
      </div>
      <div class="text-left" style="margin: 50px auto; ">
          <h5 class="text-danger font-weight-bold">
              Cara Pembayaran
          </h5>
          <span class="d-flex">Transfer ke</span>
          <span class="d-flex">Akun Bank : &nbsp; <b>BCA</b></span>
          <span class="d-flex">No. Rekening : &nbsp; <b>7012345678907</b></span>
      </div>

        <div class="d-flex justify-content-center my-5">
            <router-link to="uploadBukti" class="text-light text-decoration-none">
                <button class="btn btn-danger px-4">
                    Bayar Sekarang
                </button>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>

.card button:hover {
  opacity: 0.7;
}
</style>
