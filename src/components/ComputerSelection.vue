<template>
  <section>
    <div id="cpuSelectionContainer">
      <img :src="`${cpuSelection}`" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "computer-selection",
  computed: {
    cpuSelection() {
      return this.$store.state.cpuSelection.src;
    },
    userSelection() {
      return this.$store.state.userSelection;
    },
    selectionOptions() {
      return this.$store.state.selections;
    },
  },
  methods: {
    displayCpuSelecton() {
      document.getElementById(
        "cpuSelectionContainer"
      ).innerHTML = `${this.cpuSelection.img}`;
    },
    // udpateCpuSelection(selection) {
    //   console.log(selection);
    //   return this.$store.commit("updateCpuSelection", this.randomSelection);
    // },
    //     userSelects(selection) {
    //    this.$store.commit("updateUserSelection", selection);
    //   document.getElementById(
    //     "userSelectionContainer"
    //   ).innerHTML = `${this.userSelection}`;
    //  },
    // cpuSelects(selection) {
    //   this.$store.commit("updateCpuSelection", this.randomSelection);
    //   // this.cpuSelection = this.randomSelection;
    //   // console.log(this.cpuSelection);
    // },
  },
};
</script>

<style scoped>
#cpuSelectionContainer {
  margin-top: 75px;
  height: 300px;
  width: 300px;
  border: 1px solid black;
  display: grid;
  place-items: center;
}
img {
  width: 200px;
}
section {
  display: grid;
  place-items: center;
}
</style>
