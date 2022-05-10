<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="item-title">
            <template v-if="item.domain">
              <div>
                <a v-bind:href="item.url"> {{ item.title }} </a>
              </div>
            </template>
            <template v-else>
              <div>
                <router-link v-bind:to="`/item/${item.id}`">
                  {{ item.title }}
                </router-link>
              </div>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a v-else v-bind:href="item.url"> {{ item.title }}</a>
          </small>
        </div>
        <!-- 
        <small>
          
        </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    // actions -> mutations -> state
    // 비동기 처리는 actions에서 해야 한다.
    // this.$store.dispatch("FETCH_NEWS");
    // console.log(this.$route.path);

    const name = this.$route.name;

    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASKS");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },

  computed: {
    listItems() {
      const name = this.$route.name;

      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }

      return;
    },
  },
};
</script>

<style scoped>
.item-list {
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
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
