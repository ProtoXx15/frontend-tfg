import React from 'react';
import insta from '../../assets/insta.png';
import x from '../../assets/x.png';

function Footer() {
  return (
    <div className="Footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="https://www.instagram.com/daanieeeelllll" className="nav-link px-2 text-muted"><img src={insta} alt="Instagram" className="img-fluid" style={{ width: '40px' }} /></a>
          </li>  {/* Enlace a mi instagram */}
          <li className="nav-item">
            <a href="https://www.x.com/daanieeeelllll" className="nav-link px-2 text-muted"><img src={x} alt="X" className="img-fluid" style={{ width: '40px' }} /></a>
          </li> {/* Enlace a mi x */}
        </ul>
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted btn-primary">Volver arriba</a> {/* Volver arriba de la pagina */}
          </li>
        </ul>
        <p className="text-center text-muted">© 2024 Todos mis derechos reservados</p> {/* © 2024 Todos mis derechos reservados */}
      </footer>
    </div>
  );
}

export default Footer;
