import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The ported Bootstrap 2 / Joomla template CSS contains legacy IE hacks
  // (e.g. `*zoom: 1;`) that LightningCSS's strict parser rejects by default.
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
})
