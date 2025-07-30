import { createRouter, createWebHistory } from 'vue-router'

// Importa le viste
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Gallery from './views/Gallery.vue'
import Contacts from './views/Contacts.vue'
import Payment from './views/Payment.vue'
// (Aggiungeremo About.vue, Events.vue ecc. più avanti)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/gallery', component: Gallery},
  { path: '/contacts', component: Contacts},
  { path: '/payment', component: Payment}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
