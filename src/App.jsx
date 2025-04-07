import { useState } from 'react'
import '../i18n';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import TopButton from './components/TopButton'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import ArticlePage from './pages/ArticlePage';
import AboutUsPage from './pages/AboutUsPage'
import StartLearningPage from './pages/StartLearningPage'
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
        <Route path="/startlearning" element={<StartLearningPage />}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
      <TopButton/>
    </>
  )
}

export default App
