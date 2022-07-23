import React from 'react'
import AddToCart from '../AddToCart'

const ProductSummary = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="product" />
      <h3>Product Title</h3>
      <h4>Price R$ 99</h4>
      <AddToCart label="Add to cart" />
    </div>
  )
}

export default ProductSummary