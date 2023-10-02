import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPageStyle.css';
import { useUser } from '../../contexts/UserContext';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useUser();
    const [formData, setFormData] = useState({ id: '', password: '' });
    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate(); // Obtiene la función de navegación

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        const { id, password } = formData;

        try {
            await login(id, password);
            setError(null);
            navigate('/admin'); // Navega al administrador después de iniciar sesión
        } catch (error) {
            setError(error.message);
            setShowAlert(true); // Mostrar la alerta modal
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="/images/logoLogin.png" className="img-fluid" alt="Logo Hellmann" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">¡Bienvenido! - Sistema de autogestión Asehellmann</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Ingrese su número de identificación completo"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleInputChange}
                                />
                                <label className="form-label" htmlFor="form3Example3">Número de identificación</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Ingrese su contraseña"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Recordar datos de inicio
                                    </label>
                                </div>
                                <a href="#!" className="text-body">¿Olvidó su contraseña?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        {/* Modal de Bootstrap */}
                        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Error de inicio de sesión</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{error}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => setShowAlert(false)}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2023. Todos los derechos reservados.
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
