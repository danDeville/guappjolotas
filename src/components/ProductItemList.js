// Base
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Styles
import {
  StyleContainerInfo,
  StyledCard,
  StyleTitleName,
  StylePrice
} from '../styles/ProductItemListStyle'

const ProductItemList = ({ product }) => {
  return (
    <Link
      to={`/details/${product.id}`}
    >
      <StyledCard>
        <img
          src={product.imagen}
          alt={product.nombre}
          width="80"
          height="80"
        />

        <StyleContainerInfo>
          <StyleTitleName>
            {product.nombre}
          </StyleTitleName>

          <StylePrice>
            ${product.precio} MXN
          </StylePrice>
        </StyleContainerInfo>
      </StyledCard>
    </Link>
  )
}

export default ProductItemList
