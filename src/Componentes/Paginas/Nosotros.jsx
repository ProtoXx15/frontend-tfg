import React from 'react';
import { Carousel, ProgressBar } from 'react-bootstrap';
import Header from '../Elementos/Header';
import Footer from '../Elementos/Footer';
import './nosotros.css';
import Favicon from '../Login/favicon';
import Ana from '../../assets/anay.jpg';
import Juan from '../../assets/juanb.jpg';
import Maria from '../../assets/mariam.png';
import Pedro from '../../assets/pedroz.jpg';
import Sofia from '../../assets/sofiap.png';

// Datos de perfiles
const profiles = [
    {
        "name": "Ana Martinez",
        "title": "Yoga",
        "description": "Ana Martinez es una apasionada instructora de yoga con una energía refrescante y juvenil. Con su enfoque dinámico y moderno, Ana cautiva a sus alumnos desde el primer día. Su profunda comprensión de la práctica del yoga, combinada con su paciencia y entusiasmo, hace que cada clase sea una experiencia única y enriquecedora para todos los participantes.",
        "image": Ana,
        "experiencia": 70,
        "antigüedad": 54,
        "energía": 87,
        "paciencia": 65
    },
    {
        "name": "María González",
        "title": "Musculación",
        "description": "María González es una entrenadora de musculación comprometida y motivadora. Con su enfoque centrado en la forma correcta y el progreso constante, María ayuda a sus alumnos a alcanzar sus objetivos de acondicionamiento físico de manera segura y efectiva. Su energía contagiosa y su actitud positiva hacen que cada sesión de entrenamiento sea divertida y estimulante.",
        "image": Maria,
        "experiencia": 35,
        "antigüedad": 20,
        "energía": 99,
        "paciencia": 75
    },
    {
        "name": "Juan Perez",
        "title": "Boxeo",
        "description": "Juan Perez es un instructor apasionado de boxeo que inspira a sus alumnos con su dedicación y experiencia. Con un estilo de enseñanza enérgico y motivador, Juan guía a sus estudiantes a través de desafiantes sesiones de entrenamiento que los ayudan a mejorar su técnica y resistencia. Su entusiasmo por el boxeo crea un ambiente emocionante y motivador en cada clase.",
        "image": Juan,
        "experiencia": 99,
        "antigüedad": 80,
        "energía": 80,
        "paciencia": 15
    },
    {
        "name": "Pedro López",
        "title": "Zumba",
        "description": "Pedro López es un animado instructor de Zumba que trae alegría y energía a cada sesión de baile. Con su estilo divertido y sus coreografías enérgicas, Pedro hace que cada clase sea una fiesta llena de ritmo y diversión. Su pasión por la danza y el fitness se refleja en su compromiso con el éxito de sus alumnos, ayudándoles a alcanzar sus metas de acondicionamiento físico mientras se divierten.",
        "image": Pedro,
        "experiencia": 75,
        "antigüedad": 70,
        "energía": 80,
        "paciencia": 90
    },
    {
        "name": "Sofía Díaz",
        "title": "Pilates",
        "description": "Sofía Díaz es una maestra de Pilates que combina su juventud con un profundo conocimiento de la disciplina. Con un enfoque meticuloso en la técnica y la alineación corporal, Sofía ayuda a sus alumnos a fortalecer sus cuerpos y mejorar su postura. Aunque es joven, su compromiso con la excelencia y su paciencia inquebrantable hacen que sea una instructora excepcional para aquellos que buscan mejorar su salud y bienestar a través del Pilates.",
        "image": Sofia,
        "experiencia": 100,
        "antigüedad": 100,
        "energía": 60,
        "paciencia": 98
    },
];

const Nosotros = () => {
    return (
        <div>
            <Favicon />
            <Header />
            {/* Sección de "Quiénes Somos" */}
            <div className='quienessomos'>
                <h2>¿Quiénes Somos?</h2>
                <p>
                    En ProtoGym, no solo somos un centro de entrenamiento, somos una comunidad comprometida con tu bienestar y tus metas. Fundado por un equipo de jóvenes apasionados y en constante movimiento, nos esforzamos por ofrecerte más que solo un lugar para hacer ejercicio. Aquí te sentirás como en casa desde el momento en que cruces nuestras puertas.
                </p>
                {/* Lista de características */}
                <ul>
                    <li>Energía sin límites: Nuestro equipo está lleno de energía y entusiasmo, contagiando a todos los que nos rodean con nuestro espíritu vibrante y positivo.</li>
                    <li>Dedicación total: Desde los entrenadores hasta el personal de recepción, todos estamos dedicados a tu éxito. Nos esforzamos por conocerte personalmente, entender tus objetivos y apoyarte en cada paso del camino.</li>
                    <li>Ambiente acogedor: Queremos que cada visita sea una experiencia agradable. Nuestras instalaciones están diseñadas para crear un ambiente acogedor y motivador, donde te sientas cómodo y seguro para superarte a ti mismo.</li>
                    <li>Variedad de opciones: Ya sea que prefieras levantar pesas, hacer yoga, o probar una clase de alta intensidad, tenemos algo para todos. Nuestra amplia gama de programas y actividades te permite encontrar la rutina perfecta para ti.</li>
                </ul>
                <p>
                    En ProtoGym, no solo te ayudamos a ponerte en forma, te ayudamos a alcanzar tu mejor versión. Únete a nosotros y descubre el poder de unir fitness, diversión y comunidad en un solo lugar.
                </p>
            </div>
            {/* Carrusel de perfiles */}
            <Carousel indicators={false}>
                {/* Mapeo de perfiles */}
                {profiles.map((profile, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            {/* Contenedor de perfil */}
                            <div className="profile-container">
                                {/* Imagen de perfil */}
                                <div className="profile-image">
                                    <img
                                        className="d-block ajustefoto"
                                        src={profile.image}
                                        alt={profile.name}
                                    />
                                </div>
                                {/* Información del perfil */}
                                <div className="profile-info">
                                    <h3>{profile.name}</h3>
                                    <h4>{profile.title}</h4>
                                    <blockquote>{profile.description}</blockquote>
                                </div>
                            </div>
                            {/* Barras de progreso */}
                            <div className="progress-bars">
                                <div>
                                    <strong>Experiencia:</strong>
                                    <ProgressBar
                                        now={profile.experiencia}
                                        label={`${profile.experiencia}%`}
                                        className="black-bar"
                                    />
                                </div>
                                <div>
                                    <strong>Antigüedad:</strong>
                                    <ProgressBar
                                        now={profile.antigüedad}
                                        label={`${profile.antigüedad}%`}
                                        className="black-bar1"
                                    />
                                </div>
                                <div>
                                    <strong>Energía:</strong>
                                    <ProgressBar
                                        now={profile.energía}
                                        label={`${profile.energía}%`}
                                        className="black-bar2"
                                    />
                                </div>
                                <div>
                                    <strong>Paciencia:</strong>
                                    <ProgressBar
                                        now={profile.paciencia}
                                        label={`${profile.paciencia}%`}
                                        className="black-bar3"
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Footer />
        </div>
    );
};

export default Nosotros;
