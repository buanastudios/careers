import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? '1rem' : '2rem 1.5rem', transition: 'var(--transition)' }}>
      <header 
        className="glass" 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          borderRadius: 'var(--radius-pill)', 
          padding: '0.8rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--tibyan-navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '1.2rem' }}>K</div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--tibyan-navy)', margin: 0, letterSpacing: '-0.02em' }}>Karir<span style={{ color: 'var(--tibyan-royal)' }}>.</span></h2>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="btn btn-outline" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '0.6rem', display: 'block', borderRadius: '50%', width: '45px', height: '45px', border: 'none', background: 'var(--tibyan-gray-100)' }}
          id="mobile-menu-btn"
        >
          <span style={{ fontSize: '1.2rem' }}>{isOpen ? '✕' : '☰'}</span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`} style={isOpen ? { position: 'absolute', top: '80px', left: '1rem', right: '1rem', borderRadius: 'var(--radius-md)', padding: '2rem' } : {}}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/' ? 'var(--tibyan-royal)' : '' }}>Beranda</Link>
          <Link to="/jobs" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/jobs' ? 'var(--tibyan-royal)' : '' }}>Lowongan</Link>
          <Link to="/portal" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/portal' ? 'var(--tibyan-royal)' : '' }}>Portal</Link>
          <Link to="/jobs" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '0.75rem 1.5rem', marginLeft: isOpen ? '0' : '1rem' }}>Daftar Akun</Link>
        </nav>
        
        <style>{`
          @media (min-width: 768px) {
            #mobile-menu-btn { display: none !important; }
          }
        `}</style>
      </header>
    </div>
  );
}

export default Navbar;
