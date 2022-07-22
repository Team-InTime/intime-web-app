import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderApp } from './components/Header/header';
import { Sidenav } from './components/Sidenav/Sidenav';
import { Dashboard } from './pages/Dashboard/dashboard';
import { ActiveRoom } from './pages/Active-Room/active-room';

export function AppRoutes() {
  return (
    <Router>
      <HeaderApp>
        <Routes>
          <Route path="/" element={<Sidenav/>} />
          <Route path="/t" element={<ActiveRoom/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </HeaderApp>
    </Router>
  );
}
