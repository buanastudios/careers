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
    <div className="container section">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Portal Karyawan</h2>
        <p style={{ color: 'var(--tibyan-gray-500)' }}>Selamat datang di dashboard onboarding & offboarding.</p>
      </div>

      <div className="grid-responsive">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: 'var(--tibyan-orange)' }}>Onboarding Checklist</h3>
          {loading ? <p>Memuat tugas...</p> : (
            <ul style={{ listStyle: 'none' }}>
              {tasks.map(task => (
                <li key={task.id} style={{ padding: '1rem 0', borderBottom: '1px solid var(--tibyan-gray-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--tibyan-gray-500)' : 'inherit' }}>
                    {task.title}
                  </span>
                  {!task.completed ? (
                    <button onClick={() => handleComplete(task.id)} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Selesai</button>
                  ) : (
                    <span style={{ color: 'green', fontWeight: 'bold' }}>✓</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: 'var(--tibyan-gray-800)' }}>Offboarding</h3>
          <p style={{ color: 'var(--tibyan-gray-500)', marginBottom: '1rem' }}>Mulai proses offboarding jika Anda berencana mengakhiri kontrak/pekerjaan.</p>
          <button className="btn btn-primary btn-full" style={{ background: '#dc3545' }}>Mulai Exit Interview</button>
        </div>
      </div>
    </div>
  );
}

export default Portal;
