import React from 'react';
import PropTypes from 'prop-types';
import  {setIn} from 'immutable';

const Precios = (props) => {
    const {estadoGlobal, setEstadoGlobal} = props;

    const handlePrecio = (atributo) => (event) => {
        const estadoInmutable = setIn(
            estadoGlobal,
            ['precios', atributo],
            event.target.value
        )
        setEstadoGlobal(estadoInmutable);
    }

    return (
        <div>
            <div>
                Pan1:
                <input
                    type="number"
                    value={estadoGlobal.precios.pan1}
                    onChange={handlePrecio('pan1')}
                />
            </div>

            <div>
                Lechuga:
                <input
                    type="number"
                    value={estadoGlobal.precios.lechuga}
                    onChange={handlePrecio('lechuga')}
                />
            </div>

            <div>
                Queso:
                <input
                    type="number"
                    value={estadoGlobal.precios.queso}
                    onChange={handlePrecio('queso')}
                />
            </div>

            <div>
                Carne:
                <input
                    type="number"
                    value={estadoGlobal.precios.carne}
                    onChange={handlePrecio('carne')}
                />
            </div>
            <div>
                Pan2:
                <input
                    type="number"
                    value={estadoGlobal.precios.pan2}
                    onChange={handlePrecio('pan2')}
                />
            </div>
        </div>
    );
};

Precios.propTypes = {
    setEstadoGlobal: PropTypes.func.isRequired,
    estadoGlobal: PropTypes.shape({
        hamburguesas: PropTypes.array.isRequired,
        precios: PropTypes.shape({
            pan1: PropTypes.string.isRequired,
            lechuga: PropTypes.string.isRequired,
            queso: PropTypes.string.isRequired,
            carne: PropTypes.string.isRequired,
            pan2: PropTypes.string.isRequired
        })
    })
}

export default Precios;