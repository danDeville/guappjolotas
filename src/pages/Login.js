// Base
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Material UI
import { Alert } from "@mui/material"

// Styles
import {
  LoginContainer,
  StyleButtonForm,
  StyleForm, StyleInput,
  StyleLabel,
  StyleTitle
} from "../styles/LoginStyles"

const Login = () => {
  const navigate = useNavigate()
  const [emailauth, setEmailauth] = useState("")
  const [passwordauth, setPasswordauth] = useState("")
  const [flag, setFlag] = useState(false)
  const [home, setHome] = useState(true)

  const handleLogin = (e) => {
    e.preventDefault()

    let mail = localStorage.getItem("email").replace(/"/g, "")
    let key = localStorage.getItem("password").replace(/"/g, "")

    if (!emailauth || !passwordauth) {
      setFlag(true)
      console.log("Faltan datos")
    } else if (passwordauth !== key || emailauth !== mail) {
      setFlag(true)
      console.log("Datos incorrectos")
    } else {
      setHome(!home)
      setFlag(false)
    }
  }

  return (
    <>
      {home ? (
        <LoginContainer>
          <StyleTitle>Iniciar Sesión</StyleTitle>

          <StyleForm onSubmit={handleLogin}>
            <StyleLabel>Email</StyleLabel>
            <StyleInput
              type="text"
              placeholder="Ingrese su email"
              onChange={(e) => setEmailauth(e.target.value)}
            />

            <StyleLabel>Password</StyleLabel>
            <StyleInput
              type="password"
              placeholder="*********"
              onChange={(e) => setPasswordauth(e.target.value)}
            />

            <StyleButtonForm type="submit">
              Iniciar Sesión
            </StyleButtonForm>

            {flag && (
              <Alert severity="error">
                Complete los campos del formulario
              </Alert>
            )}
          </StyleForm>
        </LoginContainer>
      ) : (
        navigate("/home")
      )}
    </>
  )
}

export default Login
