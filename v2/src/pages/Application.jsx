import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, FileText } from 'lucide-react';
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

  if (!job) return <div className="container section" style={{ paddingTop: '120px' }}>Memuat data pekerjaan...</div>;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="container section" style={{ maxWidth: '700px', paddingTop: '120px', minHeight: '80vh' }}>
      <div className="card" style={{ padding: '4rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: 'var(--tibyan-royal-light)', borderRadius: '16px', marginBottom: '1.5rem' }}>
            <FileText size={32} color="var(--tibyan-royal)" />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Kirim Aplikasi Anda</h2>
          <p>Melamar untuk posisi <span style={{ color: 'var(--tibyan-royal)', fontWeight: 600 }}>{job.title}</span></p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label className="input-label">Nama Lengkap</label>
            <input 
              type="text" 
              className="input-field" 
              required 
              placeholder="Masukkan nama lengkap Anda"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="input-label">Alamat Email</label>
            <input 
              type="email" 
              className="input-field" 
              required 
              placeholder="nama@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="input-label">Tautan Portfolio / Resume (Google Drive, LinkedIn, dsb)</label>
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
            <label className="input-label">Surat Lamaran Singkat</label>
            <textarea 
              className="input-field" 
              rows="5"
              placeholder="Ceritakan mengapa Anda cocok untuk posisi ini..."
              value={formData.coverLetter}
              onChange={e => setFormData({...formData, coverLetter: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={submitting} style={{ marginTop: '1rem', padding: '1.2rem' }}>
            <Send size={18} /> {submitting ? 'Mengirim Data...' : 'Kirim Aplikasi Sekarang'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Application;
