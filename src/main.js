import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from "@/locales/en.json"
import uz from "@/locales/uz.json"
import ru from "@/locales/ru.json"
const app = createApp(App)


const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en: en,
    uz: uz,
    ru: ru
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
