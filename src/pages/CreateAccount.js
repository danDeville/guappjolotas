// Base
import React, { useState } from "react"

// Components
import Login from "./Login"

// Material UI
import { Alert } from "@mui/material"

// Styles
import {
  LoginContainer,
  StyleButtonForm,
  StyleContainerRedirect,
  StyleInput,
  StyleLabel,
  StyleLink,
  StyleTitle
} from "../styles/LoginStyles"

const CreateAccount = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || password === "") {
      setFlag(true)
    } else {
      setFlag(false)
      localStorage.setItem("email", JSON.stringify(email))
      localStorage.setItem("password", JSON.stringify(password))
      console.log("Guardado en localStorage")

      setLogin(!login)
    }
  }

  const handleClick = () => {
    setLogin(!login)
  }

  return (
    <>
      {login ? (
        <LoginContainer>
          <StyleTitle>
            Regístrate
          </StyleTitle>

          <form onSubmit={handleSubmit}>
            <div>
              <StyleLabel>Nombre</StyleLabel>
              <StyleInput
                type="text"
                placeholder="Ingrese su nombre"
                onChange={(e) => setName(e.target.value)}
              />

              <StyleLabel>Email</StyleLabel>
              <StyleInput
                type="email"
                placeholder="Ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <StyleLabel>Contraseña</StyleLabel>
              <StyleInput
                type="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <StyleButtonForm type="submit">
              Crear Cuenta
            </StyleButtonForm>

            {flag && (
              <Alert severity="error">
                Complete los campos del formulario
              </Alert>
            )}
          </form>

          <StyleContainerRedirect>
            <p>¿Ya tienes una cuenta?</p>
            <StyleLink onClick={handleClick}>Iniciar Sesión</StyleLink>
          </StyleContainerRedirect>
        </LoginContainer>
      ) : (
        <Login />
      )}
    </>
  )
}

export default CreateAccount
