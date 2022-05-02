import React from "react"
import OrderItem from "./OrderItem"
import { useShopping } from "../context/ShoppingContext"

// Material UI
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"

// Material UI Icon
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import CloseIcon from '@mui/icons-material/Close'

// Styles
import {
  ContainerDrawerStyles,
  StyleButtonPay,
  StyleContainerButton,
  StyleContainerTotal,
  StyleHeaderCart,
  StyleTitleCart,
  StyleTotal,
  StyleTotalValue,
} from "../styles/DrawerCartStyles"

const DrawerCart = (props) => {
  const { shoppingCart, setShoppingCart } = useShopping()

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.precio * currentValue.cantidad
    const sum = shoppingCart.reduce(reducer, 0)
    return sum
  }

  const deleteProductCart = (id) => {
    const deleteFromState = shoppingCart.filter((p) => p.id !== id);
    setShoppingCart(deleteFromState);
  };

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
        {!shoppingCart.length ? null : shoppingCart.length === 0 ? (
          <h2>Hola</h2>
        ) : !shoppingCart ? null : (
          shoppingCart.map((producto) => (
            <OrderItem product={producto} key={producto.nombre}>
              <IconButton
                onClick={() => deleteProductCart(producto.id)}
                aria-label="delete"
                size="small"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </OrderItem>
          ))
        )}
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
