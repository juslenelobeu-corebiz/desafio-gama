import React from 'react'
import { MinicartProductItemContainer } from './styles'

const MinicartProductItem = () => {
  return (
    <MinicartProductItemContainer>
      <img src="https://via.placeholder.com/50" alt="product" />
      <div>
        <h3>Product Title</h3>
        <span>Price R$ 99</span>
      </div>
    </MinicartProductItemContainer>
  )
}

export default MinicartProductItem