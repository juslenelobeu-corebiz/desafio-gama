import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../../utils/requestAPI'
import AddToCart from '../AddToCart'

interface ProductSummaryProps {
  url: string
}

const ProductSummary = ({ url }: ProductSummaryProps) => {

  const [data, setData] = useState({
    id: 0,
    name: '',
    image: '',
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    url !== '' && getPokemonList(url).then((res) => {
      const data = {
        id: res.id,
        name: res.name,
        image: res.sprites.front_default,
        price: res.base_experience,
        stock: 10,
      }
      setData(data);
    })
  }, [])   

  if(data.id === 0) {
    return null;
  } else {
    return (
      <div>
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <h3>{data.name}</h3>
          <p>{data.price}</p>
          <AddToCart label='Adicionar ao Carrinho' pokemon={data} />
        </div>
      </div>
    )
  }
}

export default ProductSummary