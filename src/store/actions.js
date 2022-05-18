import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  // 뉴스 조회
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response);
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  //직업 조회
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
  // 문의 조회
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
  // 사용자 조회
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },
  // 질문 내용 조회
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch((error) => console.log(error));
  },
  // News, Jobs, Ask HOC
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        console.log(data);
        commit("SET_LIST", data);
      })
      .catch((error) => console.log(error));
  },
};
