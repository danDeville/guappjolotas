// Base
import styled from "styled-components"

// Global Styles
import { primaryColor } from "./GlobalStyles"

// Material UI
import Card from '@mui/material/Card'

export const StyledCard = styled(Card)`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  padding: 16px;
  border-radius: 20px!important;
  margin-bottom: 8px;
`

export const StyleContainerInfo = styled.div`
  margin-left: 16px;
  display: flex;
  flex-flow: column;
`

export const StyleTitleName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px
`

export const StylePrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${primaryColor};
  margin: 0;
`
