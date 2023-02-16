import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoom from '../views/ChatRoom.vue'
import ChessCheers from '../views/ChessCheers.vue'
import Home from '../views/WebGLM/Home.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
