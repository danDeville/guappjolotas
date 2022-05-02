// Base
import styled from 'styled-components'

// Global Styles
import { primaryColor, backgroundColor } from './GlobalStyles'

export const StyleCardDetail = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px
`

export const StyleImageCard = styled.img`
  width: 200px;
  height: 200px;
  objetive-fit: cover
`

export const StyleInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 24px
`

export const StyleContainerInfo = styled.div`
  width: inherit;
  height: auto;
  margin-bottom: 32px;
  text-align: center
`

export const StyleTitleCard = styled.p`
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 600;
  color: #000
`

export const StylePriceCard = styled.p`
  font-size: 22px;
  font-weight: 600;
  color:${primaryColor}
`

export const StyleContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 72px;
  padding: 16px;
  border-radius: 20px;
  background-color: #fff
`

export const StyleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #000;
  font-size: 24px;
  font-weight: 600;
  background-color: transparent
`

export const StyleCounter = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #000
`

export const StyleContainerButtonShopping = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 24px;
  background-color: ${backgroundColor};

  @media (min-width: 600px) {
    width: 600px;
    left: calc(50% - 300px);
  }
`

export const StyleButtonShopping = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 16px;
  border: none;
  border-radius: 9999px!important;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 18px
`