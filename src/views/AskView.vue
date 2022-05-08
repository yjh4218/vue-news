<template>
  <div>
    <ul class="news-list">
      <li v-for="ask in fetchAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
        <!-- 
        <small>
          
        </small> -->
      </li>
    </ul>
    <!-- <div v-for="ask in askList">{{ ask.title }}</div> -->
    <!-- <div v-for="ask in this.$store.state.asks">{{ ask.title }}</div> -->
    <!-- <div v-for="ask in fetchAsk">
      <router-link v-bind:to="`/item/${ask.id}`"> {{ ask.title }}</router-link>
      <small>
        {{ ask.time_ago }} -->
    <!-- 동적 라우팅 -->
    <!-- <router-link v-bind:to="'/user/' + news.user">{{ news.user }}</router-link> -->
    <!-- </small>
    </div> -->
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchAsk"]),
    // ...mapGetters({
    //   fetchAsk: "fetchAsk",
    // }),
    // ...mapState({
    //   ask: (state) => state.asks,
    // }),
  },
  // data() {
  //   return {
  //     askList: {},
  //   };
  // },
  created() {
    // fetchAskList()
    //   .then((respnse) => (this.askList = respnse.data))
    //   .catch((error) => console.log(error));
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b338;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
