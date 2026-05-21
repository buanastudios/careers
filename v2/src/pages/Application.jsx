import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../utils/api';

function Application() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', resumeUrl: '', coverLetter: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      const data = await api.getJobById(id);
      if (data) setJob(data);
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await api.submitApplication({ jobId: id, ...formData });
    setSubmitting(false);
    alert('Aplikasi berhasil dikirim! Kami akan menghubungi Anda segera.');
    navigate('/portal');
  };

  if (!job) return <div className="container section">Memuat data pekerjaan...</div>;

  return (
    <div className="container section" style={{ maxWidth: '600px' }}>
      <div className="card">
        <h2 style={{ marginBottom: '0.5rem' }}>Lamar Posisi</h2>
        <h3 style={{ color: 'var(--tibyan-royal)', marginBottom: '1.5rem' }}>{job.title}</h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nama Lengkap</label>
            <input 
              type="text" 
              className="input-field" 
              required 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
            <input 
              type="email" 
              className="input-field" 
              required 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Link Portfolio / Resume (Google Drive dll)</label>
            <input 
              type="url" 
              className="input-field" 
              required 
              placeholder="https://"
              value={formData.resumeUrl}
              onChange={e => setFormData({...formData, resumeUrl: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Surat Lamaran Singkat</label>
            <textarea 
              className="input-field" 
              rows="4"
              value={formData.coverLetter}
              onChange={e => setFormData({...formData, coverLetter: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={submitting} style={{ marginTop: '1rem' }}>
            {submitting ? 'Mengirim...' : 'Kirim Lamaran'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Application;
