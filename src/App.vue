<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link>
      |
      <router-link @click="requestReroute" id="redirectGame" to="/game"
        >Game</router-link
      >
    </div>
    <h1>Rock, Paper, Scissors!</h1>
    <h2>Please login to play</h2>
    <br />
    <div id="alertMessage"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
  // methods: {
  //   requestReroute() {
  //     if (this.loginToken === null) {

  //     }
  //   },
  // },
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
