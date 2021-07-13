import React from 'react';
import { Link } from 'react-router-dom';

export default function PaginaInicio() {
    return (
        <div className="container">
            <h1>Página de inicio</h1>
            <p>
                <Link to="/edulazaro">Proyectos de Edu</Link>
            </p>
        </div>
    );
}