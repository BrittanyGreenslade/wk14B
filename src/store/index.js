import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    cpuSelection: "",
    userSelection: "",
    gameWinner: "",
    gameOver: true,
    userLoss: "",
    userWin: "",
    tieGame: "",
    selectRock: "'@/assets/rockOn.svg'",
    selectPaper: `@/assets/paper.svg`,
    selectScissors: `<img src = "../assets/scissors.svg", alt"scissors icon">`,
  },

  mutations: {
    userSelects(state, data) {
      state.userSelection = data;
    },
    setLoginToken(state, data) {
      state.loginToken = data;
    },
  },
  actions: {},
  modules: {},
});
