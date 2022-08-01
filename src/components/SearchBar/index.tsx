import React, { useState } from 'react'
import { usePokemonList } from '../../context/context';
import Button from '../Button'
import { Header, Input, InputGroup } from './styles';

const SearchBar = () => {
  const { 
    state,
    setState
  } = usePokemonList();

  const [ search, setSearch ] = useState('')
  
  const searchPokemon = () => {
    console.log(search);
    if(search === '') {
      setState({
        ...state,
        search: {
          name: '',
          url: '',
        },
        error: 'Insira um nome para buscar',
      })
      setTimeout(() => {
        setState({
          ...state,
          error: '',
        })
      }, 3000);
    } else {
      const result = state.dataPokemon.results.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))
      console.log('RESULT',result);
      
      if(result.length === 0) {
        setState({
          ...state,
          error: 'Pokemon não encontrado, verifique o nome digitado'
        })
        setTimeout(() => {
          setState({
            ...state,
            error: ''
          })
        }, 3000);
      } else if(result.length !== 0 || result[0].name.toLowerCase().includes(search.toLowerCase()) !== false) {
        console.log('RESULT',result);
        console.log('SEARCH',search);
        
        setState({
          ...state,
          search: {
            name: result[0].name,
            url: result[0].url,
          }
        })
      }
    }
  }
  return (
    <Header>
      <InputGroup>
        <Input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <Button label="Search" onClick={searchPokemon} />
      </InputGroup>
      <span>{state.error}</span>
    </Header>
  )
}

export default SearchBar