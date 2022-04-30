import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

// actions -> mutations -> state
// 비동기 처리는 actions에서 해야 한다.
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  getters: {
    fetchAsk(state) {
      return state.asks;
    },
    fetchNews(state) {
      return state.news;
    },
    fetchJobs(state) {
      return state.jobs;
    },
  },
  mutations: mutations,
  actions: actions,
});
