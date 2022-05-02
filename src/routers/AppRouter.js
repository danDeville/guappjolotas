// Base
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Materia UI
import { createTheme, ThemeProvider } from '@mui/material/styles'

// Context
import ShoppingProvider from '../context/ShoppingContext'

// Components
import CardProduct from '../components/CardProduct'
import ListsProduct from '../components/ListsProduct'
import Layout from '../containers/Layout'

// Pages
import Details from '../pages/Details'
import Home from '../pages/Home'
import Search from '../pages/Search'
import CreateAccount from '../pages/CreateAccount'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FA4A0C'
    },
    secondary: {
      main: '#0D0D0D',
    }
  }
})

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShoppingProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/details/:id" element={<Details />} />
              <Route exact path="/lista" element={<ListsProduct />} />
              <Route exact path="/producto" element={<CardProduct />} />
              <Route exact path="/" element={<CreateAccount />} />
              <Route exact path="/search" element={<Search />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ShoppingProvider>
    </ThemeProvider>
  )
}

export default AppRouter
