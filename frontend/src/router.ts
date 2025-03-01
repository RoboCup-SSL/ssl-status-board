import {createRouter, createWebHistory} from 'vue-router'
import StatusBoard from "@/components/StatusBoard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'StatusBoard',
      component: StatusBoard
    }
  ]
})

export default router
