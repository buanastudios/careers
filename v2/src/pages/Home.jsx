import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ background: 'linear-gradient(to right, #f8f9fa, #e9ecef)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            Bantu Kami <span style={{ color: 'var(--tibyan-royal)' }}>Membangun Masa Depan</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--tibyan-gray-500)', fontSize: '1.1rem' }}>
            Bergabunglah dengan Yayasan Tibyan dan jadilah bagian dari perubahan besar dalam dunia pendidikan dan sosial di Indonesia.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/jobs" className="btn btn-primary" style={{ minWidth: '200px' }}>Lihat Lowongan</Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section" style={{ background: 'var(--tibyan-navy)', color: 'white' }}>
        <div className="container grid-responsive">
          <div>
            <h2 className="premium-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Mengapa Bergabung dengan Tibyan?</h2>
            <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.6 }}>
              Kami bukan sekadar yayasan, kami adalah keluarga yang berdedikasi untuk menciptakan standar baru dalam pendidikan Islam yang modern dan inklusif.
            </p>
          </div>
          <div className="grid-responsive" style={{ gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--tibyan-gold)' }}>Lingkungan Positif</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>Bekerja dengan rekan-rekan yang suportif dan visioner.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--tibyan-gold)' }}>Pengembangan Diri</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>Pelatihan rutin dan kesempatan karir yang terbuka luas.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--tibyan-gold)' }}>Fasilitas Modern</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>Dukungan infrastruktur terbaik untuk menunjang performa Anda.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--tibyan-gold)' }}>Misi Mulia</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>Setiap pekerjaan Anda berkontribusi pada amal jariyah dan umat.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
