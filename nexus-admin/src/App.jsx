import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Members from './pages/Members';
import Achievements from './pages/Achievements';
import Layout from './components/dashboard/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
