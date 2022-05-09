<template>
  <div>
    <ul class="item-list">
      <li v-for="item in this.$store.state.news" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <a v-bind:href="item.url"> {{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
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
    this.$store.dispatch("FETCH_NEWS");
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
