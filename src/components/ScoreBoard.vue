<template>
  <section>
    <div id="scoreboardContainer">
      <h3>User Score</h3>
      <div class="scoreContainer">
        <div class="scoreGridContainer">
          <div class="scoreRow">
            <h4>Wins</h4>
            <!-- these things updated when state is updated -->
            <p class="winAmt">{{ userWin }}</p>
          </div>
          <div class="scoreRow">
            <h4>Losses</h4>
            <p class="lossAmt">{{ userLoss }}</p>
          </div>
          <div class="scoreRow">
            <h4>Ties</h4>
            <p class="tieAmt">{{ tieGame }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    // userSelection() {
    //   return this.$store.state.userSelection;
    // },
    // cpuSelection() {
    //   return this.$store.state.cpuSelection;
    // },
    userWin() {
      return this.$store.state.userWin;
    },
    userLoss() {
      return this.$store.state.userLoss;
    },
    tieGame() {
      return this.$store.state.tieGame;
    },
  },
};
</script>

<style scoped>
.scoreContainer {
  height: 80%;
}
h3 {
  text-decoration: underline;
}

#scoreboardContainer {
  height: 200px;
  display: grid;
  grid-template-rows: 1fr 4fr;
  place-items: center;
}
.scoreGridContainer {
  height: 100%;
  display: grid;

  width: 300px;
}
.scoreRow {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  border: 1px solid black;
}
.winAmt,
.lossAmt,
.tieAmt {
  height: 100%;
  border-left: 1px solid black;
  display: grid;
  place-items: center;
}
</style>
