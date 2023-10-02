import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './AdminNavbar.css'; // Importa los estilos CSS

const AdminNavbar = () => {
  const { user, logout } = useUser();

  if (!user) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Aplica la clase de estilo a la barra de navegación */}
      <Link className="navbar-brand" to="/admin">Administrador</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
           {/* Opción para la gestión de usuarios */}
           <li className="nav-item">
            <Link className="nav-link" to="/gestion-usuarios">Gestión de usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro-aportes">Registro de Aportes de Asociado</Link>
          </li>
          {/* Botón para cerrar sesión */}
          <li className="nav-item">
            <button
              className="btn btn-link nav-link"
              onClick={() => {
                logout(); // Cerrar sesión y redirigir al usuario a la página de inicio de sesión
              }}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;
