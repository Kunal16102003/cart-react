<<<<<<< HEAD
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.tsx';
// import './index.css';

// // Check if we're in embedded mode
// const isEmbedded = window.location.pathname.includes('embed.html');

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App embedded={isEmbedded} />
//     </BrowserRouter>
//   </StrictMode>
// );
=======
>>>>>>> origin/main
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Check if we're in embedded mode
const isEmbedded = window.location.pathname.includes('embed.html');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter basename="/cart-react">  {/* 👈 This is crucial */}
      <App embedded={isEmbedded} />
    </BrowserRouter>
  </StrictMode>
);
=======
    <BrowserRouter>
      <App embedded={isEmbedded} />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> origin/main
