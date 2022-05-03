import { Checkbox } from '@mui/material'
import React from 'react'
import { useShopping } from '../context/ShoppingContext'
import { StyleCardPrice, StyleCardPromo, StyleCardTitle, StyleCheckbox, StyleImg, StyleInfoCard } from '../styles/CardProductPromo'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CardProductPromo = (props) => {
  const { shoppingCart, setShoppingCart, count, setCount } = useShopping()

  const addCart = ({ ...productos }) => {
    setCount(1)
    setShoppingCart([
      ...shoppingCart,
      {
        cantidad: count,
        id: productos.id,
        nombre: productos.nombre,
        precio: productos.precio,
        imagen: productos.imagen,
      },
    ])
  }

  return (
    <StyleCardPromo>
      <StyleImg src={props.imagen}/>

      <StyleInfoCard>
        <StyleCardTitle>
          {props.nombre}
        </StyleCardTitle>
        <StyleCardPrice>
          + ${props.precio} MXN
        </StyleCardPrice>
      </StyleInfoCard>

      <StyleCheckbox >
        <Checkbox {...label}
          onClick={() =>
          addCart({
            cantidad: (1),
            id: props.id,
            nombre: props.nombre,
            imagen: props.imagen,
            precio: props.precio,
          })
        }
        />
      </StyleCheckbox>
    </StyleCardPromo>
  )
}

export default CardProductPromo
