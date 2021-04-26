<template>
  <div>
    <h1>Rock, Paper, Scissors!</h1>
    <h2>Please login to play:</h2>
    <br />
    <p>
      (This site uses an API for a fake login - please use the email
      <b>eve.holt@reqres.in</b> to login. The password can be anything you
      choose)
    </p>
    <br />
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "login",
  components: { LoginForm },
};
</script>

<style scoped></style>
