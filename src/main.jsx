import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Componentes/Login/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el script de Bootstrap
import Clases from './Componentes/Paginas/Clases';
import Perfil from './Componentes/Paginas/Perfil';
import Nosotros from './Componentes/Paginas/Nosotros';
import Register from './Componentes/Login/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y otros componentes relacionados con la navegación

// Renderiza la aplicación dentro del elemento con el ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Define el componente Router para manejar las rutas */}
      <Routes> {/* Define las rutas */}
        <Route path="/" element={<Login />} /> {/* Ruta para el login */}
        <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
        <Route path="/home" element={<App />} /> {/* Ruta para el componente App */}
        <Route path="/perfil" element={<Perfil />} /> {/* Ruta para el perfil del usuario */}
        <Route path="/register" element={<Register />} /> {/* Ruta para el registro de usuarios */}
        <Route path="/clases" element={<Clases />} /> {/* Ruta para la página de clases */}
        <Route path="/nosotros" element={<Nosotros />} /> {/* Ruta para la página 'Nosotros' */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // Monta la aplicación en el elemento con el ID 'root' del HTML
);
