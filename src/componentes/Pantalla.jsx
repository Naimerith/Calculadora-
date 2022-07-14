import React from 'react';
import '../hojasEstilosCss/Pantalla.css'

//Esta es otra forma de crear componentes, cuando no tiene logica
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;