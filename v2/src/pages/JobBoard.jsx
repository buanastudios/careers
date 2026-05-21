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
    <div className="container section">
      <div className="flex-between" style={{ marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>Lowongan Aktif</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn" style={{ padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid var(--tibyan-navy)', background: 'var(--tibyan-navy)', color: 'white' }}>Semua</button>
          <button className="btn" style={{ padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid var(--tibyan-gray-200)', background: 'none' }}>Pendidikan</button>
          <button className="btn" style={{ padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid var(--tibyan-gray-200)', background: 'none' }}>Operasional</button>
        </div>
      </div>

      {loading ? (
        <p>Memuat lowongan...</p>
      ) : (
        <div className="grid-responsive">
          {jobs.map(job => (
            <div key={job.id} className="card">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--tibyan-royal)', textTransform: 'uppercase' }}>{job.department}</span>
              <h3 style={{ margin: '0.5rem 0' }}>{job.title}</h3>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', color: 'var(--tibyan-gray-500)', fontSize: '0.9rem' }}>
                <span>📍 {job.location}</span>
                <span>⏰ {job.type}</span>
              </div>
              <p style={{ color: 'var(--tibyan-gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{job.description}</p>
              <Link to={`/apply/${job.id}`} className="btn btn-primary btn-full" style={{ backgroundColor: 'var(--tibyan-gray-800)' }}>Lamar Sekarang</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobBoard;
