import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobBoard from './pages/JobBoard';
import Application from './pages/Application';
import Portal from './pages/Portal';

function App() {
  return (
    <Router>
      <div className="hiring-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/apply/:id" element={<Application />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{ padding: '3rem 5%', textAlign: 'center', background: '#f8f9fa', borderTop: '1px solid var(--tibyan-gray-200)' }}>
          <p style={{ color: 'var(--tibyan-gray-500)' }}>&copy; 2026 Karir TIBYAN. Dikelola oleh Yayasan Tarbiyah Insan Bercahaya Bandung.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
