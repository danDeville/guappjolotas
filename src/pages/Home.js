//Base
import React from 'react'

// Components
import SearchComponent from '../components/Search'
import ProductTabs from '../containers/ProductTabs'
import Header from '../components/Header'

// Styles
import { StyledHeroTitle } from '../styles/HomeStyle'

const Home = () => {
  return (
    <div>
      <Header />
      <StyledHeroTitle>
        Nada como una Guajolota para empezar el día
      </StyledHeroTitle>

      <SearchComponent />

      <ProductTabs />
    </div>
  )
}

export default Home
