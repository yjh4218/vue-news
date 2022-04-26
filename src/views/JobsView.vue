<template>
  <div>
    <div v-for="job in jobList">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobList: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
