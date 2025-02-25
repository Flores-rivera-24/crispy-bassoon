import React, { useState } from 'react';

const Formulario = () => {


    const [matricula, setMatricula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [edad, setEdad] = useState('');
    const [universidad, setUniversidad] = useState('');
    const [carrera, setCarrera] = useState('');
    const [mostrarDatos, setMostrarDatos] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarDatos(true);
    };

    return (
        <div>
            <h2>Formulario del Estudiante</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Matrícula:</label>
                    <input
                        type="text"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Universidad:</label>
                    <input
                        type="text"
                        value={universidad}
                        onChange={(e) => setUniversidad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Carrera:</label>
                    <input
                        type="text"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            {mostrarDatos && (
                <div>
                    <h3>Datos del Estudiante:</h3>
                    <p>Matrícula: {matricula}</p>
                    <p>Nombre: {nombre}</p>
                    <p>Apellidos: {apellidos}</p>
                    <p>Edad: {edad}</p>
                    <p>Universidad: {universidad}</p>
                    <p>Carrera: {carrera}</p>
                </div>
            )}
        </div>



    );
};

export default Formulario;

<div>
            <h2>Formulario del Estudiante</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Matrícula:</label>
                    <input
                        type="text"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Universidad:</label>
                    <input
                        type="text"
                        value={universidad}
                        onChange={(e) => setUniversidad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Carrera:</label>
                    <input
                        type="text"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            {mostrarDatos && (
                <div>
                    <h3>Datos del Estudiante:</h3>
                    <p>Matrícula: {matricula}</p>
                    <p>Nombre: {nombre}</p>
                    <p>Apellidos: {apellidos}</p>
                    <p>Edad: {edad}</p>
                    <p>Universidad: {universidad}</p>
                    <p>Carrera: {carrera}</p>
                </div>
            )}
        </div>