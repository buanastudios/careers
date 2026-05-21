import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardList, LogOut, Check } from 'lucide-react';
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Portal Karyawan</h2>
        <p style={{ fontSize: '1.1rem' }}>Selamat datang di dashboard onboarding & offboarding.</p>
      </div>

      <motion.div className="bento-grid" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="card bento-wide">
          <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-royal-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <ClipboardList size={24} color="var(--tibyan-royal)" />
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: task.completed ? 'line-through' : 'none', 
                    color: task.completed ? 'var(--tibyan-gray-400)' : 'var(--tibyan-navy)',
                    fontWeight: task.completed ? 400 : 600
                  }}>
                    {task.completed && <CheckCircle2 size={18} color="var(--tibyan-green)" />}
                    {task.title}
                  </span>
                  {!task.completed ? (
                    <button onClick={() => handleComplete(task.id)} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Selesaikan</button>
                  ) : (
                    <span style={{ color: 'var(--tibyan-green)', fontWeight: 'bold', fontSize: '1.2rem' }}><Check size={20} /></span>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="card bento-wide">
          <div style={{ width: '50px', height: '50px', background: 'var(--tibyan-orange-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <LogOut size={24} color="var(--tibyan-orange)" />
          </div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Offboarding</h3>
          <p style={{ color: 'var(--tibyan-gray-500)', marginBottom: '2rem', lineHeight: 1.6 }}>Mulai proses offboarding secara mandiri jika Anda berencana mengakhiri kontrak atau masa jabatan Anda di yayasan.</p>
          <button className="btn btn-outline btn-full" style={{ borderColor: 'var(--tibyan-orange)', color: 'var(--tibyan-orange)' }}>Mulai Exit Interview</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Portal;
