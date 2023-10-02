import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider, useUser } from './contexts/UserContext';
import LoginPage from './components/LoginForm/LoginPage';
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import AdminHomePage from './components/AdminHomePage/AdminHomePage';
import GestionUsuarios from './components/GestionUsuarios/GestionUsuarios';
import RegistroAportes from './components/RegistroAportes/RegistroAportes'; 

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div>
          <AdminNavbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios />} />
            <Route path="/registro-aportes" element={<RegistroAportes />} />

            {/* Otras rutas aquí... */}
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;