import ru from './languages/ru.json';
import kg from './languages/kg.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: ru
    },
    kg: {
        translation: kg
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('i18nextLng') || 'kg',
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;