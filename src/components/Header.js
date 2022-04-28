import React,{ useState, useContext} from "react"
import AppContext from '../context/AppContext'

// import Menu from './Menu'
// import MyOrder from '../containers/MyOrder'

import { StyledList, StyledNavbar } from '../styles/NavbarStyle'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Header = (props) => {
  const [toggle, setToggle] = useState(false)
  // const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <StyledNavbar>
      <img
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1650548584/guappjolotas/brand/logo_okdx2k.png"
        alt="Logo Guappjolotas"
        height="65"
      />

      <StyledList>
        {/* <li className="navbar-email" onClick={handleToggle}>
          me@dandeville.com
        </li> */}

        <li
          className="navbar-shopping-cart"
          // onClick={() => setToggleOrders(!toggleOrders)}
          onClick={() => props.abrirDrawer()}
        >
          <ShoppingCartOutlinedIcon color="action"/>
          {state.cart.length > 0
            ? <StyledBadge badgeContent={state.cart.length} color="primary" />
            : null
          }
        </li>
      </StyledList>
      {/* {toggle && <Menu />}
      {toggleOrders && <MyOrder />} */}
    </StyledNavbar>
  )
}
export default Header