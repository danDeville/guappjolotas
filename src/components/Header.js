// Base
import React from "react"

// Material UI
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

// Styles
import { StyledList, StyledNavbar } from '../styles/NavbarStyle'
import { styled } from '@mui/material/styles'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Header = (props) => {
  return (
    <StyledNavbar>
      <img
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/logo_okdx2k.png"
        alt="Logo Guappjolotas"
        height="65"
      />

      <StyledList>
        <li
          className="navbar-shopping-cart"
          onClick={() => props.abrirDrawer()}
        >
          <ShoppingCartOutlinedIcon color="action" />
          {/* {state.cart.length > 0
            ? <StyledBadge badgeContent={state.cart.length} color="primary" />
            : null
          } */}
        </li>
      </StyledList>
    </StyledNavbar>
  )
}
export default Header