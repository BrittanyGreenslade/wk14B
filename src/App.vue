<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link>
      |
      <!-- if you add an event to a non-native HTMtag, you must use .native for it -->
      <router-link @click.native.stop="notifyLogin" to="/game"
        >Game</router-link
      >
      <span v-if="this.loginToken">
        |
        <router-link @click.native="logout" to="/login">Logout</router-link>
      </span>
    </div>
    <div id="alertMessage"></div>
    <br /><br />
    <h1>Rock, Paper, Scissors!</h1>

    <br />

    <router-view />
  </div>
</template>
<script>
import cookies from "vue-cookies";
export default {
  name: "App",
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
  methods: {
    logout() {
      cookies.remove("loginToken");
      this.$store.commit("setLoginToken", undefined);
      console.log(this.loginToken);
    },
    navigateToHome() {
      this.$router.push({ name: "Login" });
    },
    notifyLogin() {
      if (!this.loginToken) {
        this.navigateToHome();
        document.getElementById(
          "alertMessage"
        ).innerHTML = `<h3>Please login to play</h3>`;
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
