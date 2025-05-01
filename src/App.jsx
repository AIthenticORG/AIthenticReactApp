import '../i18n'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import TopButton from './components/TopButton'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import ArticlePage from './pages/ArticlePage'
import AboutUsPage from './pages/AboutUsPage'
import StartLearningPage from './pages/StartLearningPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import WhyPage from './pages/WhyPage';
import HowPage from './pages/HowPage'
import WhatPage from './pages/WhatPage'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/articles" element={<ArticlePage/>}/>
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/startlearning" element={<StartLearningPage/>}/>
        <Route path="/why" element={<WhyPage/>}/>
        <Route path="/what" element={<WhatPage/>}/>
        <Route path="/how" element={<HowPage/>}/>
        <Route path="/article/:id/:title" element={<ArticleDetailPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
      <TopButton/>
    </>
  )
}

export default App
