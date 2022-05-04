import Vue from "vue";
import VueRouter from "vue-router";
import Newsview from "../views/NewsView.vue";
import Askview from "../views/AskView.vue";
import Jobsview from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path : url 주소
      path: "/news",
      //component : url 주소를 갔을 때 표시될 컴포넌트
      component: Newsview,
    },
    {
      path: "/ask",
      component: Askview,
    },
    {
      path: "/jobs",
      component: Jobsview,
    },
    {
      //동적 라우팅
      path: "/item/:id",
      component: ItemView,
    },
    {
      //동적 라우팅
      path: "/user/:id",
      component: UserView,
    },
  ],
});
