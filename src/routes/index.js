import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

//하이 오더 컴포넌트(HOC)
import createListView from "../views/CreateListView";

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
      name: "news",
      //component : url 주소를 갔을 때 표시될 컴포넌트
      // component: Newsview,
      // HOC
      component: createListView("Newsview"),
    },
    {
      path: "/ask",
      name: "ask",
      // component: Askview,
      component: createListView("Askview"),
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: Jobsview,
      component: createListView("Jobsview"),
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
