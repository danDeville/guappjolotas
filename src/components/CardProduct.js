// Base
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import {
  StyleContainerInfo,
  StyledCard,
  StyleTitleName,
  StylePrice
} from '../styles/CardProduct'

const CardProduct = ({id, nombre, imagen, precio}) => {
  return (
    <Link
      to={`/details/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <StyledCard>
        <img
          src={imagen}
          alt={nombre}
          width="80"
          height="80"
        />

        <StyleContainerInfo>
          <StyleTitleName>
            {nombre}
          </StyleTitleName>

          <StylePrice>
            ${precio} MXN
          </StylePrice>
        </StyleContainerInfo>
      </StyledCard>
    </Link>
  )
}

export default CardProduct
