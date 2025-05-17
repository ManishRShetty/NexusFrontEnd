import React, { useState, useEffect } from 'react'
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
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/footer/Footer';
import RegisterPage from './pages/register';
import Resources from './pages/Resources'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/join" element={<Memberships />} />
            <Route path="/join/:tier" element={<Registration />} />
            <Route path='/about' element={<About />} />
            <Route path="/events" element={<HomePage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            {/* Protected Routes */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* ...other protected routes... */}
            
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      )}
    </AnimatePresence>
  );
}

export default App
