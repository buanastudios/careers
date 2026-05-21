import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

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
    <div className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="flex-between animate-fade-in" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
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
        <div className="grid-responsive animate-fade-in delay-1">
          {jobs.map(job => (
            <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--tibyan-royal-light)', color: 'var(--tibyan-royal)', borderRadius: 'var(--radius-pill)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {job.department}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--tibyan-gray-500)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>📍 {job.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>⏰ {job.type}</span>
                </div>
              </div>
              
              <p style={{ color: 'var(--tibyan-gray-500)', fontSize: '1rem', marginBottom: '2rem', flex: 1 }}>{job.description}</p>
              
              <Link to={`/apply/${job.id}`} className="btn btn-primary btn-full">Lamar Posisi Ini</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobBoard;
