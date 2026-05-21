import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 110 }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--tibyan-navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '1.2rem' }}>K</div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--tibyan-navy)', margin: 0, letterSpacing: '-0.02em' }}>Karir<span style={{ color: 'var(--tibyan-royal)' }}>.</span></h2>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="btn btn-outline mobile-only" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '45px', height: '45px', border: 'none', background: 'var(--tibyan-gray-100)', zIndex: 110 }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links */}
        <nav className="desktop-only" style={{ alignItems: 'center', gap: '2rem' }}>
          <Link to="/" className="nav-link" style={{ color: location.pathname === '/' ? 'var(--tibyan-royal)' : '' }}>Beranda</Link>
          <Link to="/jobs" className="nav-link" style={{ color: location.pathname === '/jobs' ? 'var(--tibyan-royal)' : '' }}>Lowongan</Link>
          <Link to="/portal" className="nav-link" style={{ color: location.pathname === '/portal' ? 'var(--tibyan-royal)' : '' }}>Portal</Link>
          <Link to="/jobs" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Daftar Akun</Link>
        </nav>

        {/* Mobile Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="glass mobile-only"
              style={{ 
                position: 'absolute', 
                top: '70px', 
                left: '0', 
                right: '0', 
                borderRadius: 'var(--radius-md)', 
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/' ? 'var(--tibyan-royal)' : '' }}>Beranda</Link>
              <Link to="/jobs" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/jobs' ? 'var(--tibyan-royal)' : '' }}>Lowongan</Link>
              <Link to="/portal" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: location.pathname === '/portal' ? 'var(--tibyan-royal)' : '' }}>Portal</Link>
              <Link to="/jobs" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '1rem', width: '100%' }}>Daftar Akun</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
