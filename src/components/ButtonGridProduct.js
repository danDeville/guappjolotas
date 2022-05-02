// Base
import React from 'react'

// Material UI
import { Grid } from '@mui/material'

//Styles
import {
  ButtonProductContainer,
  ButtonProductImg,
  ContainerTitle
} from '../styles/ButtonProduct'

const ButtonProduct = (props) => {
  return (
    <ButtonProductContainer>
      <ButtonProductImg src={props.img} alt={props.name} />
    </ButtonProductContainer>
  )
}

const ButtonGridProduct = () => {
  return (
    <>
      <ContainerTitle>
        Sabor
      </ContainerTitle>

      <Grid container spacing={2}  alignItems="center">
        <Grid item xs={4} alignItems="center" justifyContent="center">
          <ButtonProduct
            img="https://res.cloudinary.com/dz8on44po/image/upload/v1650548585/guappjolotas/brand/Verde_jyv1x6.png"
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonProduct
            img="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/Mole_m9k5et.png"
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonProduct
            img="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/Gayaba_eewfnd.png"
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonProduct
            img="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/Pi%C3%B1a_cavrgt.png"
          />
        </Grid>
        <Grid item xs={4}>
          <ButtonProduct
            img="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/Pasas_lgutl5.png"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default ButtonGridProduct
