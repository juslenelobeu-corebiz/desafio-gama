import React from 'react'
import ProductSummary from '../ProductSummary'
import { ProductListContainer } from './styles'

const ProductList = () => {
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