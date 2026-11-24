import { createI18n } from 'vue-i18n'

import en from './locales/eng.json'
import uz from './locales/uz.json'
import ru from './locales/ru.json'

const savedLocale = localStorage.getItem('portfolio-locale')

const supportedLocales = ['en', 'uz', 'ru']

const i18n = createI18n({
    legacy: false,

    locale: supportedLocales.includes(savedLocale)
        ? savedLocale
        : 'en',

    fallbackLocale: 'en',

    messages: {
        en,
        uz,
        ru
    }
})

export default i18n
