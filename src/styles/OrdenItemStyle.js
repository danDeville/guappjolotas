// Base
import styled from 'styled-components'

import { primaryColor } from '../styles/GlobalStyles'

export const StyleOrderItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: transparent;
  margin-bottom: 16px;
`

export const StyleDeleteItem = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
`

export const StyleOrderItemLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyleOrderItemImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 16px;
`

export const StyleOrderItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyleOrderItemName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`

export const StyleOrderItemUnd = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${primaryColor}
`

export const StyleOrderItemPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${primaryColor}
`