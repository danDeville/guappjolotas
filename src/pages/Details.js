// Base
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// Context
import { useShopping } from "../context/ShoppingContext"

//Components
import ButtonGridProduct from '../components/ButtonGridProduct'
import DrawerCart from '../components/DrawerCart'
import BebidasGridComplementary from '../components/BebidasGridComplementary'
import GuajolotasGridComplementary from '../components/GuajolotasGridComplementary'


// Material UI
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

// Material UI Icons
import { IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

// Styles
import { StyleDetailHeader, StyleDetailsContainer } from '../styles/DetailStyle'
import {
  StyleButton,
  StyleButtonShopping,
  StyleCardDetail,
  StyleContainerButton,
  StyleContainerButtonShopping,
  StyleContainerInfo,
  StyleCounter,
  StyleImageCard,
  StyleInfoCard,
  StylePriceCard,
  StyleTitleCard
} from '../styles/CardDetailsProductStyle'

const url = 'https://backend-guappjolotas.herokuapp.com/productos/'

const Details = () => {
  const navigate = useNavigate()
  const { shoppingCart, setShoppingCart, count, setCount } = useShopping()
  const [disabled, setDisabled] = useState(false)
  const [productos, setProductos] = useState([])
  const getProductos = async () => {
    const reponse = await axios.get(url)
    setProductos(reponse.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  const { id } = useParams()
  const idNumber = Number(id)

  console.log(id)

  if (!productos) return null
  const getId = productos.find(producto => producto.id === idNumber)

  const handelReturn = () => {
    navigate(-1)
  }

  const countAdd = () => {
    setCount(count + 1)
    setDisabled(false)
  }

  const countRemove = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setDisabled(true)
    }
  }

  const addCart = ({ ...productos }) => {
    setCount(0)
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
    <StyleDetailsContainer>
      <StyleDetailHeader>
        <IconButton aria-label="Arrow Back" onClick={handelReturn}>
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>

        <DrawerCart />
      </StyleDetailHeader>
      {
        getId
          ? (
            <StyleCardDetail>
              <StyleImageCard
                src={getId.imagen}
                alt={getId.nombre}
              />

              <StyleInfoCard>
                <StyleContainerInfo>
                  <StyleTitleCard>
                    {getId.categoria === 'guajolotas'
                      ? `Guajolota de ${getId.nombre}`
                      : getId.nombre
                    }
                  </StyleTitleCard>
                  <StylePriceCard>
                    $ {getId.precio} MXN
                  </StylePriceCard>
                </StyleContainerInfo>

                <StyleContainerButton>
                  <StyleButton
                    variant="text"
                    color="secondary"
                    onClick={countRemove}
                  >
                    -
                  </StyleButton>

                  <StyleCounter>
                    {count}
                  </StyleCounter>

                  <StyleButton
                    variant="text"
                    color="secondary"
                    onClick={countAdd}
                  >
                    +
                  </StyleButton>
                </StyleContainerButton>

                <StyleContainerButtonShopping>
                  <StyleButtonShopping
                    disabled={disabled}
                    onClick={() =>
                      addCart({
                        id: getId.id,
                        nombre: getId.nombre,
                        imagen: getId.imagen,
                        precio: getId.precio,
                      })
                    }
                  >
                    <span>Agregar {count} al carrito</span>
                    <span>$ {count * Number(getId.precio)} MXN</span>
                  </StyleButtonShopping>
                </StyleContainerButtonShopping>
              </StyleInfoCard>

              <div

                style={{
                  marginTop: '2rem',
                }}
              >
                <ButtonGridProduct />
                {
                  getId.categoria === 'guajolotas' || getId.categoria === 'tamales'
                  ? (
                    <div>
                      <BebidasGridComplementary />
                    </div>
                  ) : (
                    <div>
                        <GuajolotasGridComplementary />
                    </div>
                  )
                }
              </div>
            </StyleCardDetail>
          )
          : (
            <Box
              style={{
                zIndex: 2,
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#fff',
              }}
            >
              <CircularProgress />
            </Box>
          )
      }
    </StyleDetailsContainer>
  )
}

export default Details
