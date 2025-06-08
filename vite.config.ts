<<<<<<< HEAD
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
//   define: {
//     // Define process.env for browser compatibility
//     'process.env': {},
//     'process.env.NODE_ENV': JSON.stringify('production'),
//     global: 'globalThis',
//   },
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/lib/web-component.tsx'),
//       name: 'GrowthLeaksLibrary',
//       fileName: 'growth-leaks-library',
//       formats: ['es']
//     },
//     rollupOptions: {
//       external: [],
//       output: {
//         globals: {},
//         // Ensure the file is placed in the root of dist for easy access
//         entryFileNames: 'growth-leaks-library.js',
//         chunkFileNames: 'growth-leaks-library-[name].js',
//         assetFileNames: 'growth-leaks-library-[name].[ext]',
//         // Add polyfills for browser compatibility
//         intro: `
//           if (typeof global === 'undefined') {
//             var global = globalThis;
//           }
//           if (typeof process === 'undefined') {
//             var process = { env: { NODE_ENV: 'production' } };
//           }
//         `
//       }
//     },
//     minify: true,
//     // Output to dist root instead of assets folder
//     outDir: 'dist',
//     emptyOutDir: true,
//     // Ensure browser compatibility
//     target: 'es2015'
//   }
// });
=======
>>>>>>> origin/main
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/cart-react/', // 👈 Needed for GitHub Pages!
=======
>>>>>>> origin/main
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
<<<<<<< HEAD
=======
    // Define process.env for browser compatibility
>>>>>>> origin/main
    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify('production'),
    global: 'globalThis',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/web-component.tsx'),
      name: 'GrowthLeaksLibrary',
      fileName: 'growth-leaks-library',
<<<<<<< HEAD
      formats: ['es'],
=======
      formats: ['es']
>>>>>>> origin/main
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
<<<<<<< HEAD
        entryFileNames: 'growth-leaks-library.js',
        chunkFileNames: 'growth-leaks-library-[name].js',
        assetFileNames: 'growth-leaks-library-[name].[ext]',
=======
        // Ensure the file is placed in the root of dist for easy access
        entryFileNames: 'growth-leaks-library.js',
        chunkFileNames: 'growth-leaks-library-[name].js',
        assetFileNames: 'growth-leaks-library-[name].[ext]',
        // Add polyfills for browser compatibility
>>>>>>> origin/main
        intro: `
          if (typeof global === 'undefined') {
            var global = globalThis;
          }
          if (typeof process === 'undefined') {
            var process = { env: { NODE_ENV: 'production' } };
          }
<<<<<<< HEAD
        `,
      },
    },
    minify: true,
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2015',
  },
});
=======
        `
      }
    },
    minify: true,
    // Output to dist root instead of assets folder
    outDir: 'dist',
    emptyOutDir: true,
    // Ensure browser compatibility
    target: 'es2015'
  }
});
>>>>>>> origin/main
