import { createApp } from 'vue'
import App from './App.vue'
import '@/main.css'
import io from 'socket.io-client'
const app = createApp(App)
export const socket = io.connect("https://vxmm.onrender.com", {secure: true})

socket.on('connect', () => {
    console.log('connect sucesss')
})

app.mount('#app')


