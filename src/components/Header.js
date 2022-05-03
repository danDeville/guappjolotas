// Base
import React from "react"

// Styles
import { StyledNavbar } from '../styles/NavbarStyle'
import DrawerCart from "./DrawerCart"


const Header = (props) => {
  return (
    <StyledNavbar>
      <img
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/logo_okdx2k.png"
        alt="Logo Guappjolotas"
        height="65"
      />

      <DrawerCart />
    </StyledNavbar>
  )
}
export default Header