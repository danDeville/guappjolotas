import styled from 'styled-components'

import { primaryColor } from './GlobalStyles'

export const StyleCardPromo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`

export const StyleImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const StyleInfoCard = styled.div`
  width: 100%;
  height: auto
`

export const StyleCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600px;
  margin-bottom: 4px;
`

export const StyleCardPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${primaryColor}
`

export const StyleCheckbox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`