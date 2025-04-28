import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Projects from './pages/projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}



export default App
