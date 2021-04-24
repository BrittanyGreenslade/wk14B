<template>
  <div>
    <h1>Rock, Paper, Scissors!</h1>
    <h2>Please login to play:</h2>
    <form action="javascript:void(0)">
      <input type="text" name="email" id="emailInput" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="passwordInput"
        placeholder="Password"
      />
      <input type="button" id="loginBtn" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped></style>
