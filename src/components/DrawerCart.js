import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import OrderItem from './OrderItem'

// Material UI
import Drawer from '@mui/material/Drawer'

// Material UI Icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

// Styles
import {
  ContainerDrawerStyles,
  StyleButtonPay,
  StyleContainerButton,
  StyleContainerTotal,
  StyleHeaderCart,
  StyleTitleCart,
  StyleTotal,
  StyleTotalValue
} from '../styles/DrawerCartStyles'


const DrawerCart = (props) => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}

  return (
    <Drawer
      anchor="right"
      visible="temporary"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <ContainerDrawerStyles>
        <StyleHeaderCart>
          <ArrowBackIosNewIcon onClick={props.onClose} />
          <StyleTitleCart>Carrito</StyleTitleCart>
          <span></span>
        </StyleHeaderCart>

        {state.cart.map(product => (
            <OrderItem key={`orderItem-${product.id}`} product={product} />
          ))
        }
          <StyleContainerTotal>
            <StyleTotal>Total</StyleTotal>
            <StyleTotalValue>${sumTotal()} MXN</StyleTotalValue>
          </StyleContainerTotal>

          <StyleContainerButton>
            <StyleButtonPay variant="contained" disableElevation>
              Pagar
            </StyleButtonPay>
          </StyleContainerButton>
      </ContainerDrawerStyles>
    </Drawer>
  )
}

export default DrawerCart
