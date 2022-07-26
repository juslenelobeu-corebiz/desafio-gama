import { usePokemonList } from '../../context/context'
import ButtonToTop from '../ButtonToTop';
import ProductSummary from '../ProductSummary'
import SearchResult from '../SearchResult';
import { ProductListContainer } from './styles'

const ProductList = () => {
  const { 
    state,
  } = usePokemonList();

  return state.search.name === '' ? (
    <ProductListContainer>
    <ButtonToTop />
    {state.dataPokemon.results.map((item: any, index: number) => (
      <ProductSummary key={index} url={item.url} />
    ))}
  </ProductListContainer>
  ) : (
    <SearchResult />
  )
  
}

export default ProductList