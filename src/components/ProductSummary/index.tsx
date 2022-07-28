import React from 'react'
import AddToCart from '../AddToCart'

interface ProductSummaryProps {
  image: string
  title: string
  price: number
  id: number
}

const ProductSummary = ({ image, title, price, id }: ProductSummaryProps) => {
  return (
    <div>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <div>
        <span>Preço</span>
        <span>R$ {price}</span>
      </div>
      <AddToCart label="Add to cart" value={id}/>
    </div>
  )
}

export default ProductSummary