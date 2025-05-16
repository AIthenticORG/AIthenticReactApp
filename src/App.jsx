// Importeren van de vertalingen voor internationalisatie (i18n)
import '../i18n'; 

// Importeren van React-router voor routing functionaliteit
import { Routes, Route } from 'react-router-dom';

// Importeren van de verschillende pagina's die we gaan gebruiken in de routes
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import ArticlePage from './pages/ArticlePage';
import AboutUsPage from './pages/AboutUsPage';
import StartLearningPage from './pages/StartLearningPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import WhyPage from './pages/WhyPage';
import HowPage from './pages/HowPage';
import WhatPage from './pages/WhatPage';
import TermsPage from './pages/TermsPage';
import EnquetePage from './pages/EnquetePage';

// Importeren van componenten die de header, footer en top-knop beheren
import Header from './components/Header/Header';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

// Importeren van de algemene styling
import './App.css';
import CookiesPage from './pages/CookiesPage';

function App() {
  return (
    <>
      {/* De Header component wordt bovenaan de pagina weergegeven */}
      <Header/>
      
      {/* Routes component van react-router-dom om verschillende pagina's weer te geven op basis van de URL */}
      <Routes>
        {/* De route voor de startpagina, toont de HomePage component */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route voor de loginpagina */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route voor de contactpagina */}
        <Route path="/contact" element={<ContactPage/>}/>
        
        {/* Route voor de artikelenpagina */}
        <Route path="/articles" element={<ArticlePage/>}/>
        
        {/* Route voor de FAQ-pagina */}
        <Route path="/faq" element={<FaqPage/>}/>
        
        {/* Route voor de Over Ons-pagina */}
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        
        {/* Route voor de Start Learning-pagina */}
        <Route path="/startlearning" element={<StartLearningPage/>}/>
        
        {/* Route voor de Waarom-pagina */}
        <Route path="/why" element={<WhyPage/>}/>
        
        {/* Route voor de Wat-pagina */}
        <Route path="/what" element={<WhatPage/>}/>
        
        {/* Route voor de Hoe-pagina */}
        <Route path="/how" element={<HowPage/>}/>

        {/* Route voor de Terms-pagina */}
        <Route path="/terms" element={<TermsPage/>}/>

        {/* Route voor de Cookies-pagina */}
        <Route path="/cookies" element={<CookiesPage/>}/>

        {/* Route voor de Cookies-pagina */}
        <Route path="/enquete" element={<EnquetePage/>}/>
        
        {/* Dynamische route voor artikelpagina's met ID en titel als parameters */}
        <Route path="/article/:id/:title" element={<ArticleDetailPage/>} />
        
        {/* Fallback route voor niet-bestaande pagina's, toont een foutmelding */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      {/* De Footer component wordt onderaan de pagina weergegeven */}
      <Footer/>
      
      {/* De TopButton component wordt altijd weergegeven om snel naar boven te navigeren */}
      <TopButton/>
    </>
  )
}

export default App;
