import React, { useState, useEffect } from 'react';
import Header from '../Elementos/Header';
import Footer from '../Elementos/Footer';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { transformNombre, transformNumero } from '../../lib/utils/transform';
import Favicon from '../Login/favicon';

const Perfil = () => {
    const [user, setUser] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [cuentaRegresiva, setCuentaRegresiva] = useState(null);

    useEffect(() => {
        // Obtener los datos del usuario
        axios.get('http://localhost:8000/api/detalles_usuario/', {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                setUser(response.data);
                const cuentaRegresiva = calcularCuentaRegresiva(response.data.fecha_inicio_membresia, response.data.membresia.duracion);
                setCuentaRegresiva(cuentaRegresiva);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        // Obtener las reservas del usuario
        axios.get('http://localhost:8000/api/verificar_reserva/', {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                console.log(response.data.reservations);
                setReservations(response.data.reservations);
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, []);

    const calcularCuentaRegresiva = (fechaInicio, duracionMeses) => {
        const fechaInicioDate = new Date(fechaInicio);
        const fechaFin = new Date(fechaInicioDate.setMonth(fechaInicioDate.getMonth() + duracionMeses));
        const now = new Date();
        const timeLeft = fechaFin - now;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        return daysLeft;
    };

    const handleCancel = (selectedDia, selectedHorario, idClase) => {
        axios.delete(`http://localhost:8000/api/cancelar_reserva/${selectedDia}/${selectedHorario}/${parseInt(idClase)}`, {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(() => {
                location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleEliminarCuenta = () => {
        axios.delete('http://localhost:8000/api/delete/', {
            headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
        })
            .then(response => {
                console.log(response.data);
                localStorage.removeItem('token');
                // Redireccionar o hacer algo después de eliminar la cuenta
                window.location.href = '/login';
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    if (!user) return <div>Cargando...</div>;

    const renderReservations = () => {
        return reservations.map(reservation => (
            <Col key={reservation.id} md={4} className="mb-3">
                <Card>
                    <Card.Body>
                        <Card.Title>{transformNumero(reservation.clase.nombre_clase)}</Card.Title>
                        <Card.Text>
                            <strong>Fecha:</strong> {reservation.fecha}<br />
                            <strong>Hora:</strong> {reservation.horario}<br />
                            <strong>Entrenador:</strong> {reservation.clase.entrenador.nombre + ' ' + reservation.clase.entrenador.apellido}<br />
                        </Card.Text>
                        <Button variant="danger" onClick={() => handleCancel(reservation.fecha, reservation.horario, reservation.clase.nombre_clase)}>Cancelar Reserva</Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    return (
        <div>
            <Favicon />
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header as="h5">Perfil de {user.first_name} {user.last_name}</Card.Header>
                            <Card.Body>
                                <Card.Title>Membresía: {user.membresia.nombre}</Card.Title>
                                <Card.Text>
                                    <strong>Correo:</strong> {user.email}<br />
                                    <strong>Fecha de inicio de membresía:</strong> {new Date(user.fecha_inicio_membresia).toLocaleDateString()}<br />
                                    <strong>Días restantes de membresía:</strong> {cuentaRegresiva}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h4>Reservas</h4>
                        {reservations.length === 0 ? (
                            <p>No tienes reservas.</p>
                        ) : (
                            <Row>
                                {renderReservations()}
                            </Row>
                        )}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Button variant="danger" onClick={handleEliminarCuenta}>Eliminar Cuenta</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Perfil;
