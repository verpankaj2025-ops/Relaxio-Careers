import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),

          femaleSpaJobsLucknow: path.resolve(
            __dirname,
            'female-spa-jobs-lucknow/index.html',
          ),

          femaleMassageTherapistJobsLucknow: path.resolve(
            __dirname,
            'female-massage-therapist-jobs-lucknow/index.html',
          ),

          femaleSpaSpecialistJobsLucknow: path.resolve(
            __dirname,
            'female-spa-specialist-jobs-lucknow/index.html',
          ),

          femaleSpaReceptionistJobsLucknow: path.resolve(
            __dirname,
            'female-spa-receptionist-jobs-lucknow/index.html',
          ),

          femaleWellnessConsultantJobsLucknow: path.resolve(
            __dirname,
            'female-wellness-consultant-jobs-lucknow/index.html',
          ),

          spaJobsFreshersLucknow: path.resolve(
            __dirname,
            'spa-jobs-for-freshers-lucknow/index.html',
          ),

          spaJobsAccommodation: path.resolve(
            __dirname,
            'spa-jobs-with-accommodation/index.html',
          ),

          spaJobsIndia: path.resolve(
            __dirname,
            'spa-jobs-india/index.html',
          ),
        },
      },
    },

    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',

      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
