import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CardProduct from '../components/CardProduct'
import ListsProduct from '../components/ListsProduct'
import Details from '../pages/Details'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Layout from '../containers/Layout'
import AppContext from "../context/AppContext"
import useInitialState from "../hooks/useInitialState"
import Search from '../pages/Search'

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
  const initialState = useInitialState()
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={ initialState }>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/details/:id" element={<Details />}/>
              <Route exact path="/lista" element={<ListsProduct />}/>
              <Route exact path="/producto" element={<CardProduct />}/>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/search" element={<Search />}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default AppRouter
