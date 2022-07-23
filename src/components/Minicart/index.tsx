import React from 'react'
import Button from '../Button'
import ProductSummary from '../ProductSummary'

const Minicart = () => {
  return (
    <section>
      <header>
        <h3>Carrinho</h3>
      </header>
      <div>
        <ProductSummary />
        <Button label="X" />
      </div>
      <footer>
        <h4>Total: R$ 99</h4>
        <Button label="Finalizar Pedido" />
      </footer>
    </section>
  )
}

export default Minicart