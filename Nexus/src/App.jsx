import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Profile from './pages/Profile'
import Memberships from './pages/Memberships'
import Auth from './pages/Auth'
import Registration from './pages/register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/join" element={<Memberships />} />
        <Route path="/join/:tier" element={<Registration />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

    </>
  )
}

export default App
