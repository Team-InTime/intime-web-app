import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderApp } from './components/Header/header';
import { Sidenav } from './components/Sidenav/Sidenav';
import { Dashboard } from './pages/Dashboard/dashboard';

export function AppRoutes() {
  return (
    <Router>
      <HeaderApp>
        <Routes>
          <Route path="/" element={<Sidenav/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </HeaderApp>
    </Router>
  );
}
