//Base
import React, { useState } from 'react'

// Components
import SearchComponent from '../components/Search'
import ProductTabs from '../containers/ProductTabs'
import Header from '../components/Header'
import DrawerCart from "../components/DrawerCart"


// Styles
import { StyledHeroTitle } from '../styles/HomeStyle'

const Home = () => {
  const [abrir, setAbrir] = useState(false)
  const abrirDrawer = () => {
    setAbrir(!abrir)
  }


  return (
    <div>
      <Header abrirDrawer={abrirDrawer} />
      <DrawerCart
        open={abrir}
        onClose={abrirDrawer}
      />
      <StyledHeroTitle>
        Nada como una Guajolota para empezar el día
      </StyledHeroTitle>

      <SearchComponent />

      <ProductTabs />
    </div>
  )
}

export default Home
