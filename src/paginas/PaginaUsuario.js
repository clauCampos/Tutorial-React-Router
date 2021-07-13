import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PaginaUsuario(props) {

    // Estado inicial del usuario
    const estadoInicial = {
        usuario: {},
        cargando: true,
    }

    // Permite obtener y modificar el estado
    const [usuario, setUsuario] = useState(estadoInicial);

    // Obtenemos datos desde la API de GitHub
    useEffect(() => {
        const getUsuario = async () => {

            // pasamos el nombre del usuario a la petición
            const ruta = `https://api.github.com/users/${props.match.params.nombre}`;
            const { data } = await axios(ruta);

            // Actualización del estado
            setUsuario(data)
        }

        // Ejecutamos la función
        getUsuario();
    }, []);

    // Mostramos por pantalla los dato
    return usuario.cargando ? (
        <div>Cargando...</div>
    ) : (
        <div className="container">
            <h1>{props.match.params.id}</h1>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Localización</th>
                    <th>Web</th>
                    <th>Seguidores</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{usuario.name}</td>
                    <td>{usuario.location}</td>
                    <td><a href={usuario.blog}>{usuario.blog}</a></td>
                    <td>{usuario.followers}</td>
                </tr>
                </tbody>
            </table>
            <Link to="/">Volver</Link>
        </div>
    )
}