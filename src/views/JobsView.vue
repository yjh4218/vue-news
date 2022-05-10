<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list"> -->
    <!-- <li v-for="job in fetchJobs" class="post"> -->
    <!-- 포인트 영역 -->
    <!-- <div class="points">
          {{ job.points || 0 }}
        </div> -->
    <!-- 기타 정보 영역 -->
    <!-- <div>
          <p class="job-title">
            <a v-bind:href="job.url"> {{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by -->
    <!-- <router-link v-bind:to="`/user/${job.user}`" class="link-text">
             -->
    <!-- {{ job.domain }} -->
    <!-- </router-link> -->
    <!-- <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div> -->
    <!-- </li>
    </ul> -->
    <!-- <div v-for="job in jobList">{{ job.title }}</div> -->
    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <!-- <p v-for="job in fetchJobs">
      <a v-bind:href="job.url"> {{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import { fetchJobsList } from "../api/index.js";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(["fetchJobs"]),
  // },
  // data() {
  //   return {
  //     jobList: [],
  //   };
  // },
  // created() {
  //   // fetchJobsList()
  //   //   .then((response) => (this.jobList = response.data))
  //   //   .catch((error) => console.log(error));
  //   this.$store.dispatch("FETCH_JOBS");
  // },
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
