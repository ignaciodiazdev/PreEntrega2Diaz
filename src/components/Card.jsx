import './Card.css'

export const Card = ({ id, nombre, img, precio, categoria, onShowDetails }) => {
  return (
    <div className="cardProducto" >
      <div  className='cardClickeable' onClick={() => onShowDetails(id)}>
        <img className='cardImagen' src={img} alt={nombre} />
        <div className='cardContenido'>
            <p className='cardCategoria'>{categoria}</p>
            <h3 className='cardNombre'>{nombre}</h3>
            <p className='cardPrecio'>USD {precio}</p>
        </div>
      </div>
      <div className='cardAccion'>
          <button className='cardBoton btn-addProducto'>Agregar al Carrito</button>
      </div>
    </div>
  )
}
