<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karam : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
    const userName = this.$route.params.id;
    // axios.get("https://api.hnpwa.com/v0/user/" + userName + ".json");
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
