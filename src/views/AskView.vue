<template>
  <div>
    <!-- <div v-for="ask in askList">{{ ask.title }}</div> -->
    <!-- <div v-for="ask in this.$store.state.asks">{{ ask.title }}</div> -->
    <div v-for="ask in fetchAsk">{{ ask.title }}</div>
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

<style></style>
