import React from 'react';
import image1 from '../../assets/carrusel1.jpg';
import image2 from '../../assets/carrusel2.jpg';
import image3 from '../../assets/carrusel3.jpg';
import musculo from '../../assets/musculo.png';
import sana from '../../assets/comida-sana.png';
import guante from '../../assets/guantes-de-boxeo.png';
import entrenador from '../../assets/entrenador.webp';
import comida from '../../assets/nutricion.webp';
import yoga2 from '../../assets/yoga2.webp';
import Favicon from '../Login/favicon';
import '../Paginas/paginas.css';

function Home() {
    return (
        <main>
            <Favicon />
            {/* Carrusel */}
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                {/* Indicadores del carrusel */}
                <div className="carousel-indicators">
                    {/* Botones indicadores */}
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                {/* Imágenes del carrusel */}
                <div className="carousel-inner">
                    {/* Primera imagen */}
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 imagendecarrusel" alt="First slide" />
                        {/* Contenido de la primera imagen */}
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 style={{ color: '#ffff66' }}>Esfuerzo</h1>
                                <p className="opacity-75" style={{ color: '#ffff66' }}>El cuerpo consigue lo que la mente desea.</p>
                            </div>
                        </div>
                    </div>
                    {/* Segunda imagen */}
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 imagendecarrusel" alt="Second slide" />
                        {/* Contenido de la segunda imagen */}
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 style={{ color: '#ffff66' }}>Pasión.</h1>
                                <p style={{ color: '#ffff66' }}>Ser grande no es cuestión de tamaño, sino de actitud.</p>
                            </div>
                        </div>
                    </div>
                    {/* Tercera imagen */}
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 imagendecarrusel" alt="Third slide" />
                        {/* Contenido de la tercera imagen */}
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1 style={{ color: '#ffff66' }}>Entrega.</h1>
                                <p style={{ color: '#ffff66' }}>Lucha por aquello que un día pensaste que llegarías a ser.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Controles del carrusel */}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Atrás</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Contenido principal */}
            <div className="container primercontenedor">
                {/* Sección 1 */}
                <div className="row text-center">
                    <div className="col-lg-4 mb-4">
                        <img src={musculo} className="bd-placeholder-img emoticono" alt="Foto de musculo" />
                        <h2 className="fw-normal">Dedicación</h2>
                        <p>En nuestro equipo, contamos con profesionales altamente capacitados, comprometidos con tu bienestar y progreso.</p>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <img src={sana} className="bd-placeholder-img emoticono" alt="Foto de comida" />
                        <h2 className="fw-normal">Cuidamos tu salud</h2>
                        <p>Tu salud es nuestra prioridad. Nos aseguramos de ofrecerte un entorno seguro y saludable para alcanzar tus objetivos.</p>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <img src={guante} className="bd-placeholder-img emoticono imgemoti" alt="Foto de guantes" />
                        <h2 className="fw-normal">Clases de alto nivel</h2>
                        <p>Nuestras clases están diseñadas para ofrecerte el mejor entrenamiento, guiado por expertos en la materia.</p>
                    </div>
                </div>

                {/* Separador */}
                <hr className="featurette-divider" />

                {/* Sección 2 */}
                <div className="row featurette">
                    <div className="col-md-7 textotablet">
                        <h2 className="featurette-heading fw-normal lh-1">Nuestros entrenadores. <span className="text-body-secondary">Te sorprenderán.</span></h2>
                        <p className="lead">Contamos con un equipo de entrenadores profesionales, dedicados y apasionados por ayudarte a alcanzar tus metas de la mejor manera posible.</p>
                        <a href="/nosotros" className="btn btn-primary mb-3 enlacepersonal">Conoce a nuestros entrenadores</a>
                    </div>
                    <div className="col-md-5">
                        <img src={entrenador} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fotomosaico" alt="Placeholder" />
                    </div>
                </div>

                {/* Separador */}
                <hr className="featurette-divider" />

                {/* Sección 3 */}
                <div className="row featurette ">
                    <div className="col-md-7 order-md-2 textotablet">
                        <h2 className="featurette-heading fw-normal lh-1">Nutrición y dedicación. <span className="text-body-secondary">Compruébalo tú mismo.</span></h2>
                        <p className="lead">Ponemos todo nuestro esfuerzo en brindarte el mejor apoyo en nutrición, para que tu alimentación sea tan efectiva como tu entrenamiento.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={comida} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fotomosaico" alt="Placeholder" />
                    </div>
                </div>
                {/* Separador */}
                <hr className="featurette-divider" />

                {/* Sección 4 */}
                <div className="row featurette">
                    <div className="col-md-7 textotablet">
                        <h2 className="featurette-heading fw-normal lh-1">Variedad y flexibilidad. <span className="text-body-secondary">Lo mejor para ti.</span></h2>
                        <p className="lead">Ofrecemos una amplia variedad de clases, horarios flexibles y fomentamos buenos hábitos que hacen nuestras clases únicas y efectivas.</p>
                        <a href="/clases" className="btn btn-primary mb-3 enlacepersonal">Explora nuestras clases</a>
                    </div>
                    <div className="col-md-5">
                        <img src={yoga2} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fotomosaico" alt="Placeholder" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
