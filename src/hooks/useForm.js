// Base
import React, { useState } from 'react'

const useForm = (inicialState) => {
  const [values, setValues] = useState(inicialState)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const reset = () => {
    setValues(inicialState)
  }

  return [
    values,
    handleInputChange,
    reset
  ]
}

export default useForm
