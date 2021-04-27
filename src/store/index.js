import Vue from "vue";
import Vuex from "vuex";
import rockOn from "../../public/images/rockOn.svg";
import scissors from "../../public/images/scissors.svg";
import paper from "../../public/images/paper.svg";
// import cookies from "vue-cookies";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loginToken: "",
    cpuSelection: "",
    userSelection: "",
    gameWinner: "",
    gameOver: false,
    userLoss: 0,
    userWin: 0,
    tieGame: 0,
    selections: [
      {
        name: "rock",
        img: `<img  width ="200px" src="${rockOn}" alt="rock on hands icon">`,
        beats: "scissors",
        src: `${rockOn}`,
      },
      {
        name: "paper",
        img: `<img width ="200px" src="${paper}" alt="paper icon">`,
        beats: "rock",
        src: `${paper}`,
      },
      {
        name: "scissors",
        img: `<img width ="200px" src="${scissors}" alt="scissors icon">`,
        beats: "paper",
        src: `${scissors}`,
      },
    ],
  },

  mutations: {
    setLoginToken(state, data) {
      state.loginToken = data;
    },
    updateCpuSelection(state, data) {
      state.cpuSelection = data;
    },
    updateUserSelection(state, data) {
      state.userSelection = data;
    },
    updateUserLoss(state, data) {
      state.userLoss = data;
    },
    updateUserWin(state, data) {
      state.userWin = data;
    },
    updateTieGame(state, data) {
      state.tieGame = data;
    },
    updateGameWinner(state, data) {
      state.gameWinner = data;
    },
  },
  actions: {},
  getters: {
    //     sendLoginToken(state){
    // return state.loginToken
    //     }
  },
});
