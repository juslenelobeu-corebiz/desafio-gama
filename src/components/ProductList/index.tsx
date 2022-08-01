import { usePokemonList } from '../../context/context'
import ProductSummary from '../ProductSummary'
import { ProductListContainer } from './styles'

const ProductList = () => {
  const { 
    state,
  } = usePokemonList();

  return (
    <ProductListContainer>
    {state.dataPokemon.results.map((item: any, index: number) => (
      <ProductSummary key={index} url={item.url} />
    ))}
  </ProductListContainer>
  )
  
}

export default ProductList