// Base
import React from 'react'

// Material UI
import InputBase from '@mui/material/InputBase'

// Material UI
import SearchIcon from '@mui/icons-material/Search'

import { styled, alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '9999px',
  backgroundColor: '#E7E7E7',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: 'auto',
  height: 'auto',
  padding: '8px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  top: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}))

const StyledInputBase = styled('p')(({ theme }) => ({
  color: '#9A9A9D',
  fontSize: '18px',
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  }
}))

const SearchComponent = () => {
  return (
    <Link to="/search" style={{ textDecoration: 'none', color: '#000' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase>
        Sabor de guajolota, bebida...
        </StyledInputBase>
      </Search>
    </Link>
  )
}

export default SearchComponent