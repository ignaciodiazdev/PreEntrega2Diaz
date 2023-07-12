import { useParams } from "react-router-dom"
import { API_URLS } from '../constants/index';
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Detail } from "./Detail";

import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { data: productos } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
  const [foundProducto, setFoundProducto] = useState(undefined);

  useEffect(()=>{
    if(productos){
      const findProducto = productos.find(producto => producto.id === id);
      setFoundProducto(findProducto);
    }
  },[productos])

  return (
    <div>
        <h1 className="detailContainerTitle">Detalle del Producto</h1>
        <div className="cardDetailContainer">
          { foundProducto && (<Detail {...foundProducto} />)}
        </div>
    </div>
  )
}
