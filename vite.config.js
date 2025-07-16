import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      closeBundle() {
        // Copy CNAME file to docs folder after build
        const cnamePath = resolve(__dirname, 'CNAME')
        const docsCnamePath = resolve(__dirname, 'docs', 'CNAME')

        if (existsSync(cnamePath)) {
          copyFileSync(cnamePath, docsCnamePath)
          console.log('✅ CNAME file copied to docs folder')
        } else {
          console.log('⚠️  CNAME file not found in root directory')
        }
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'docs'
  }
})
