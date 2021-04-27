<template>
  <section>
    <div id="buttonsContainer">
      <button
        v-for="selection in selectionOptions"
        :key="selection.name"
        @click="userSelects(selection)"
      >
        {{ selection.name }}
      </button>
    </div>
    <!-- <div>
      <button id="rockBtn" @click="userSelects(selectRock.img)">
        Rock
      </button>
      <button id="paperBtn" @click="userSelects(selectPaper.img)">Paper</button>
      <button id="scissorsBtn" @click="userSelects(selectScissors.img)">
        Scissors
      </button>
    </div> -->
    <div id="userSelectionContainer"></div>
  </section>
</template>

<script>
export default {
  name: "user-selection",
  computed: {
    userSelection() {
      return this.$store.state.userSelection;
    },
    cpuSelection() {
      return this.$store.state.cpuSelection;
    },
    gameOver() {
      return this.$store.state.gameOver;
    },
    userWin() {
      return this.$store.state.userWin;
    },
    userLoss() {
      return this.$store.state.userLoss;
    },
    tieGame() {
      return this.$store.state.tieGame;
    },
    selectRock() {
      return this.$store.state.selectRock;
    },
    selectPaper() {
      return this.$store.state.selectPaper;
    },
    selectScissors() {
      return this.$store.state.selectScissors;
    },
    selectionOptions() {
      return this.$store.state.selections;
    },
  },
  methods: {
    randomSelection() {
      let randomSelect = Math.floor(
        Math.random() * this.selectionOptions.length
      );
      let randomSelection = this.selectionOptions[randomSelect];
      this.$store.commit("updateCpuSelection", randomSelection);
    },
    userSelects(selection) {
      this.$store.commit("updateUserSelection", selection);
      document.getElementById(
        "userSelectionContainer"
      ).innerHTML = `${this.userSelection.img}`;
      this.randomSelection();
      if (this.userSelection.name === this.cpuSelection.name) {
        let usersTie = this.tieGame + 1;
        this.$store.commit("updateTieGame", usersTie);
        this.$store.commit("updateGameWinner", "It's a tie!");
      } else if (this.userSelection.name === this.cpuSelection.beats) {
        console.log(this.userLoss);
        let userLoses = this.userLoss + 1;
        this.$store.commit("updateUserLoss", userLoses);
        this.$store.commit("updateGameWinner", "Computer wins!");
      } else if (this.userSelection.beats === this.cpuSelection.name) {
        console.log(this.userWin);
        let userWins = this.userWin + 1;
        this.$store.commit("updateUserWin", userWins);
        this.$store.commit("updateGameWinner", "You win!");
      }
    },
  },
};
</script>

<style scoped>
#userSelectionContainer {
  height: 300px;
  width: 300px;
  border: 1px solid black;
  display: grid;
  place-items: center;
}
section {
  display: grid;
  place-items: center;
}
button {
  width: 80px;
  height: 40px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 2px 2px #888;
}
#buttonsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 15px;
}
/* img {
  width: 300px;
} */
</style>
