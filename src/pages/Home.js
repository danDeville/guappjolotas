//Base
import React from 'react'

// Components
import SearchComponent from '../components/Search'
import ProductTabs from '../containers/ProductTabs'

// Styles
import { StyledHeroTitle} from '../styles/HomeStyle'

const Home = () => {
  return (
    <div>
      <StyledHeroTitle>
        Nada como una Guajolota para empezar el día
      </StyledHeroTitle>

      <SearchComponent />

      <ProductTabs />
    </div>
  )
}

export default Home
