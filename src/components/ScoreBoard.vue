<template>
  <div id="scoreboardContainer">
    <div class="scoreContainer">
      <h3>Your Score</h3>
      <div class="scoreGridContainer">
        <div class="scoreRow">
          <h4>Wins</h4>
          <p class="winAmt"></p>
        </div>
        <div class="scoreRow">
          <h4>Losses</h4>
          <p class="lossAmt"></p>
        </div>
        <div class="scoreRow">
          <h4>Ties</h4>
          <p class="tieAmt"></p>
        </div>
      </div>
    </div>
    <!-- <div class="scoreContainer">
      <h3>Computer Score</h3>
      <div class="scoreGridContainer">
        <div class="scoreRow">
          <h4>Wins</h4>
          <p class="winAmt"></p>
        </div>
        <div class="scoreRow">
          <h4>Losses</h4>
          <p class="lossAmt"></p>
        </div>
        <div class="scoreRow">
          <h4>Ties</h4>
          <p class="tieAmt"></p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "score-board",
};
</script>

<style scoped>
.scoreContainer {
  height: 60%;
}
h3 {
  text-decoration: underline;
}
#scoreboardContainer {
  height: 200px;
  display: grid;
  grid-auto-flow: column;
  place-items: center;
}
.scoreGridContainer {
  height: 100%;
  display: grid;
  /* border: 1px solid black; */
  width: 300px;
}
.scoreRow {
  display: grid;
  grid-template-columns: 1fr 3fr;

  border: 1px solid black;
}
.winAmt {
  height: 100%;
  /* border-left: 1px solid black; */
  display: grid;
  place-items: center;
}
/* .lossAmt{
  border-bottom: 1px solid black;
} */
h4 {
  border-right: 1px solid black;
  height: 100%;
}
</style>
