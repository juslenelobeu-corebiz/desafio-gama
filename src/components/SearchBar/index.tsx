import React, { useState } from 'react'
import Button from '../Button'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  
  const handleClick = () => {
    console.log(search);
  }
  return (
    <div>
      <input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <Button label="Search" onClick={handleClick} />
    </div>
  )
}

export default SearchBar