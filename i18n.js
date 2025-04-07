import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Home": "Home",
            "About us": "About us",
            "Articles": "Articles",
            "Paulcast": "Paulcast",
            "Contact": "Contact",
            "Login": "Login",
            "FAQ": "FAQ",
            "The AI Company": "The AI Company",
            "Discover, use AI": "Discover AI, use AI",
            "Understand legal guidelines": "Understand legal guidelines",
        }
    },
    nl: {
        translation: {
            "Home": "Home",
            "About us": "Over ons",
            "Articles": "Artikelen",
            "Paulcast": "Paulcast",
            "Contact": "Contact",
            "Login": "Inloggen",
            "FAQ": "FAQ",
            "The AI Company": "Het AI Bedrijf",
            "Discover, use AI": "Ontdek AI, gebruik AI",
            "Understand legal guidelines": "Begrijp juridische richtlijnen",
        }
    }
}
i18n 
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }        
})

export default i18n;