<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/TopToolBar.vue";
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  /* 글자 밑줄 삭제 */
  text-decoration: none;
}
/* 글자 마우스 커서 올라갈 때 글자 색 변경 */
a:hover {
  color: #42b338;
  text-decoration: underline;
}
a.router-link-exact-active {
  /* 글자 밑줄 추가 */
  text-decoration: underline;
}
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
