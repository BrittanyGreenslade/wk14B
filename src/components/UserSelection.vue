<template>
  <div id="userSelectionContainer">
    <img :src="`${userSelection}`" />
  </div>
</template>

<script>
export default {
  name: "user-selection",
  computed: {
    userSelection() {
      return this.$store.state.userSelection;
    },
  },
};
</script>

<style scoped></style>
