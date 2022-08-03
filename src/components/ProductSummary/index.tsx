import React, { useEffect, useState } from 'react'
import { usePokemonList } from '../../context/context'
import { getPokemonList } from '../../utils/requestAPI'
import AddToCart from '../AddToCart'
import { ImageContainer, InfoContainer, ProductContainer } from './styles'

interface ProductSummaryProps {
  url: string
}

const ProductSummary = ({ url }: ProductSummaryProps) => {
  const { 
    state,
  } = usePokemonList();

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
        image: res.sprites.other.home.front_default,
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
      <ProductContainer>
        <ImageContainer>
          <img src={data.image} alt={data.name} />
        </ImageContainer>
        <InfoContainer>
          <h3>{data.name}</h3>
          <p>Preço R$ {data.price}</p>
          <AddToCart label='Adicionar ao Carrinho' pokemon={data} />
        </InfoContainer>
      </ProductContainer>
    )
  }
}

export default ProductSummary