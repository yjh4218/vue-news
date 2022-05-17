import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response);
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        console.log(response);
        context.commit("SET_JOBS", response.data);
      })
      .catch((error) => console.log(error));
  },
  // FETCH_ASKS(context) {
  //   fetchAskList()
  //     .then((response) => {
  //       console.log(response);
  //       context.commit("SET_ASKS", response.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_ASKS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch((error) => console.log(error));
  },
};
