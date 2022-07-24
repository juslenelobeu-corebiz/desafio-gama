import React from 'react'
import Minicart from '../Minicart'
import ProductList from '../ProductList'
import { Main } from './styles'

const MainContainer = () => {
  return (
    <Main>
      <ProductList />
      <Minicart />
    </Main>
  )
}

export default MainContainer