<template>
  <section>
    <div id="cpuSelectionContainer">
      <!-- this was the only way I could figure out how to put the src here when it updates -->
      <!-- continuously -->
      <img :src="`${cpuSelection}`" alt="computer's selection" />
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
    //I'm confused about how I'm able to access inside of this cpuSelection as an object??
    //oh nvm I think it's because of my "randomSelection" function in userSelection which
    //chooses one random selection out of the array and then sends it to cpuSelection in store
    displayCpuSelecton() {
      document.getElementById(
        "cpuSelectionContainer"
      ).innerHTML = `${this.cpuSelection.img}`;
    },
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
