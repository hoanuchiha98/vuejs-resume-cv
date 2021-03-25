import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from '../locales/en.json'
import vnLocale from '../locales/vn.json'
Vue.use(VueI18n);

const messages = {
    'en': enLocale,
    'vi': vnLocale
};

const i18n = new VueI18n({
    locale: 'vi',
    messages,
    fallbackLocale: 'vi'
});

export default i18n;