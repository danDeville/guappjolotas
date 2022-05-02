// Base
import React from 'react'

// Utils
import GetByCategory from '../selectors/getByCategory'

// Components
import CardProduct from './CardProduct'

const ListsProduct = ({ category }) => {
  const products = GetByCategory(category)
  console.table(products)

  return (
    <div>
      {
        products.map(product => {
          return (
            <CardProduct
              key={product.id}
              {...product}
            />
          )
        })
      }
    </div>
  )
}

export default ListsProduct
