<template>
  <div id="cpuSelectionContainer">
    <div>{{ cpuSelection }}</div>
  </div>
</template>

<script>
export default {
  name: "computer-selection",
  computed: {
    cpuSelection() {
      return this.$store.state.cpuSelection;
    },
  },
};
</script>

<style scoped></style>
