<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="user-description">
        <div>
          <!-- computed로 데이터 전달. 리팩토링 2 참고 -->
          <!-- {{ userInfo.id }} -->
          <!-- {{ info.id }} -->
          <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
        <!-- <router-link :to="`/user/${userInfo.id}`">
          {{ userInfo.id }}
        </router-link> -->
        <div class="time">
          <!-- {{ userInfo.created }} -->
          <!-- {{ info.created }} -->
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //  <!-- computed로 데이터 전달. 리팩토링 2 참고 -->
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
  props: {
    info: Object,
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
