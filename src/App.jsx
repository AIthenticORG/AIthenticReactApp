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
import StartLearningContainer from './components/StartLearningContainer'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
      <TopButton/>
    </>
  )
}

export default App
