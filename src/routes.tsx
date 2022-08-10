import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderApp } from './components/Header/header';
import { Dashboard } from './pages/Dashboard/dashboard';
import { ActiveRoom } from './pages/Active-Room/active-room';
import DynamicLineChart from './components/MiddleCharts/lineChart';
import { Login } from './pages/Login/login';

export function AppRoutes() {
  return (
    <Router>
      <HeaderApp>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/index" element={<ActiveRoom/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/middle-chart" element={<DynamicLineChart />} />
        </Routes>
      </HeaderApp>
      {/* <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes> */}
    </Router>
  );
}
