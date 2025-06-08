import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GrowthLeaksSection from './components/growth-leaks/GrowthLeaksSection';
import GrowthLeakPage from './components/growth-leaks/GrowthLeakPage';

interface AppProps {
  embedded?: boolean;
  showLeaks?: boolean;
}

function App({ embedded = false, showLeaks = true }: AppProps) {
  return (
    <div className={`min-h-screen ${embedded ? 'bg-transparent' : 'bg-gray-100'}`}>
      {!embedded && (
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Growth Leaks Library</h1>
          </div>
        </header>
      )}
      
      <main>
        <Routes>
          <Route path="/" element={<GrowthLeaksSection showLeaks={showLeaks} />} />
          <Route path="/growth-leaks/:pillar/:leakId" element={<GrowthLeakPage />} />
        </Routes>
      </main>
      
      {!embedded && (
        <footer className="bg-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; 2025 Growth Analytics Platform. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;