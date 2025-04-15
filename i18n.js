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
            "Start learning": "Start learning",
            "Get Connected": "Get Connected",
            "Support": "Support",
            "View Plans": "View Plans",
            "Plans": "Plans",
            "LinkedIn": "LinkedIn",
            "X": "X",  
            "Instagram": "Instagram",
            "Company": "Company",
            "Our plans": "Our Plans",

            "Basic Plan": "Basic",
            "Basic+ Plan": "Basic+",
            "Bronze Plan": "Bronze",
            "Silver Plan": "Silver",
            "Gold Plan": "Gold",

            "Socials": "Socials",
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
            "Start learning": "Educatie",
            "Get Connected": "Kom in contact",
            "Support": "Ondersteuning",
            "View Plans": "Bekijk plannen",
            "LinkedIn": "LinkedIn",
            "X": "X",
            "Instagram": "Instagram",
            "Plans": "Plannen",
            "Company": "Bedrijf",
            "Our plans": "Onze plannen",

            "Basic Plan": "Basis",
            "Basic+ Plan": "Basis+",
            "Bronze Plan": "Brons",
            "Silver Plan": "Zilver",
            "Gold Plan": "Goud",

            "Socials": "Sociale media",

        }
    }
}
i18n 
.use(initReactI18next)
.init({
    resources,
    lng: 'nl',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }        
})

export default i18n;