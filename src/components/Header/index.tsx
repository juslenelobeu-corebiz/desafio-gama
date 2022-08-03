import React from 'react'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import { ButtonIconMinicart, HeaderContainer } from './styles'
import iconMinicart from '../../assets/images/icon-minicart.svg'
import { usePokemonList } from '../../context/context'

const Header = () => {
  const { state, setState } = usePokemonList()

  const handleClick = () => {
    console.log('clicked')
    setState({
      ...state,
      openMinicart: !state.openMinicart,
    })
  }

  return (
    <>
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <ButtonIconMinicart onClick={handleClick}>
        <span>{state.cart.length}</span>
        <img src={iconMinicart} alt="Ícone do minicart" width={38} />
      </ButtonIconMinicart>
    </HeaderContainer>

    </>
  )
}

export default Header