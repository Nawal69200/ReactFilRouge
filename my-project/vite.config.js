import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'
import { fileURLToPath } from 'url' 

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Assurez-vous que la base est configurée pour le déploiement
  plugins: [
    react(), // Le plugin React
    dynamicImport(), // Le plugin pour les imports dynamiques
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias pour le dossier src
      '~bootstrap': 'bootstrap', // Alias pour Bootstrap
    },
  },
})
