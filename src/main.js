import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import vnMessage from './locales/vn.json'
import enMessage from './locales/en.json'

Vue.use(VueI18n)

const messages = {
  vn: vnMessage,
  en: enMessage
}
const i18n = new VueI18n({
  locale: 'vn',
  messages,
  fallbackLocale: 'vn'
})
Vue.config.productionTip = false
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
