import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Campus from '../views/Individual/Campus'
// import ChatRoom from '../views/ChatRoom.vue'
// import ChessCheers from '../views/ChessCheers.vue'
// import Home from '../views/WebGLM/Home.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/campus',
    component: Campus,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
