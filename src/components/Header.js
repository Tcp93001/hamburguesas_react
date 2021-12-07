import React from 'react';
import {Link} from 'react-router-dom';

import {RUTAS} from '../helpers/constants';

const Header = () => {
    return (
        <div>
            <h1>Inicio</h1>
            <nav>
                <Link to={RUTAS.instrucciones}>Instrucciones</Link>
                <span> - </span>
                <Link to={RUTAS.precios}>Precios</Link>
                <span> - </span>
                <Link to={RUTAS.cotizador}>Cotizador</Link>
            </nav>
        </div>
    );
};

export default Header;