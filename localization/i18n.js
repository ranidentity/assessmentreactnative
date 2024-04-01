import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, zh_TW, zh_CN } from "./translations";
import Backend from 'i18next-http-backend'; // or 'i18next-xhr-backend' if you prefer

i18next
    .use(Backend)
    .use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng:'zh_CN',
    lng: 'zh_CN', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: {
        zh_WT: {
            translation: zh_TW,
        },
        zh_CN: {
            translation: zh_CN,
        },
        en:{
            translation: en,
        }
    }
});

export default i18next;
