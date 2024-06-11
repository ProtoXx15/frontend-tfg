import React, { useEffect } from 'react';

// Importa tu nuevo ícono
import customFavicon from '../../assets/logo-fondo.webp';

const Favicon = () => {
  useEffect(() => {
    // Cambia el favicon
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = customFavicon;

    // Cambia el título de la página
    document.title = 'ProtoGym';
  }, []);

  return (
    <div>
    </div>
  );
};

export default Favicon;
