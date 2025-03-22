
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

import Index from '@/pages/Index';
import Stades from '@/pages/Stades';
import Matches from '@/pages/Matches';
import MatchDetails from '@/pages/MatchDetails';
import Equipes from '@/pages/Equipes';
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stades" element={<Stades />} />
          <Route path="/stades/:id" element={<Stades />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/equipes" element={<Equipes />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
