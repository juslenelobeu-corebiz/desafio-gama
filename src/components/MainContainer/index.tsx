import React from 'react'
import { usePokemonList } from '../../context/context'
import Minicart from '../Minicart'
import OrderForm from '../OrderForm'
import ProductList from '../ProductList'
import { Main } from './styles'

const MainContainer = () => {
  const { state } = usePokemonList()
  return (
    <Main>
      {
      state.openOrderForm ? <OrderForm /> :
        <>
          <ProductList />
          <Minicart />
        </>
      }
    </Main>
  )
}

export default MainContainer