
import './Detail.css'

export const Detail = ({id, nombre, img, descripcion, precio, categoria, delivery}) => {
  return (
    <div className="cardDetail">
        <div className='cardDetailImageContainer'>
            <img className='cardDetailImage' src={img}/>
        </div>
        <div className="cardDetailContent">
            <p className="cardDetailCategory">{categoria}</p>
            <h3 className="cardDetailName">{nombre}</h3>
            <p className="cardDetailDescription">{descripcion}</p>
            <div className='cardDetailModality'>
                <span className='cardDetailMode'>
                    <i className='bx bxs-store'></i> Retiro en tienda
                </span>
                <span className={delivery === 'true' ? 'cardDetailMode' : 'inactiveDelivery'}>
                    <i className='bx bxs-car'></i> Envío a Domicilio
                </span>
            </div>
            <p className="cardDetailPrice">USD {precio}</p>
            <div className='cardDetailActions'>
                <button className='cardBoton btn-addProducto'>Agregar al Carrito</button>
            </div>
        </div>
    </div>
  )
}
