// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': {
//       REACT_APP_API_URL: import.meta.env.VITE_REACT_APP_API_URL
//     }
//   }

// })
  

///222///
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(async () => {
//   const { VITE_REACT_APP_API_URL } = process.env;
//   return {
//     define: {
//       'process.env': {
//         REACT_APP_API_URL: VITE_REACT_APP_API_URL
//       }
//     },
//     plugins: [react()]
//   };
// });


//33//
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(async () => {
//   const { VITE_REACT_APP_API_URL } = process.env;
//   return {
//     define: {
//       'process.env': {
//         REACT_APP_API_URL: VITE_REACT_APP_API_URL
//       }
//     },
//     plugins: [react()],
//     server: {
//       port: 5000 // Cambia el puerto aquí
//     }
//   };
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const { VITE_REACT_APP_API_URL, VITE_PORT } = process.env;
  return {
    define: {
      'process.env': {
        REACT_APP_API_URL: VITE_REACT_APP_API_URL
      }
    },
    plugins: [react()],
    server: {
      port: 5000
    }
  };
});


