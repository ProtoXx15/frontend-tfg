import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Elementos/Header';
import Footer from './Componentes/Elementos/Footer';
import Home from './Componentes/Paginas/Home';

function App() {
  return (
    <>
      {/* Encabezado de la página */}
      <Header />

      {/* Contenido principal de la página */}
      <Home />

      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;
