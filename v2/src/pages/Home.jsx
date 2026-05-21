import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Sparkles, Heart } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Home() {
  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} style={{ paddingTop: '80px' }}>
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

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div variants={fadeIn}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.2rem', background: 'white', borderRadius: 'var(--radius-pill)', color: 'var(--tibyan-royal)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <Sparkles size={16} /> Karir Baru Bersama Tibyan
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.1' }}>
            Bantu Kami <span style={{ color: 'var(--tibyan-royal)' }}>Membangun Masa Depan</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--tibyan-gray-500)', fontSize: '1.25rem', lineHeight: '1.6' }}>
            Bergabunglah dengan Yayasan Tibyan dan jadilah bagian dari perubahan besar dalam dunia pendidikan dan sosial di Indonesia.
          </motion.p>
          
          <motion.div variants={fadeIn} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/jobs" className="btn btn-primary" style={{ minWidth: '200px', padding: '1.2rem 2rem', fontSize: '1.1rem' }}>Eksplorasi Lowongan</Link>
            <Link to="/portal" className="btn btn-outline" style={{ minWidth: '200px', padding: '1.2rem 2rem', fontSize: '1.1rem', background: 'white' }}>Masuk Portal</Link>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us - Bento Box Layout */}
      <section className="section" style={{ background: 'white', position: 'relative' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} style={{ marginBottom: '3rem' }}>
            <h2 className="premium-title" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>Mari Berjuang<br/>Bersama Tibyan</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--tibyan-gray-500)', maxWidth: '600px' }}>
              Kami bukanlah lembaga dengan fasilitas mewah, melainkan sebuah keluarga yang bergerak dalam kesederhanaan demi melayani umat. Kami membutuhkan keikhlasan dan kepedulian Anda.
            </p>
          </motion.div>

          <motion.div 
            className="bento-grid" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="card card-hover bento-large" style={{ background: 'linear-gradient(135deg, var(--tibyan-navy), #1e293b)', color: 'white' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'auto' }}>
                <Users size={32} color="var(--tibyan-gold)" />
              </div>
              <div style={{ marginTop: '3rem' }}>
                <h4 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Lingkungan Keluarga</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Bekerja bersama tim yang hangat, bersahabat, dan saling membimbing atas dasar ukhuwah Islamiyah.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="card card-hover bento-wide">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-orange-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <TrendingUp size={24} color="var(--tibyan-orange)" />
              </div>
              <h4>Ladang Amal & Belajar</h4>
              <p style={{ marginTop: '0.5rem' }}>Kesempatan mengamalkan ilmu secara nyata sekaligus terus belajar bersama meningkatkan ketakwaan.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="card card-hover bento-square">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-royal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sparkles size={24} color="var(--tibyan-royal)" />
              </div>
              <h4>Bahu-Membahu</h4>
              <p style={{ marginTop: '0.5rem' }}>Meski dengan sarana yang sederhana, kami percaya ketulusan akan membuahkan berkah.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="card card-hover bento-square">
              <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-green-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Heart size={24} color="var(--tibyan-green)" />
              </div>
              <h4>Pengabdian Tulus</h4>
              <p style={{ marginTop: '0.5rem' }}>Fokus membantu pendidikan anak-anak dan pemberdayaan sosial di Bandung.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
