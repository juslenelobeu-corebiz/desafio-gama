import React from 'react'

interface ButtonProps {
  label: string
}

const AddToCart = ({label}: ButtonProps) => {
  return (
    <button>{label}</button>
  )
}

export default AddToCart