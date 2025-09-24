
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env.NODE_ENV': '"production"',
//   },
//   resolve: {
//     alias: {
//       'react': 'https://esm.sh/react',
//       'react-dom': 'https://esm.sh/react-dom',
//       'three': 'https://esm.sh/three',
//     },
//   },
//   build: {
//     lib: {
//       entry: 'src/index.jsx',
//       name: 'BallSpinApp',
//       formats: ['es'],
//       fileName: (format) => `ballspinapp.${format}.js`,
//     },
//     rollupOptions: {
//       external: [], // no externals here; they're resolved to URLs via alias
//     },
//   },
// });
// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: {
      'react': 'https://esm.sh/react',
      'react-dom': 'https://esm.sh/react-dom',
      'three': 'https://esm.sh/three',
    },
  },
  build: {
    rollupOptions: {
      // Multiple entry points
      input: {
        main: 'src/index.jsx',              // Your existing main app
        modal: 'src/pitch-modal.jsx'        // New modal entry point
      },
      output: {
        // Custom file naming to match your current structure
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'main') {
            return 'ballspinapp.es.js';
          } else if (chunkInfo.name === 'modal') {
            return 'pitch-visual-modal.es.js';
          }
          return '[name].es.js';
        },
        format: 'es'
      },
      external: [], // no externals here; they're resolved to URLs via alias
    },
  },
});