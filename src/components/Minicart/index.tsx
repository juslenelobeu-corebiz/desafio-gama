import React from 'react'
import Button from '../Button'
import MinicartProductItem from '../MinicartProductItem'
import ProductSummary from '../ProductSummary'
import { MinicartContainer, MinicartContent, MinicartFooter, MinicartHeader, MinicartListItem, MinicartListItems, MinicartTotalValue } from './styles'

const Minicart = () => {
  return (
    <MinicartContainer>
      <MinicartContent>

        <MinicartHeader>
          <h3>Carrinho</h3>
        </MinicartHeader>

        <MinicartListItems>
          <MinicartListItem>
            <MinicartProductItem />
            <Button label="X" />
          </MinicartListItem>
          <MinicartListItem>
            <MinicartProductItem />
            <Button label="X" />
          </MinicartListItem>
          <MinicartListItem>
            <MinicartProductItem />
            <Button label="X" />
          </MinicartListItem>
          <MinicartListItem>
            <MinicartProductItem />
            <Button label="X" />
          </MinicartListItem>
          <MinicartListItem>
            <MinicartProductItem />
            <Button label="X" />
          </MinicartListItem>
        </MinicartListItems>

        <MinicartFooter>
          <MinicartTotalValue>
            <span>Total</span>
            <span>R$ 99</span>
          </MinicartTotalValue>
          <Button label="Finalizar Pedido" />
        </MinicartFooter>

      </MinicartContent>
    </MinicartContainer>
  )
}

export default Minicart