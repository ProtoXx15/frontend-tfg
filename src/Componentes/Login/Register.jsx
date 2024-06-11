import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/logo.webp'; // Importa el logo desde los assets
import Favicon from './favicon'; // Importa el componente de favicon

// Componente de registro
const Register = () => {
    const navigate = useNavigate(); // Hook para la navegación
    const [registerData, setRegisterData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        membresia: 1 // Valor por defecto para membresía
    });
    const [passwordMatch, setPasswordMatch] = useState(true); // Estado para verificar coincidencia de contraseñas
    const [error, setError] = useState(''); // Estado para los mensajes de error

    const urlRegister = 'http://localhost:8000/api/register/'; // URL de la API para registro

    // Maneja los cambios en los inputs del formulario
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'password' || name === 'confirmPassword') {
            setPasswordMatch(registerData.password === value || registerData.confirmPassword === value);
        }
    };

    // Maneja el envío del formulario de registro
    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (!passwordMatch) {
            setError('Las contraseñas no coinciden');
            return;
        }

        const { firstName, username, lastName, email, password, membresia } = registerData;

        // Solicitud POST a la API de registro
        axios.post(urlRegister, {
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            membresia: parseInt(membresia)
        })
            .then(response => {
                console.log(response.data);
                navigate('/'); // Redirige a la página principal al registrarse
            })
            .catch(error => {
                console.error('Error en el registro:', error.response?.data || error.message);
                setError('Error en el registro');
            });
    };

    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
            <Favicon />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-8">
                                    <div className="card-body p-md-3 mx-md-4">
                                        <div className="text-center">
                                            <img src={image}
                                                style={{ width: '185px' }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">Registrarse</h4>
                                        </div>
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="mb-3 row">
                                                <div className="col">
                                                    <label htmlFor="firstName" className="form-label">Nombre:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        required
                                                        placeholder="Nombre"
                                                        value={registerData.firstName}
                                                        onChange={handleRegisterChange}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="lastName" className="form-label">Apellidos:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        name="lastName"
                                                        required
                                                        placeholder="Apellidos"
                                                        value={registerData.lastName}
                                                        onChange={handleRegisterChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <div className="col">
                                                    <label htmlFor="email" className="form-label">Correo:</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        placeholder="Correo"
                                                        value={registerData.email}
                                                        onChange={handleRegisterChange}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        name="username"
                                                        required
                                                        placeholder="Nombre de usuario"
                                                        value={registerData.username}
                                                        onChange={handleRegisterChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <div className="col">
                                                    <label htmlFor="password" className="form-label">Contraseña:</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Contraseña"
                                                        value={registerData.password}
                                                        onChange={handleRegisterChange}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        placeholder="Confirmar Contraseña"
                                                        value={registerData.confirmPassword}
                                                        onChange={handleRegisterChange}
                                                    />
                                                    {!passwordMatch && <span style={{ color: 'red' }}>Las contraseñas no coinciden</span>}
                                                    {passwordMatch && registerData.confirmPassword && <span style={{ color: 'green' }}>✔</span>}
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <div className="col">
                                                    <label htmlFor="membresia" className="form-label">Membresía:</label>
                                                    <select
                                                        className="form-control"
                                                        id="membresia"
                                                        name="membresia"
                                                        value={registerData.membresia}
                                                        onChange={handleRegisterChange}>
                                                        <option value="1">Básica (19.99€ - Incluye 1 mes)</option>
                                                        <option value="2">Plus (39.99€ - Incluye 3 meses)</option>
                                                        <option value="3">Premium (99.99€ - Incluye 6 meses)</option>
                                                    </select>
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Registrarse</button>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">¿Ya tienes cuenta?</p>
                                                    <button className="btn btn-outline-warning" type="button">
                                                        <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Pincha aquí</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">ProtoGym</h4>
                                        <p className="small mb-0">¡Cambia tu vida con ProtoGym! El primer paso para una nueva vida esta en un simple click, Registrate y empieza a disfrutar de nuestras clases y nuestras máquinas de última generación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
