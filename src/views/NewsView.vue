<template>
  <div>
    <list-item></list-item>
    <!-- ● 리팩토링 적용 후 코드 -->
    <!-- <ul class="news-list">
      <li v-for="news in this.$store.state.news" class="post"> -->
    <!-- 포인트 영역 -->
    <!-- <div class="points">
          {{ news.points }}
        </div> -->
    <!-- 기타 정보 영역 -->
    <!-- <div>
          <p class="news-title">
            <a v-bind:href="news.url"> {{ news.title }}</a>
          </p>
          <small class="link-text">
            {{ news.time_ago }} by
            <router-link v-bind:to="`/user/${news.user}`" class="link-text">
              {{ news.user }}
            </router-link>
          </small>
        </div> -->
    <!--         
      </li>
    </ul> -->

    <!-- ● 리팩토링 적용 전 코드 -->
    <!-- <div v-for="news in this.$store.state.news">{{ news.title }}</div> -->
    <!-- <p v-for="news in fetchNews">
      <a v-bind:href="news.url"> {{ news.title }}</a>
      <small>
        {{ news.time_ago }} by
        <router-link v-bind:to="`/user/${news.user}`">{{
          news.user
        }}</router-link>
      </small>
    </p> -->
    <!-- 동적 라우팅 -->
    <!-- <router-link v-bind:to="'/user/' + news.user">{{ news.user }}</router-link> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(["fetchNews"]),
  // },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_NEWS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
    // actions -> mutations -> state
    // 비동기 처리는 actions에서 해야 한다.
    // this.$store
    //   .dispatch("FETCH_NEWS")
    //   .then(() => {
    //     console.log("fetched");
    //     bus.$emit("end:spinner");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style scoped>
/* .news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>
