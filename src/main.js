import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)


createApp(App).mount('#app')
