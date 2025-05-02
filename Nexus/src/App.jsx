import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Profile from './pages/Profile'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

    </>
  )
}



export default App
