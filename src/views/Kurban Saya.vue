<template>
  <div style="justify-content:center; margin:50px auto; padding: 0 100px; background-color: white">
    <h2><b>Laporan</b></h2> 
      <div class="text-center" style="margin: 50px auto; ">
        <div class="align-items-center my-4">
          <div class="card p-3">
            <div class="table-responsive">
                  <b-table
                    borderless
                    id="my-table"
                    class="table table-bordered"
                    :items="reports"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :fields="fields"
                  >

                      <template #head(tanggal)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(atas_nama)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(jenis_hewan)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(tipe)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(jumlah)="data">
                        <h4>{{ data.label}}</h4>
                      </template>>
                      <template #head(proses_kurban)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(status)="data">
                        <h4>{{ data.label}}</h4>
                      </template>
                      <template #head(aksi)="data">
                        <h4>{{ data.label}}</h4>
                      </template>

                      <template v-slot:cell(tanggal)="data">
                          <h5 class="font-weight-normal">{{data.item.created_at | formatDate}}</h5>
                      </template>
                      <template #cell(atas_nama)="data">
                          <h5 class="font-weight-normal">{{ data.item.nama}}</h5>
                      </template>
                      <template #cell(jenis_hewan)="data">
                          <h5><span class="font-weight-normal">{{data.item.package.nama}}</span> <span class="text-danger font-weight-bold"> {{data.item.package.variant}}</span></h5>
                      </template>
                      <template #cell(tipe)="data">
                          <h5 class="font-weight-normal" v-if="data.item.package.tipe == 'kambing_jantan'">Jantan</h5>
                          <h5 class="font-weight-normal" v-if="data.item.package.tipe == 'sapi'">Sapi</h5>
                      </template>
                      <template #cell(jumlah)="data">
                        <h5 class="font-weight-normal">{{data.item.jumlah}}</h5>
                      </template>
                      <template #cell(proses_kurban)="data">
                        <h5 class="font-weight-normal" v-if="data.item.proses == 'inqilabi_farm'">Inqilabi Farm</h5>
                        <h5 class="font-weight-normal" v-else>Dikirim</h5>
                      </template>
                      <template #cell(status)="data">
                          <span v-if="data.item.report">
                            <h5 class="font-weight-normal" v-if="data.item.report.status == 'Foto Hewan'">Foto Hewan</h5>
                            <!-- <h5 class="font-weight-normal" v-else-if="data.item.report.status == 'Foto Hewan'">Foto Hewan</h5> -->
                            <h5 class="font-weight-normal" v-else>-</h5>
                          </span>
                          <span v-else>-</span>
                      </template>
                      <template #cell(aksi)="data">
                            <button @click="detailReport(data.item.id)" class="btn btn-danger text-light font-weight-bold">Detail</button>
                      </template>
                  </b-table>
                  <br>
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    align="center"
                  ></b-pagination>
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
      reports: [],
      dataPembayaran: '',
      currentPage: 1,
      perPage: 10,
      fields: [
        {key: 'tanggal', label: 'Tanggal'},
        {key: 'atas_nama', label: 'Atas Nama'},
        {key: 'jenis_hewan', label: 'Jenis Hewan'},
        {key: 'tipe', label: 'Tipe'},
        {key: 'jumlah', label: 'Jumlah'},
        {key: 'proses_kurban', label: 'Proses Kurban'},
        {key: 'status', label: 'Status'},
        {key: 'aksi', label: 'Aksi'},
      ],
    };
  },
  methods: {
    getReports() {
      this.axios.get('myReport').then(response => {
        this.reports = response.data
      }).catch(error => {
        console.log(error.response);
      })
    },
    detailReport(id) {
        this.$router.push({name: 'Report', params: {id_pembayaran: id}})
    }
  },
  computed: {
    rows() {
        return this.reports.length
    },
  },
  mounted() {
    this.getReports()
  }
};
</script>
