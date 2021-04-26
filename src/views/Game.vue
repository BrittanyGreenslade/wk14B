<template>
  <main>
    <div>
      <score-board />
    </div>
    <div id="buttonsContainer">
      <button @click="userSelects(selectRock)">Rock</button>
      <button @click="userSelects(selectPaper)">Paper</button>
      <button @click="userSelects(selectScissors)">Scissors</button>
    </div>
    <computer-selection />
    <user-selection />
    <div id="winContainer"></div>
  </main>
</template>

<script>
import ComputerSelection from "../components/ComputerSelection.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
import UserSelection from "../components/UserSelection.vue";
export default {
  components: { ScoreBoard, ComputerSelection, UserSelection },
  name: "game",
  computed: {
    cpuSelection() {
      return this.$store.state.cpuSelection;
    },
    userSelection() {
      return this.$store.state.userSelection;
    },
    gameWinner() {
      return this.$store.state.gameWinner;
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
    gameOver() {
      return this.$store.state.gameOver;
    },
    userWin() {
      return this.$store.state.userWin;
    },
    userLoss() {
      return this.store.state.cpuScore;
    },
  },

  methods: {
    userSelects(selection) {
      let selectedPlay = selection;
      console.log(selectedPlay);
      this.$store.commit("userSelects", selectedPlay);
    },
    takeTurn() {
      if (this.gameOver === false) {
        if (this.userWin < 3 && this.cpuScore < 3) {
          if (
            this.cpuSelection === this.selectRock &&
            this.userSelection === this.selectPaper
          ) {
            this.userWin += 1;
          } else if (
            this.cpuSelection === this.selectRock &&
            this.userSelection === this.selectScissors
          ) {
            this.userLoss += 1;
          } else if (this.cpuSelection === this.userSelection) {
            this.tieGame += 1;
          } else if (
            this.cpuSelection === this.selectScissors &&
            this.userSelection === this.selectPaper
          ) {
            this.userLoss += 1;
          } else if (
            this.cpuSelection === this.selectScissors &&
            this.userSelection === this.selectRock
          ) {
            this.userWin += 1;
          } else if (
            this.cpuSelection === this.selectPaper &&
            this.userSelection === this.selectRock
          ) {
            this.userLoss += 1;
          } else if (
            this.cpuSelection === this.selectPaper &&
            this.userSelection === this.selectScissors
          ) {
            this.userWin += 1;
          }
        }
      }
    },
    userWins() {
      if (this.userWins === 3) {
        document.getElementById("winContainer").innerHTML = "You win!";
        this.gameOver = true;
      }
    },
    userLost() {
      if (this.userLoss === 3) {
        document.getElementById("winContainer").innerHTML = "You lose!";
      }
    },
  },

  // takeTurn(selection) {
  //   if (selection === this.selectPaper) {
  //     this.userSelection === this.selectPaper;
  //   }
  // },

  // rockSelected() {
  //   this.userSelection === this.selectRock;
  // },
  // paperSelected() {
  //   this.userSelection === this.selectPaper;
  // },
  // scissorsSelected() {
  //   this.userSelection === this.selectScissors;
  // },
};
</script>

<style scoped>
#buttonsContainer {
  margin-top: 50px;
}
main {
  display: grid;
}
</style>
