<template>
  <div>
    <!-- <div v-for="job in jobList">{{ job.title }}</div> -->
    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <p v-for="job in fetchJobs">
      <a v-bind:href="job.url"> {{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { fetchJobsList } from "../api/index.js";

export default {
  computed: {
    ...mapGetters(["fetchJobs"]),
  },
  // data() {
  //   return {
  //     jobList: [],
  //   };
  // },
  created() {
    // fetchJobsList()
    //   .then((response) => (this.jobList = response.data))
    //   .catch((error) => console.log(error));
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
