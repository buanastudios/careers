// This utility simulates interacting with a Google Sheets API backend
// To connect to a real SheetDB or Apps Script, replace these with fetch calls.

const STORAGE_KEY = 'tibyan_hiring_data';

const initialData = {
  jobs: [
    { id: 1, title: 'Guru SD (English Specialist)', department: 'Education', type: 'Full-time', location: 'Bandung', description: 'Mengajar Bahasa Inggris untuk siswa SD dengan pendekatan modern dan Islami.' },
    { id: 2, title: 'Staff Admin Fundraising', department: 'Foundation', type: 'Full-time', location: 'Bandung', description: 'Mengelola administrasi dan program donasi/fundraising yayasan.' },
    { id: 3, title: 'Social Media Specialist', department: 'Marketing', type: 'Contract', location: 'Remote/Hybrid', description: 'Membuat konten dan mengelola media sosial Yayasan.' },
    { id: 4, title: 'Wali Kelas PAUD', department: 'Education', type: 'Full-time', location: 'Bandung', description: 'Menjadi wali kelas PAUD, mendidik anak usia dini.' }
  ],
  applications: [],
  onboardingTasks: [
    { id: 1, title: 'Upload KTP & KK', completed: false },
    { id: 2, title: 'Tanda Tangan Kontrak', completed: false },
    { id: 3, title: 'Baca Buku Panduan Karyawan', completed: false }
  ]
};

// Initialize localStorage if empty
if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
}

const getData = () => JSON.parse(localStorage.getItem(STORAGE_KEY));
const saveData = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

export const api = {
  getJobs: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(getData().jobs), 300));
  },
  
  getJobById: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const job = getData().jobs.find(j => j.id === parseInt(id));
        resolve(job);
      }, 200);
    });
  },

  submitApplication: async (applicationData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getData();
        const newApp = { ...applicationData, id: Date.now(), status: 'Pending' };
        data.applications.push(newApp);
        saveData(data);
        resolve({ success: true, application: newApp });
      }, 500);
    });
  },

  getOnboardingTasks: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(getData().onboardingTasks), 300));
  },

  completeTask: async (taskId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getData();
        const taskIndex = data.onboardingTasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
          data.onboardingTasks[taskIndex].completed = true;
          saveData(data);
        }
        resolve({ success: true });
      }, 300);
    });
  }
};
