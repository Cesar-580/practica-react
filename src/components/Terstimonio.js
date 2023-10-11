import React from 'react';
// Importar el archivo css
import '../stylesheets/Testimonio.css';

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img 
                className='imagen-testimonio' 
                src = {require(`../img/${props.imagen}.png`)}
                alt = 'Foto de profile 1'
                />
        
            <div className="contenedor-texto-testomonio">
                <p  className="nombre-testimonio">{props.nombre} en {props.pais}</p>
                <p  className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p  className="texto-testimonio">{props.testimonio}</p>
            </div>

        </div>
        
    );
}

export default Testimonio;