import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPython, faLinkedin, faGithub, faRust } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFileArrowDown, faCircle, faShield } from '@fortawesome/free-solid-svg-icons'

library.add(faPython, faEnvelope, faLinkedin, faGithub, faFileArrowDown, faRust, faCircle, faShield)

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(vuetify)
    .mount('#app')
