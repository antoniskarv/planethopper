import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRedo)

const app = createApp(App)
app.component('fa-icon', FontAwesomeIcon)
app.mount('#app')
