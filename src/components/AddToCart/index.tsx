import React from 'react'
import { PokemonItemTypes, usePokemonList } from '../../context/context'
import Button from '../Button'

interface ButtonProps {
  label: string
  pokemon: PokemonItemTypes
}

const AddToCart = ({label, pokemon}: ButtonProps) => {
  const { 
    state,
    setState,
  } = usePokemonList();

  const addToCart = () => {
    setState({
      ...state,
      cart: [...state.cart, pokemon],
    })
  }
  return (
    <Button label={label} onClick={addToCart} />
  )
}

export default AddToCart