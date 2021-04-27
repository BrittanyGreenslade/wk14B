<template>
  <div>
    <h4 id="loginStatus">{{ loginStatus }}</h4>
    <form action="javascript:void(0)">
      <input type="text" name="email" id="emailInput" placeholder="Email" />
      <br />
      <input
        type="password"
        name="password"
        id="passwordInput"
        placeholder="Password"
      />
      <br /><br />
      <input @click="attemptLogin" type="button" id="loginBtn" value="Login" />
    </form>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "login-form",
  data() {
    return {
      loginStatus: "",
      loginToken: cookies.get("loginToken"),
    };
  },
  mounted() {
    if (this.loginToken) {
      this.navigateToGame();
    }
  },

  methods: {
    navigateToGame() {
      this.$router.push({ name: "Game" });
      // this.window.open("../views/Game.vue");
    },
    // navigateToHome() {
    //   this.$router.push({ name: "Login" });
    // },

    attemptLogin() {
      this.loginStatus = "Logging in...";
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            email: document.getElementById("emailInput").value,
            password: document.getElementById("passwordInput").value,
          },
        })
        .then((res) => {
          setTimeout(this.navigateToGame, 1500);
          this.loginStatus = "You have logged in! Redirecting..";
          let updatedLoginToken = cookies.set("loginToken", res.data.token);
          this.loginToken = updatedLoginToken;
          // setTimeout(this.navigate, 2000);
        })
        .catch((err) => {
          console.log(err);
          this.loginStatus = "Sorry, please retry.";
        });
    },
  },
};
</script>

<style scoped></style>
