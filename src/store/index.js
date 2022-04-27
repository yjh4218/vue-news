import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "../api/index.js";

Vue.use(Vuex);

// actions -> mutations -> state
// 비동기 처리는 actions에서 해야 한다.
export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response);
          context.commit("SET_NEWS", response.data);
          this.newsList = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
});
