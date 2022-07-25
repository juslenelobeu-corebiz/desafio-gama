import React, { useEffect, useState } from 'react'
import { requestAPI } from '../../utils/requestAPI'
import ProductSummary from '../ProductSummary'
import { ProductListContainer } from './styles'

interface resultProps {
  name: string
  url: string
}
interface ProductListItemProps {
  name: string
  image: string
  price: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductListItemProps>>([])
  
  useEffect(() => {
    requestAPI('https://pokeapi.co/api/v2/pokemon?limit=10', 'GET')
    .then(res => {
      res.results.map((element: resultProps) => {
        requestAPI(`https://pokeapi.co/api/v2/pokemon/${element.name}`, 'GET')
        .then(res2 => {
          const data = {
            name: res2.name,
            image: res2.sprites.front_default,
            price: res2.base_experience
          }
          setProducts([...products,data])
        })
      });
    })
  }, [])
  
  
  return (
    <ProductListContainer>
      <ProductSummary />
      <ProductSummary />
      <ProductSummary />
      <ProductSummary />
      <ProductSummary />
      <ProductSummary />
      <ProductSummary />
    </ProductListContainer>
  )
}

export default ProductList