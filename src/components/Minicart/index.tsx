import React, { useEffect, useState } from 'react'
import { usePokemonList } from '../../context/context'
import Button from '../Button'
import MinicartProductItem from '../MinicartProductItem'
import { MinicartContainer, MinicartContent, MinicartFooter, MinicartHeader, MinicartListItem, MinicartListItems, MinicartTotalValue } from './styles'

const Minicart = () => {
  const { 
    state,
    setState,
  } = usePokemonList();

  const [ total, setTotal ] = useState(0);

  const removePokemon =(index: number) => {
    const newCart = [...state.cart]
    newCart.splice(index, 1)
    setState({
      ...state,
      cart: newCart,
    })
  }

  useEffect(() => {
    setTotal(state.cart.reduce((acc: number, curr: any) => acc + curr.price, 0))
  }, [state.cart])

  return (
    <MinicartContainer>
      <MinicartContent>

        <MinicartHeader>
          <h3>Carrinho</h3>
        </MinicartHeader>

        <MinicartListItems>
          {state.cart.length > 0 ? state.cart.map((item: any, index: number) => (
            <MinicartListItem key={index}>
              <MinicartProductItem id={item.id} name={item.name} image={item.image} price={item.price} />
              <Button label="X" onClick={(e) => removePokemon(index)} />
            </MinicartListItem>
          )) : <p>Nenhum produto no carrinho</p>}
        </MinicartListItems>

        <MinicartFooter>
          <MinicartTotalValue>
            <span>Total</span>
            <span>R$ {total}</span>
          </MinicartTotalValue>
          <Button label="Finalizar Pedido" />
        </MinicartFooter>

      </MinicartContent>
    </MinicartContainer>
  )
}

export default Minicart