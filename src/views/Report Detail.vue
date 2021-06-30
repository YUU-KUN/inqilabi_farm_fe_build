<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Detail Proses Laporan</b></h2> 
      <div class="text-center" style="margin: 50px auto; padding: 0 100px">
        <div class="align-items-center my-4">
          <div class="card mb-4" v-if="foto_hewan">
            <table>
              <div class="text-center" style="margin: 50px auto;">
                <div class="row">
                  <div class="col">
                      <h5>Proses</h5>
                  </div>
                  <div class="col">
                      <h5>Atas Nama</h5>
                  </div>
                  <div class="col">
                      <h5>Jenis Hewan</h5>
                  </div>
                  <div class="col">
                      <h5>Berat</h5>
                  </div>
                  <div class="col">
                      <h5>Foto</h5>
                  </div>
                  <div class="col">
                      <h5>Aksi</h5>
                  </div>
                </div>
                <br>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col">
                      <h5>Foto Hewan Kurban</h5>
                    </div>
                    <div class="col">
                        <h5>Transbara</h5>
                    </div>
                    <div class="col">
                        <h5>Kambing / Domba Super</h5>
                    </div>
                    <div class="col">
                        <h5>25 Kg</h5>
                    </div>
                    <div class="col">
                      <img src="../../public/img/patungan_sapi.svg" alt="Foto Hewan Kurban" width="100px">
                    </div>
                    <div class="col">
                      <button class="btn btn-danger text-light font-weight-bold mx-1">Edit</button>
                      <router-link to="reportCreate">
                        <button class="btn btn-success text-light font-weight-bold mx-1">Laporkan</button>
                      </router-link>
                    </div>
                </div>
              </div>
            </table>
          </div>
          <div class="card mb-4" v-if="penyembelihan_hewan">
            <table>
              <div class="text-center" style="margin: 50px auto;">
                <div class="row">
                  <div class="col">
                      <h5>Proses</h5>
                  </div>
                  <div class="col">
                      <h5>Penyembelih</h5>
                  </div>
                  <div class="col">
                      <h5>Hari</h5>
                  </div>
                  <div class="col">
                      <h5>Pukul</h5>
                  </div>
                  <div class="col">
                      <h5>Foto</h5>
                  </div>
                  <div class="col">
                      <h5>Aksi</h5>
                  </div>
                </div>
                <br>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col">
                      <h5>Foto Penyembelihan Hewan Kurban</h5>
                    </div>
                    <div class="col">
                        <h5>Ust. Waindika</h5>
                    </div>
                    <div class="col">
                        <h5>Senin, 13 Juni 2021</h5>
                    </div>
                    <div class="col">
                        <h5>10:00 WIB</h5>
                    </div>
                    <div class="col">
                      <img src="../../public/img/patungan_sapi.svg" alt="Foto Hewan Kurban" width="100px">
                    </div>
                    <div class="col">
                      <button class="btn btn-danger text-light font-weight-bold mx-1">Edit</button>
                      <router-link to="reportCreate">
                        <button class="btn btn-success text-light font-weight-bold mx-1">Laporkan</button>
                      </router-link>
                    </div>
                </div>
              </div>
            </table>
          </div>
          <div class="card mb-4" v-if="pembagian_hewan">
            <table>
              <div class="text-center" style="margin: 50px auto;">
                <div class="row">
                  <div class="col">
                      <h5>Proses</h5>
                  </div>
                  <div class="col">
                      <h5>Lokasi Pembagian</h5>
                  </div>
                  <div class="col">
                      <h5>Penanggung Jawab</h5>
                  </div>
                  <div class="col">
                      <h5>Hari</h5>
                  </div>
                  <div class="col">
                      <h5>Foto</h5>
                  </div>
                  <div class="col">
                      <h5>Aksi</h5>
                  </div>
                </div>
                <br>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col">
                      <h5>Foto Pembagian Hewan Kurban</h5>
                    </div>
                    <div class="col">
                        <h5>Dampit</h5>
                    </div>
                    <div class="col">
                        <h5>Ust. Waindika</h5>
                    </div>
                    <div class="col">
                        <h5>Senin, 13 Juni 2021</h5>
                    </div>
                    <div class="col">
                      <img src="../../public/img/patungan_sapi.svg" alt="Foto Hewan Kurban" width="100px">
                    </div>
                    <div class="col">
                      <button class="btn btn-danger text-light font-weight-bold mx-1">Edit</button>
                      <router-link to="reportCreate">
                        <button class="btn btn-success text-light font-weight-bold mx-1">Laporkan</button>
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
      foto_hewan: true,
      penyembelihan_hewan: true,
      pembagian_hewan: true,
    };
  },
};
</script>
