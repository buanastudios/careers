import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '35px', height: '35px', background: 'var(--tibyan-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>K</div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--tibyan-navy)', margin: 0 }}>KARIR TIBYAN</h2>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="menu-toggle btn btn-outline" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '0.5rem', display: 'block' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link to="/jobs" className="nav-link" onClick={() => setIsOpen(false)}>Lowongan</Link>
          <Link to="/portal" className="nav-link" onClick={() => setIsOpen(false)}>Portal</Link>
          <Link to="/jobs" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '0.5rem 1.2rem' }}>Daftar Akun</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
