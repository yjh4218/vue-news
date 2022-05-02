<template>
  <div>
    <!-- <div v-for="news in this.$store.state.news">{{ news.title }}</div> -->
    <p v-for="news in fetchNews">
      <a v-bind:href="news.url"> {{ news.title }}</a>
      <small>
        {{ news.time_ago }} by
        <!-- 동적 라우팅 -->
        <!-- <router-link v-bind:to="'/user/' + news.user">{{ news.user }}</router-link> -->
        <router-link v-bind:to="`/user/${news.user}`">{{
          news.user
        }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchNews"]),
  },
  created() {
    // actions -> mutations -> state
    // 비동기 처리는 actions에서 해야 한다.
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
