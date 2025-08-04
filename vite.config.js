// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react({ include: '**/*.{js,jsx,tsx,ts}' })],
//   define: {
//     'process.env.NODE_ENV': '"production"', // Fix "process is not defined" error
//   },
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'src/index.js'),  // Your React entry file
//       name: 'BallSpinApp',  // UMD global name your app will expose
//       formats: ['umd'],    // Use UMD format for Shiny compatibility
//       fileName: (format) => `ballspinapp.${format}.js`,
//     },
//     rollupOptions: {
//       // Externalize React, ReactDOM and Three.js only - keep fiber and drei bundled inside
//       external: ['react', 'react-dom', 'three'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//           three: 'THREE',
//         },
//       },
//     },
//   },
// });
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
    lib: {
      entry: 'src/index.jsx',
      name: 'BallSpinApp',
      formats: ['es'],
      fileName: (format) => `ballspinapp.${format}.js`,
    },
    rollupOptions: {
      external: [], // no externals here; they're resolved to URLs via alias
    },
  },
});
