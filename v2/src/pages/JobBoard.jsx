import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { api } from '../utils/api';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await api.getJobs();
        setJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="flex-between" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Eksplorasi Lowongan</h2>
          <p>Temukan posisi yang sesuai dengan passion dan keahlian Anda.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn" style={{ padding: '0.6rem 1.5rem', background: 'var(--tibyan-navy)', color: 'white', borderRadius: 'var(--radius-pill)' }}>Semua</button>
          <button className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', background: 'white' }}>Pendidikan</button>
          <button className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', background: 'white' }}>Operasional</button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem' }}><p>Memuat lowongan...</p></div>
      ) : (
        <motion.div className="bento-grid" variants={containerVariants} initial="hidden" animate="visible">
          {jobs.map(job => (
            <motion.div key={job.id} variants={itemVariants} className="card card-hover card-accent bento-wide" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 1rem', background: 'var(--tibyan-royal-light)', color: 'var(--tibyan-royal)', borderRadius: 'var(--radius-pill)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>
                  <Briefcase size={14} /> {job.department}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--tibyan-gray-500)', fontSize: '0.95rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> {job.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={16} /> {job.type}</span>
                </div>
              </div>
              
              <p style={{ color: 'var(--tibyan-gray-500)', fontSize: '1.05rem', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>{job.description}</p>
              
              <Link to={`/apply/${job.id}`} className="btn btn-primary btn-full" style={{ width: '100%', alignSelf: 'flex-start' }}>Lamar Posisi Ini</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default JobBoard;
