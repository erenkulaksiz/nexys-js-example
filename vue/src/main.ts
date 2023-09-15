import './reset.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import nexys from './nexys'

nexys.init()

createApp(App).mount('#app')
