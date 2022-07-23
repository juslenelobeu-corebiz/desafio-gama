import React from 'react'
import Button from '../Button'

const SearchBar = () => {
  return (
    <div>
      <input type="search" placeholder="Search" />
      <Button label="Search" />
    </div>
  )
}

export default SearchBar