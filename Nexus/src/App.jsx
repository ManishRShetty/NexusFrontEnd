import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

    </>
  )
}



export default App
