<template>
  <main>
    <div>
      <score-board />
    </div>
    <div id="playersSelections">
      <user-selection />
      <computer-selection />
    </div>
    <footer>
      <h2 id="winContainer">{{ gameWinner }}</h2>
    </footer>
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
    gameWinner() {
      return this.$store.state.gameWinner;
    },
  },
};
</script>

<style scoped>
#playersSelections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 5vh;
}

main {
  display: grid;
  place-items: center;
}
footer {
  height: 10vh;
}
</style>
