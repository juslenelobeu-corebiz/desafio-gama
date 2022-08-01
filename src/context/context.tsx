import React, { createContext, useContext, useEffect, useState } from 'react'
import { getPokemonList } from '../utils/requestAPI'

const DEFAULT_VALUE = {
  state: {
    dataPokemon: {
      count: 0,
      next: "",
      previous: null,
      results: []
    },
    cart: [],
    search: {
      name: '',
      url: '',
    },
    error: '',	
  },
  setState: () => { },
}

type DefaultValuesProps = {
  state: {
    dataPokemon: dataPokemonTypes
    cart: Array<PokemonItemTypes>,
    search: retultPokemonTypes,
    error: string,
  },
  setState: (state: any) => void,
}

export type PokemonItemTypes = {
  id: number,
  name: string,
  image: string,
  price: number,
  stock?: number,
}

type dataPokemonTypes = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<retultPokemonTypes>
}

type retultPokemonTypes = {
  name: string,
  url: string,
}

export type ChildrenTypes = {
  children: React.ReactNode,
}

const PokemonListContext = createContext<DefaultValuesProps>(DEFAULT_VALUE)

const PokemonListProvider = ({ children }: ChildrenTypes) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  useEffect(() => {
    getPokemonList(`https://pokeapi.co/api/v2/pokemon?limit=11`)
      .then(res => {
        setState({
          ...state,
          dataPokemon: res,
        })
      })
    }, [])

  return (
    <PokemonListContext.Provider value={{ state, setState }}>
      {children}
    </PokemonListContext.Provider>
  )
}

const usePokemonList = () => useContext(PokemonListContext)

export { PokemonListProvider, usePokemonList }