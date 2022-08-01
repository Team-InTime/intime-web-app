import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderApp } from './components/Header/header';
import { Dashboard } from './pages/Dashboard/dashboard';
import { ActiveRoom } from './pages/Active-Room/active-room';
import { Login } from './pages/Login/login';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}
