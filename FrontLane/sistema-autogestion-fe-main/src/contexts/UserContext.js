import React, { createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (id, password) => {
    try {
      // Simulación de credenciales estáticas (reemplaza con tus propias credenciales)
      const staticCredentials = {
        id: '1',
        password: '1',
      };
  
      if (id === staticCredentials.id && password === staticCredentials.password) {
        // Autenticación exitosa
        const userData = {
          id: staticCredentials.id,
          username: 'Nombre de usuario',
        };
  
        setUser(userData);
  
        // Guarda los datos de autenticación en el almacenamiento local
        localStorage.setItem('user', JSON.stringify(userData));
  
        console.log('Usuario autenticado:', userData);
      } else {
        // Credenciales incorrectas
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      throw error;
    }
  };
  
  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);

    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };


  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};