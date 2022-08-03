import React, { useEffect } from 'react'
import { usePokemonList } from '../../context/context';
import { getPokemonList } from '../../utils/requestAPI';
import { ProductListContainer } from '../ProductList/styles';
import ProductSummary from '../ProductSummary';

const SearchResult = () => {
  const { 
    state,
  } = usePokemonList();

  useEffect(() => {
    getPokemonList(state.search.url).then((res) => {
    })
  }, [])

  return (
    <ProductListContainer>
      <ProductSummary url={state.search.url} />
    </ProductListContainer>
  )
}

export default SearchResult