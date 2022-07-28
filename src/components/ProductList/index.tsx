import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductSummary from '../ProductSummary'
import { ProductListContainer } from './styles'

interface ListPokemonProps {
  name: string
  images: {
    front_default: string
    front_shiny: string
    back_default: string
    back_shiny: string
  }
  price: number
  id: number
}

const ProductList = () => {
  const [ listPokemon, setListPokemon ] = useState<Array<ListPokemonProps>>([])

  const getPokemon = async (id:number) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  const getAllPokemon = async () => {
    for (let i = 1; i <= 10; i++) {
      await getPokemon(i)
      .then(res => {
        
        const { id, name, sprites, weight } = res.data
        const { front_default, front_shiny, back_default, back_shiny } = sprites
        const data = { id, name, images: {
          front_default: front_default,
          front_shiny: front_shiny,
          back_default: back_default,
          back_shiny: back_shiny
        }, price: weight }
        setListPokemon(prevState => [...prevState, data])
      })
    }
  }

  const getPokemonList = async () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => {
      for(let i = 0; i <= res.data.results.length; i++) {
        console.log('QTD', res.data.results.length);
        console.log('QTD', res.data);
        axios.get(res.data.results[i].url)
        .then(res => {
          const { id, name, sprites, weight } = res.data
          const { front_default, front_shiny, back_default, back_shiny } = sprites
          const data = { id, name, images: {
            front_default: front_default,
            front_shiny: front_shiny,
            back_default: back_default,
            back_shiny: back_shiny
          }, price: weight }
          setListPokemon(prevState => [...prevState, data])
        })
      }
    })
  }
  
  useEffect(() => {
    getPokemonList()
  }, [])
  
  return (
    <ProductListContainer>
      {listPokemon.map((product: ListPokemonProps, index: number) => (
        <ProductSummary
          key={index}
          image={product.images.front_default}
          title={product.name}
          price={product.price}
          id={product.id}
        />
      ))}
    </ProductListContainer>
  )
}

export default ProductList