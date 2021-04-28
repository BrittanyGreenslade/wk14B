<template>
  <div>
    <!-- shows logging in msg or error msg or redirecting msg -->
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
      <!-- calls attemptLogin function -->
      <input @click="attemptLogin" type="button" id="loginBtn" value="Login" />
    </form>
  </div>
</template>

<script>
//need axios to make post request
//need cookies to store login token
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "login-form",
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
  //only needed on this page
  data() {
    return {
      loginStatus: "",
    };
  },
  //I took this out because I called it in the attemptLogin method but I need to study a bit
  //more about when to use mounted
  // mounted() {
  //   if (this.loginToken) {
  //     this.navigateToGame();
  //   }
  // },

  methods: {
    //this method is called below when user gets a login token
    navigateToGame() {
      this.$router.push({ name: "Game" });
    },
    //this updates the loginToken variable with the cookie
    updateLoginToken() {
      let updatedLoginToken = cookies.get("loginToken");
      this.$store.commit("setLoginToken", updatedLoginToken);
    },
    //attemptLogin fn
    attemptLogin() {
      this.loginStatus = "Logging in...";
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          //gets the data email & pw based on what the API docs say
          data: {
            email: document.getElementById("emailInput").value,
            password: document.getElementById("passwordInput").value,
          },
        })
        .then((res) => {
          //navigates to game page but make it chill
          setTimeout(this.navigateToGame, 1500);
          this.loginStatus = "You have logged in! Redirecting..";
          //sets the cookies
          cookies.set("loginToken", res.data.token);
          //calls the updateLoginToken fn which gets the cookie and sends it to loginToken in store
          this.updateLoginToken();
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
