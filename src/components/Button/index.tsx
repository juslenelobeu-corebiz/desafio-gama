import React from 'react'

interface ButtonProps {
  label: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const Button = ({label, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button