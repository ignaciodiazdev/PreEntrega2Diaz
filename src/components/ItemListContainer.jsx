import { useFetch } from '../hooks/useFetch';
import { API_URLS } from '../constants/index';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from './Card';

import './ItemListContainer.css'
import { useState, useEffect } from 'react';

export const ItemListContainer = () => {
  const navigate = useNavigate();
  let { categoryId } = useParams();
  const [productoFiltrado, setProductoFiltrado] = useState([]);
  const { data: productos } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
    
  const onShowDetails = (id) => {
    navigate(`/item/${id}`)
  }

  useEffect(() => {
    let updateProductList = [...productos];

    updateProductList = updateProductList.filter((item) => item.categoria == categoryId)
    setProductoFiltrado(updateProductList);
  
  }, [categoryId, productos])
  
  return (
    <div className='itemListContainer'>
      <h2></h2>
      <div className='cardContainer'>
        {
          categoryId == undefined ? (
            productos.map( producto => (
              <Card key={producto.id} {...producto} onShowDetails={onShowDetails}/>
            ))
          ) : (
            productoFiltrado.map(producto => (
              <Card key={producto.id} {...producto} onShowDetails={onShowDetails}/>
            ))
          )
        }
      </div>
    </div>
  )
}
