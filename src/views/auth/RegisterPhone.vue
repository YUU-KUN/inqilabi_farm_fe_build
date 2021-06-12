<template>
    <div>
        <div class="container-scroller">
          <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="main-panel">
              <div class="content-wrapper d-flex align-items-center ">
                <div class="row w-100">
                  <div class="col-lg-4 mx-auto">
                    <div class="auth-form-light text-center p-5">
                      <h4>Buat Akun</h4>
                      <!-- <h6 class="font-weight-light"></h6> -->
                      <br>
                      <form v-on:submit.prevent="Login">
                            <b-form-group>
                              <b-form-input id="name" v-model="name" placeholder="Nama" trim></b-form-input>
                            </b-form-group>

                            <b-form-group>
                              <b-form-input id="email" v-model="email" placeholder="Email" trim></b-form-input>
                            </b-form-group>
                            
                            <b-form-group>
                              <b-form-input id="password" v-model="password" placeholder="Password" trim></b-form-input>
                            </b-form-group>

                            <b-form-group>
                              <b-form-input id="confirm_password" v-model="confirm_password" placeholder="Konfirmasi Password" trim></b-form-input>
                            </b-form-group>
                            <br>
                            <!-- <br> -->
                            <b-button
                                variant="primary"
                                lg="4"
                                type="submit"
                                >Lanjutkan
                            </b-button>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- content-wrapper ends -->
          </div>
            <b-toast id="loadingToast" title="Processing Data" no-auto-hide>
                <b-spinner label="Spinning" variant="success"></b-spinner>
                <strong class="text-success">Loading...</strong>
            </b-toast>
            <!-- toast untuk tampilan message box -->
            <b-toast id="message" title="Message">
            <strong class="text-success">{{ message }}</strong>
            </b-toast>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        email: '',
        password: '',
        message: '',
      }
    },
    methods: {
        Login: function(){
            this.$bvToast.show("loadingToast")
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then((response) => {
                this.message = response.data.message
                this.$bvToast.hide("loadingToast")
                this.$bvToast.show("message")
                this.$router.push('/')
            })
            .catch(err => console.log(err))
        }
    }
}
</script>