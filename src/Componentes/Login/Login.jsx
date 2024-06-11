import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Favicon from './favicon';
import './login-register.css';

// Componente de inicio de sesión
const Login = () => {
    const navigate = useNavigate(); // Hook para la navegación
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [error, setError] = useState(''); // Estado para el mensaje de error

    const urlBase = 'https://backend-tfg-production-144d.up.railway.app/api/login/'; // URL base de la API para iniciar sesión

    // Maneja el envío del formulario de inicio de sesión
    const handleLoginSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Realiza una solicitud POST a la API de inicio de sesión
        axios.post(urlBase, { username: username, password: password })
        .then(response => {
            localStorage.setItem('token', response.data.token); // Guarda el token en el almacenamiento local
            navigate('/home'); // Navega a la página de inicio
        })
        .catch(error => {
            console.log(error);
            setError('Usuario o contraseña incorrectos'); // Muestra un mensaje de error
        });
    };

    // Estilo para el fondo
    const fondo = {
        backgroundColor: 'grey',
        minHeight: '100vh',
    };

    return (
        <section className="h-100 gradient-form" style={fondo}>
            <Favicon />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <h4 className="mt-1 mb-5 pb-1">Inicia Sesión</h4>
                                        </div>
                                        {/* Muestra un mensaje de error si existe */}
                                        {error && <div className="alert alert-danger mb-4">{error}</div>}
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="usuario">Nombre de usuario</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nombre de usuario"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="contrasenna">Contraseña</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Contraseña"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Iniciar Sesión</button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">¿No tienes cuenta?</p>
                                                <button className="btn btn-outline-warning" type="button">
                                                    <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Regístrate</a>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Transforma Tu Cuerpo, Eleva Tu Espíritu.</h4>
                                        <h3 className="small mb-0">¡Bienvenido al Desafío del Gimnasio!</h3>
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

export default Login;
