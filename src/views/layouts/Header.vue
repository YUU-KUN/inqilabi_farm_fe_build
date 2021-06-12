<template>
  <nav
    id="navbar"
    class="navbar justify-content-between"
    style="padding: 0 100px"
  >
    <img class="navbar-brand" src="../../../public/img/logo.png" alt="logo" />

    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-dark">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="choosePackage" class="nav-link text-dark">Paket Kurban</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav-item">
        <router-link to="login" class="nav-link text-dark">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav-item">
        <router-link to="register" class="nav-link text-dark">Register</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav-item">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <b-avatar size="sm"></b-avatar>
            Transbara
          </template>
          <!-- <router-link to="register" class="nav-link">{{username}}</router-link> -->

          <span>
            <b-dropdown-item>
              <router-link style="text-decoration: none; color: black" to=""
                >Kurban Anda</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link style="text-decoration: none; color: black" to="checkout"
                >Pembayaran</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link style="text-decoration: none; color: black" to=""
                >Profile</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item>
              <span @click="logout">Keluar</span>
            </b-dropdown-item>
          </span>

          <span style="text-align:center">
            <div class="col">
              <b-icon icon="exclamation-triangle" variant="danger"></b-icon>
              <!-- &#x1f50d;<span class="sr-only">Search</span> -->
            </div>
            <div class="col">
              <b-dropdown-text style="width: 240px;">
                Profil anda belum lengkap
              </b-dropdown-text>
            </div>
            <b-button variant="warning" type="button" block
              >Lengkapi Profile
            </b-button>
          </span>
        </b-dropdown>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  computed: {
    username() {
      return this.$store.getters.userDetail.name;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style></style>
