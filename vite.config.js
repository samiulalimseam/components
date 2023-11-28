import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        output: {
            dir: 'dist',
            entryFileNames: 'test.js',
            assetFileNames: 'showrating.css',
            chunkFileNames: "chunk.js",
            manualChunks: undefined,
        }
    }
}
})