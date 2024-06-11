import React, { useState, useEffect } from 'react';
import './paginas.css';
import Header from '../Elementos/Header';
import Footer from '../Elementos/Footer';
import imgBoxeo from '../../assets/boxeo.webp';
import imgYoga from '../../assets/yoga.webp';
import imgMusculo from '../../assets/musculo.webp';
import imgPilates from '../../assets/pilates.webp';
import imgZumba from '../../assets/zumba.webp';
import Favicon from '../Login/favicon';
import axios from 'axios';
import { transformNombre } from '../../lib/utils/transform';

// Datos de las diferentes clases
const cardsData = [
    {
        h3: "Boxeo",
        descripcion: "¡El boxeo te pondrá en forma, liberará tu estrés y aumentará tu confianza, todo mientras aprendes autodefensa! ¡Ponte los guantes y descúbrelo!",
        image: imgBoxeo,
        hasForm: true,
        formData: {
            horario: ["09:00-10:00", "12:00-13:00", "18:00-19:00"],
            dias: ["Lunes", "Miércoles", "Sábado"]
        }
    },
    {
        h3: "Yoga",
        descripcion: "Encuentra la serenidad y el equilibrio interior con nuestras sesiones de yoga. Perfecto para relajarte y rejuvenecer tu mente y cuerpo.",
        image: imgYoga,
        hasForm: true,
        formData: {
            horario: ["09:00-10:00", "14:00-15:00", "20:00-21:00"],
            dias: ["Martes", "Jueves", "Sábado"]
        }
    },
    {
        h3: "Musculación",
        descripcion: "Desarrolla tu fuerza y resistencia con nuestras clases. Ideal para quienes buscan ganar masa muscular y mejorar su condición física.",
        image: imgMusculo,
        hasForm: true,
        formData: {
            horario: ["10:00-11:00", "15:00-16:00", "19:00-20:00"],
            dias: ["Lunes", "Miércoles", "Viernes"]
        }
    },
    {
        h3: "Pilates",
        descripcion: "Fortalece tu núcleo y mejora tu flexibilidad con nuestras clases de pilates. Perfecto para tonificar el cuerpo y aumentar la estabilidad.",
        image: imgPilates,
        hasForm: true,
        formData: {
            horario: ["11:00-12:00", "16:00-17:00", "18:00-19:00"],
            dias: ["Lunes", "Jueves", "Sábado"]
        }
    },
    {
        h3: "Zumba",
        descripcion: "Baila y quema calorías con nuestras energéticas clases de zumba. ¡Una forma divertida de ejercitarte al ritmo de la música!",
        image: imgZumba,
        hasForm: true,
        formData: {
            horario: ["09:00-10:00", "17:00-18:00", "19:00-20:00"],
            dias: ["Martes", "Jueves", "Viernes"]
        }
    },
];

// Componente para cada tarjeta de clase
const Card = ({ h3, descripcion, image, hasForm, formData }) => {
    const [isReserved, setIsReserved] = useState(false);  // Estado para verificar si la clase está reservada
    const [selectedHorario, setSelectedHorario] = useState(formData.horario[0]);  // Estado para el horario seleccionado
    const [selectedDia, setSelectedDia] = useState(formData.dias[0]);  // Estado para el día seleccionado

    // Efecto para verificar el estado de la reserva cuando cambian el horario o el día seleccionados
    useEffect(() => {
        checkReservationStatus(selectedHorario, selectedDia);
    }, [selectedHorario, selectedDia]);

    // Función para verificar el estado de la reserva
    const checkReservationStatus = (horario, dia) => {
        axios.get("http://localhost:8000/api/verificar_reserva/", {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                const reservations = response.data.reservations;
                const isReservedForThisClass = reservations.some(reservation =>
                    reservation.clase.nombre_clase === transformNombre(h3) && reservation.horario === horario && reservation.fecha === dia
                );
                setIsReserved(isReservedForThisClass);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // Función para manejar la reserva de una clase
    const handleReserve = () => {
        if (isReserved) {
            alert("Ya tienes una reserva.");
            return;
        }
        const data = { "clase": transformNombre(h3), "horario": selectedHorario, "fecha": selectedDia };
        axios.post("http://localhost:8000/api/reservar_clase/", data, {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                console.log(response);
                setIsReserved(true);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // Función para manejar la cancelación de una reserva
    const handleCancel = () => {
        axios.delete(`http://localhost:8000/api/cancelar_reserva/${selectedDia}/${selectedHorario}/${transformNombre(h3)}`, {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                console.log(response);
                setIsReserved(false);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="col">
            <Favicon />
            <div className="card shadow-sm">
                {image ? (
                    <img src={image} className="bd-placeholder-img fotos-clases" alt="Card image" />
                ) : (
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Clase</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Tarjeta</text>
                    </svg>
                )}
                <div className="card-body">
                    <h3 className="card-title">{h3}</h3>
                    <p className="card-text">{descripcion}</p>
                </div>
                {hasForm && (
                    <form className="p-3">
                        <div className="mb-3">
                            <label htmlFor="timeSelect" className="form-label">Horario</label>
                            <select
                                className="form-select"
                                id="timeSelect"
                                value={selectedHorario}
                                onChange={(e) => setSelectedHorario(e.target.value)}
                            >
                                {formData.horario.map((horario, index) => (
                                    <option key={index} value={horario}>{horario}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="daySelect" className="form-label">Día</label>
                            <select
                                className="form-select"
                                id="daySelect"
                                value={selectedDia}
                                onChange={(e) => setSelectedDia(e.target.value)}
                            >
                                {formData.dias.map((dia, index) => (
                                    <option key={index} value={dia}>{dia}</option>
                                ))}
                            </select>
                        </div>
                        {isReserved ? (
                            <button
                                type="button"
                                className="btn btn-sm btn-danger me-2"
                                onClick={handleCancel}
                            >
                                Cancelar
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-sm btn-success"
                                onClick={handleReserve}
                            >
                                Reservar
                            </button>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

// Componente principal que contiene todas las tarjetas de clases
const Clases = () => {
    return (
        <main>
            <Header />
            <div className="mensaje">
                <h4 className='text-center mt-5 mb-5 titulazo'>¡Prepárate para potenciar tu fuerza, flexibilidad y bienestar en nuestras variadas clases! Desde la intensidad del boxeo hasta la energía de la zumba, pasando por la serenidad del yoga y la tonificación muscular del pilates, ofrecemos una experiencia completa para alcanzar tus objetivos de acondicionamiento físico. <br /> <br />
                ¿Listo para desafiar tu cuerpo y mente? <br /> <br />
                ¡Reserva tu lugar ahora y únete a nuestra comunidad de fitness!</h4>
            </div>
            <div className="album py-5 bg-body-tertiary">
                <div className="container" >
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardsData.map((card, index) => (
                            <Card
                                key={index}
                                h3={card.h3}
                                descripcion={card.descripcion}
                                image={card.image}
                                hasForm={card.hasForm}
                                formData={card.formData}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Clases;
