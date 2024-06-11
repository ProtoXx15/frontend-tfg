import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'; 
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import image from '../../assets/logo.webp';
import './header.css';

const Header = () => {
  // Estado para almacenar el token de autenticación
  const [token, setToken] = useState("");

  // Efecto para obtener el token de autenticación almacenado en el almacenamiento local cuando se monta el componente
  useEffect(() => {
    const newToken = localStorage.getItem('token');
    setToken(newToken);
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    axios.get('http://localhost:8000/api/logout', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log(response.data);
        localStorage.removeItem('token'); // Elimina el token de autenticación del almacenamiento local
        window.location.href = '/'; // Redirecciona a la página de inicio
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      {/* Encabezado */}
      <header className="border-bottom">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-2">
            {/* Logo */}
            <div className="logo">
              <img src={image} alt="Logo" height="40" />
            </div>
            {/* Navegación */}
            <nav className="nav">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link enlaces" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link enlaces" href="/clases">Clases</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link enlaces" href="/nosotros">Nosotros</a>
                </li>
              </ul>
            </nav>
            {/* Desplegable para el usuario */}
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="customDropdownToggle">
                  <FaUser size={24} /> {/* Icono de usuario */}
                </Dropdown.Toggle>

                {/* Menú desplegable */}
                <Dropdown.Menu>
                  <Dropdown.Item href="/perfil">Mi Perfil</Dropdown.Item> {/* Enlace a la página de perfil */}
                  <Dropdown.Item onClick={handleLogout}><FaSignOutAlt /> Cerrar Sesión</Dropdown.Item> {/* Opción para cerrar sesión */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </div >
  );
};

export default Header;
