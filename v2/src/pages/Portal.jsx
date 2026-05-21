import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

function Portal() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await api.getOnboardingTasks();
      setTasks(data);
      setLoading(false);
    };
    loadTasks();
  }, []);

  const handleComplete = async (id) => {
    await api.completeTask(id);
    const data = await api.getOnboardingTasks();
    setTasks(data);
  };

  return (
    <div className="container section animate-fade-in" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Portal Karyawan</h2>
        <p style={{ fontSize: '1.1rem' }}>Selamat datang di dashboard onboarding & offboarding.</p>
      </div>

      <div className="grid-responsive delay-1">
        <div className="card">
          <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-royal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📋</span>
          </div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Onboarding Checklist</h3>
          
          {loading ? <p>Memuat tugas...</p> : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tasks.map(task => (
                <div key={task.id} style={{ 
                  padding: '1.2rem', 
                  background: task.completed ? 'var(--tibyan-gray-50)' : 'white', 
                  border: '1px solid var(--tibyan-gray-200)', 
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  transition: 'var(--transition)'
                }}>
                  <span style={{ 
                    textDecoration: task.completed ? 'line-through' : 'none', 
                    color: task.completed ? 'var(--tibyan-gray-400)' : 'var(--tibyan-navy)',
                    fontWeight: task.completed ? 400 : 600
                  }}>
                    {task.title}
                  </span>
                  {!task.completed ? (
                    <button onClick={() => handleComplete(task.id)} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Selesaikan</button>
                  ) : (
                    <span style={{ color: 'var(--tibyan-royal)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-orange-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>👋</span>
          </div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Offboarding</h3>
          <p style={{ color: 'var(--tibyan-gray-500)', marginBottom: '2rem', lineHeight: 1.6 }}>Mulai proses offboarding secara mandiri jika Anda berencana mengakhiri kontrak atau masa jabatan Anda di yayasan.</p>
          <button className="btn btn-outline btn-full" style={{ borderColor: 'var(--tibyan-orange)', color: 'var(--tibyan-orange)' }}>Mulai Exit Interview</button>
        </div>
      </div>
    </div>
  );
}

export default Portal;
