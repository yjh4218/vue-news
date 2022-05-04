<template>
  <div>
    <section>
      <!-- 질문 상세정보 -->
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchdItem.user}`">
            {{ fetchdItem.user }}</router-link
          >
          <div class="time">{{ fetchdItem.time_ago }}</div>
        </div>
      </div>
    </section>
    <h2>{{ fetchdItem.title }}</h2>
    <section class="content-container">
      <!-- 질문 댓글 -->
      <div v-html="fetchdItem.content"></div>
    </section>

    <!-- <div>{{ fetchdItem.content }}</div> -->
    <!-- <p>created : {{ itemInfo.created }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchdItem"]),
    // itemInfo() {
    //   return this.$store.state.item;
    // },
  },
  created() {
    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
    const itemId = this.$route.params.id;
    // axios.get("https://api.hnpwa.com/v0/user/" + userName + ".json");
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
.content-container {
  padding: 0.5rem;
}
</style>
