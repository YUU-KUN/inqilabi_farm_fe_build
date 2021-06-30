<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Laporan</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="align-items-center my-4">
          <div class="card">
            <table>
              <div class="text-center" style="margin: 50px auto; ">
                <div class="row">
                  <div class="col">
                      <h5>Tanggal</h5>
                  </div>
                  <div class="col">
                      <h5>Atas Nama</h5>
                  </div>
                  <div class="col">
                      <h5>Jenis Hewan</h5>
                  </div>
                  <div class="col">
                      <h5>Tipe</h5>
                  </div>
                  <div class="col">
                      <h5>Jumlah</h5>
                  </div>
                  <div class="col">
                      <h5>Proses Kurban</h5>
                  </div>
                  <div class="col">
                      <h5>Status</h5>
                  </div>
                  <div class="col">
                      <h5>Aksi</h5>
                  </div>
                </div>
                <br>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col">
                      12/6/2021
                    </div>
                    <div class="col">
                        <h5>Transbara</h5>
                    </div>
                    <div class="col">
                        <h5>Kambing / Domba Super</h5>
                    </div>
                    <div class="col">
                        <h5>Jantan</h5>
                    </div>
                    <div class="col">
                        <h5>1</h5>
                    </div>
                    <div class="col">
                      <h5>Inqilabi Farm</h5>
                    </div>
                    <div class="col">
                      <h5>Penyembelihan</h5>
                    </div>
                    <div class="col">
                      <router-link to="reportDetail">
                        <button class="btn btn-danger text-light font-weight-bold">Detail</button>
                      </router-link>
                    </div>
                </div>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col">
                      12/6/2021
                    </div>
                    <div class="col">
                        <h5>Transbara</h5>
                    </div>
                    <div class="col">
                        <h5>Kambing / Domba Super</h5>
                    </div>
                    <div class="col">
                        <h5>Jantan</h5>
                    </div>
                    <div class="col">
                        <h5>1</h5>
                    </div>
                    <div class="col">
                      <h5>Dikirim</h5>
                    </div>
                    <div class="col">
                      <h5>Sampai di Lokasi</h5>
                    </div>
                    <div class="col">
                      <router-link to="reportDetail">
                        <button class="btn btn-danger text-light font-weight-bold">Detail</button>
                      </router-link>
                    </div>
                </div>
              </div>
            </table>
          </div>
        </div>
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
