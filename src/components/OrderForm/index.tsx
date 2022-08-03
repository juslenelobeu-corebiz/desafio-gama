import React from 'react'
import { usePokemonList } from '../../context/context'
import { OrderFormContainer } from './styles'

const OrderForm = () => {
  const { state } = usePokemonList()

  return (
    <OrderFormContainer>
      <h1>Ordem de Pedido</h1>
      <h2>Pedido realizado com sucesso!</h2>
      <h3>Resumo do pedido</h3>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>R$ {state.cart.reduce((acc: number, curr: any) => acc + curr.price, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </OrderFormContainer>
  )
}

export default OrderForm