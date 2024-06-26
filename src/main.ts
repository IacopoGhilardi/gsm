import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createMetaManager } from 'vue-meta'


library.add(faFile)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.use(createMetaManager())
.mount('#app')
