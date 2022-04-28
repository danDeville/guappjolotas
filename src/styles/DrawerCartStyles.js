// Styles
import styled from 'styled-components'

// Material UI
import Button from '@mui/material/Button'

// Global Styles
import { backgroundColor, primaryColor } from '../styles/GlobalStyles'

export const ContainerDrawerStyles = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background-color: ${backgroundColor}
`

export const StyleHeaderCart = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 46px
`

export const StyleTitleCart = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  line-height: 1.5
`

export const StyleContainerTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  border-radius: 20px
`

export const StyleTotal = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000
`

export const StyleTotalValue = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${primaryColor}
`

export const StyleContainerButton = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: calc(100% - 48px)
`

export const StyleButtonPay = styled(Button)`
  width: 100%;
  border-radius: 9999px!important
`