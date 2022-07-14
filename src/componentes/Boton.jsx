import React from 'react'
import '../hojasEstilosCss/Boton.css'

function Boton(props) {
    const esOperador = valor => {
        //Si valor no es un numero (NaN) y no es un punto (.) y tampoco es el signo igual (=) entonces va a retornar true
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return (
        <div
            className={`botonContenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton