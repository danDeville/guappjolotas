// Base
import { Grid } from '@mui/material'
import React from 'react'

// Utils
import GetByCategory from '../selectors/getByCategory'

// Components
import CardProductPromo from './CardProductPromo'


const ListComplementary = ({ titleList, description, category }) => {

  const products = GetByCategory(category)

  return (
    <div style={{ marginTop: '40px', paddingBottom: '140px' }}>
      <h3
        style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '8px',
        }}
      >
        { titleList }
      </h3>
      <p
        style={{
          marginBottom: '24px',
          fontSize: '16px',
          fontWeight: '400',
          color: '#0D0D0D',
        }}
      >
        { description }
      </p>

      <Grid container spacing={3}>
          {
            products.map(product => {
              return (
                <Grid item xs={6}>
                  <CardProductPromo
                    key={product.id}
                    {...product}
                  />
                </Grid>
              )
            })
          }
      </Grid>
    </div>
  )
}

export default ListComplementary
