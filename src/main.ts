import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

// use all modules fro './modules
const modules = import.meta.globEager('./modules/*.ts')
for (const module in modules)
  app.use(modules[module].default)

app.mount('#app')
