import React from 'react'
import Button from '../Button'

interface ButtonProps {
  label: string
  value: number
}

const AddToCart = ({label, value}: ButtonProps) => {
  const handleClick = () => {
    console.log('CLICK', value);
    
  }
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default AddToCart