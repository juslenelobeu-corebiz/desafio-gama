import React, { createContext, useContext, useState } from 'react'

const DEFAULT_VALUE = {
  state: {
    pokemonList: [
      {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        price: 100,
        stock: 10,
      }
    ],
  },
  setState: () => {},
}

type PokemonListTypes = {
  state: {
    pokemonList: Array<PokemonItemTypes>,
  },
  setState: (state: any) => void,
}

type PokemonItemTypes = {
  id: number,
  name: string,
  image: string,
  price: number,
  stock: number,
}

export type ChildrenTypes = {
  children: React.ReactNode,
}

const PokemonListContext = createContext<PokemonListTypes>(DEFAULT_VALUE)

const PokemonListProvider = ({ children }: ChildrenTypes) => {
  const [ state, setState ] = useState(DEFAULT_VALUE.state)

  return (
    <PokemonListContext.Provider value={{ state, setState }}>
      {children}
    </PokemonListContext.Provider>
  )
}

const usePokemonList = () => useContext(PokemonListContext)

export { PokemonListProvider, usePokemonList }