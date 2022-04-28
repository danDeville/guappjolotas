// Base
import React from 'react'

// Material UI
import InputBase from '@mui/material/InputBase'

// Material UI
import SearchIcon from '@mui/icons-material/Search'

import { styled, alpha } from '@mui/material/styles'

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#9A9A9D',
  fontSize: '18px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      }
    }
  }
}))

const SearchComponent = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Sabor de guajolota, bebida..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchComponent