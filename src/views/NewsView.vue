<template>
  <div>
    <div v-for="news in this.$store.state.news">{{ news.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    // actions -> mutations -> state
    // 비동기 처리는 actions에서 해야 한다.
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
