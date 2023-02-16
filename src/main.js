import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'

const app = createApp(App)

axios.defaults.baseURL = "/api"
app.config.globalProperties.$axios = axios

app.use(store).use(router).use(naive).mount('#app')