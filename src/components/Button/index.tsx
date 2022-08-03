import React from 'react'
import { ButtonDefault } from './styles';

interface ButtonProps {
  label: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  id?: string
}

const Button = ({label, onClick, id}: ButtonProps) => {
  return (
    <ButtonDefault onClick={onClick} id={id}>{label}</ButtonDefault>
  )
}

export default Button