<template>
  <section>
    <div id="buttonsContainer">
      <!-- sends user's selection from var selectionOptions as an argument
      in userSelects -->
      <!-- for loop makes button for all selections in selectionOptions -->
      <button
        v-for="selection in selectionOptions"
        :key="selection.name"
        @click="userSelects(selection)"
      >
        {{ selection.name }}
      </button>
    </div>
    <!-- img of user's selection is put here when chosen -->
    <div id="userSelectionContainer"></div>
  </section>
</template>

<script>
export default {
  name: "user-selection",
  //grabs all values in their current state from the store
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
    // selectRock() {
    //   return this.$store.state.selectRock;
    // },
    // selectPaper() {
    //   return this.$store.state.selectPaper;
    // },
    // selectScissors() {
    //   return this.$store.state.selectScissors;
    // },
    selectionOptions() {
      return this.$store.state.selections;
    },
  },
  methods: {
    //makes computer's selection random out of the total selection options based on 0-2
    //in the array
    randomSelection() {
      let randomSelect = Math.floor(
        Math.random() * this.selectionOptions.length
      );
      //random selection is equal to this.selectionOptions array at element [randomSelect]
      //set above in math.random
      let randomSelection = this.selectionOptions[randomSelect];
      //updates the CPU selection with random element
      this.$store.commit("updateCpuSelection", randomSelection);
    },
    //selection comes from the button that is clicked at the top
    userSelects(selection) {
      //updates the userSelecion with this selection
      this.$store.commit("updateUserSelection", selection);
      //puts the image onto the userSelectionContainer from the selection object
      document.getElementById(
        "userSelectionContainer"
      ).innerHTML = `${this.userSelection.img}`;
      //runds the CPU selection function
      this.randomSelection();
      //decides game winner/loser/tie
      if (this.userSelection.name === this.cpuSelection.name) {
        //if scores are the same, tie
        let usersTie = this.tieGame + 1;
        this.$store.commit("updateTieGame", usersTie);
        this.$store.commit("updateGameWinner", "It's a tie!");
      } else if (this.userSelection.name === this.cpuSelection.beats) {
        //when "beats" is equal to "name", the selection with "beats"
        //wins over the selection with "name"
        let userLoses = this.userLoss + 1;
        //udpates loss part of scoreboard
        this.$store.commit("updateUserLoss", userLoses);
        //updates game winner msg
        this.$store.commit("updateGameWinner", "Computer wins!");
      } else if (this.userSelection.beats === this.cpuSelection.name) {
        //when "beats" is equal to "name", the selection with "beats"
        //wins over the selection with "name"
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
