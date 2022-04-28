import React from 'react'
import GetByCategory from '../selectors/getByCategory'
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
