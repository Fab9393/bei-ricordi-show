import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

// Font Awesome setup (componente)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icone da solid
import {
  faHouse,
  faUsers,
  faMasksTheater,
  faImages,
  faEnvelope,
  faUserCircle,
  faImage
} from '@fortawesome/free-solid-svg-icons'

// Aggiungi le icone alla libreria globale
library.add(faHouse, faUsers, faMasksTheater, faImages, faEnvelope, faUserCircle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
