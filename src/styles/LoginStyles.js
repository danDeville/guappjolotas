// Base
import styled from 'styled-components'

// Global Styles
import { primaryColor } from './GlobalStyles'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const StyleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: start;
  margin: 60px 0 40px 0;
`

export const StyleForm = styled.form`
  width: 100%;
  height: 100%;
`

export const StyleLabel = styled.label`
  display: block;
  margin-bottom: 12px;
`

export const StyleInput = styled.input`
  width: 100%;
  height: 47px;
  padding: 0 12px;
  border: thin solid ${primaryColor};
  background-color: transparent;
  border-radius: 999px;
  font-size: 1rem;
  margin-bottom: 24px;
  color: #000;
`

export const StyleButtonForm = styled.button`
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  margin-top: 16px;
  background-color: ${primaryColor};
  border: none;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`

export const StyleContainerRedirect = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 48px);
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 100%;
    left: calc(50% - 300px);
  }
`

export const StyleLink = styled.p`
  font-weight: 600;
  color: ${primaryColor};
  cursor: pointer;
`
