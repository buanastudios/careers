import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'radial-gradient(circle at top right, #EFF6FF 0%, #F8FAFC 100%)',
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background blur */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'rgba(249, 115, 22, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>

        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', borderRadius: 'var(--radius-pill)', color: 'var(--tibyan-royal)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            ✨ Karir Baru Bersama Tibyan
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.1' }}>
            Bantu Kami <span style={{ color: 'var(--tibyan-royal)' }}>Membangun Masa Depan</span>
          </h1>
          <p className="delay-1" style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--tibyan-gray-500)', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Bergabunglah dengan Yayasan Tibyan dan jadilah bagian dari perubahan besar dalam dunia pendidikan dan sosial di Indonesia.
          </p>
          <div className="delay-2" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/jobs" className="btn btn-primary" style={{ minWidth: '200px', padding: '1.2rem 2rem', fontSize: '1.1rem' }}>Eksplorasi Lowongan</Link>
            <Link to="/portal" className="btn btn-outline" style={{ minWidth: '200px', padding: '1.2rem 2rem', fontSize: '1.1rem', background: 'white' }}>Masuk Portal</Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section" style={{ background: 'white', position: 'relative' }}>
        <div className="container grid-responsive">
          <div className="animate-fade-in delay-1">
            <h2 className="premium-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Mengapa Bergabung<br/>dengan Tibyan?</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--tibyan-gray-500)' }}>
              Kami bukan sekadar yayasan, kami adalah keluarga yang berdedikasi untuk menciptakan standar baru dalam pendidikan Islam yang modern dan inklusif. Kami menghargai setiap inovasi.
            </p>
          </div>
          <div className="grid-responsive animate-fade-in delay-2" style={{ gap: '2rem' }}>
            <div className="card">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-royal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🌱</span>
              </div>
              <h4>Lingkungan Positif</h4>
              <p style={{ marginTop: '0.5rem' }}>Bekerja dengan rekan-rekan yang suportif dan visioner.</p>
            </div>
            <div className="card">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-orange-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📈</span>
              </div>
              <h4>Pengembangan Diri</h4>
              <p style={{ marginTop: '0.5rem' }}>Pelatihan rutin dan kesempatan karir yang terbuka luas.</p>
            </div>
            <div className="card">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-royal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🏢</span>
              </div>
              <h4>Fasilitas Modern</h4>
              <p style={{ marginTop: '0.5rem' }}>Dukungan infrastruktur terbaik untuk menunjang performa Anda.</p>
            </div>
            <div className="card">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-orange-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🤲</span>
              </div>
              <h4>Misi Mulia</h4>
              <p style={{ marginTop: '0.5rem' }}>Setiap pekerjaan Anda berkontribusi pada amal jariyah dan umat.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
