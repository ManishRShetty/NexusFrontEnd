import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import HomePage from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Profile from './pages/Profile'
import Memberships from './pages/Memberships'
import Auth from './pages/Auth'
import Registration from './pages/register'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/join" element={<Memberships />} />
        <Route path="/join/:tier" element={<Registration />} />
        
        {/* Protected Routes */}
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/projects" element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        } />
        {/* ...other protected routes... */}
        
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
