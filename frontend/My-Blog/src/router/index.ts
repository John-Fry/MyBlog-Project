import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import PostDetail from "../pages/PostDetail.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostDetail
    }
  ]
})

export default router