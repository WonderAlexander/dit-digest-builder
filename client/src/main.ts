import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'
import App from './App.vue'
// import './assets/base.css'
import 'tippy.js/dist/tippy.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueTippy, {
  defaultProps: {
    placement: 'top',
    arrow: true,
    theme: 'light',
  },
})

app.mount('#app')
