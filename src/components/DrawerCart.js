import React, { useState } from "react"
import OrderItem from "./OrderItem"
import { useShopping } from "../context/ShoppingContext"

// Material UI
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import Badge from "@mui/material/Badge"

// Material UI Icon
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import CloseIcon from "@mui/icons-material/Close"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

// Styles
import { styled } from "@mui/material/styles"

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  }
}))

const DrawerCart = (props) => {
  const [showDrawer, setShowDrawer] = useState(false)
  const { shoppingCart, setShoppingCart } = useShopping()

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.precio * currentValue.cantidad
    const sum = shoppingCart.reduce(reducer, 0)
    return sum
  }

  const deleteProductCart = (id) => {
    const deleteFromState = shoppingCart.filter((producto) => producto.id !== id)
    setShoppingCart(deleteFromState)
  }

  const handleCloseDrawer = () => setShowDrawer(false)
  const handleOpenDrawer = () => setShowDrawer(true)

  return (
    <>
      <IconButton size="large" onClick={handleOpenDrawer}>
        <ShoppingCartOutlinedIcon />
        {shoppingCart.length > 0 ? (
          <StyledBadge badgeContent={shoppingCart.length} color="primary" />
        ) : null}
      </IconButton>

      <Drawer
        anchor="right"
        visible="temporary"
        open={showDrawer}
        onClose={handleCloseDrawer}
      >
        <ContainerDrawerStyles>
          <StyleHeaderCart>
            <ArrowBackIosNewIcon onClick={handleCloseDrawer} />
            <StyleTitleCart>Carrito</StyleTitleCart>
            <span></span>
          </StyleHeaderCart>
          {!shoppingCart.length ? (
            <div
              style={{
                width: "100%",
                height: "calc(100vh - 200px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: 122, color: "#C7C7C7" }}
              />
              <h3
                style={{
                  marginTop: "24px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                No hay productos
              </h3>
            </div>
          ) : shoppingCart.length === 0 ? null : !shoppingCart ? null : (
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
    </>
  )
}

export default DrawerCart
