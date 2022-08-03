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
    pokemonList: [
      {
        id: 0,
        name: '',
        image: '',
        price: 0,
        stock: 0,
      }
    ],
    cart: [],
    search: {
      name: '',
      url: '',
    },
    error: '',	
    openMinicart: false,
    openOrderForm: false,
  },
  setState: () => { },
}

type DefaultValuesProps = {
  state: {
    dataPokemon: dataPokemonTypes,
    pokemonList: Array<PokemonItemTypes>,
    cart: Array<PokemonItemTypes>,
    search: retultPokemonTypes,
    error: string,
    openMinicart: boolean,
    openOrderForm: boolean,
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
    getPokemonList(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then(res => {
        setState({
          ...state,
          dataPokemon: res,
        })
      })
    state.dataPokemon.results.map((item: any, index: number) => {
      getPokemonList(item.url)
        .then((pokemon:any) => {
          const data = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            price: pokemon.base_experience,
            stock: 10,
          }
          // console.log('DATA',data);
          
          setState({
            ...state,
            pokemonList: [...state.pokemonList, data],
          })
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