import React from 'react'

const ComponenteLista = (props) => {
    const { producto } = props;

    return (
        <div style={{border: "1px solid black", padding: "5px", width: "200px"}}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
        </div>
    )
}

export default ComponenteLista