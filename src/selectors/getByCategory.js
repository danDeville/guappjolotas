import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://backend-guappjolotas.herokuapp.com/productos/'

const GetByCategory = (category) => {
  const [productos, setProductos] = useState([])


  const getProductos = async () => {
    const reponse = await axios.get(url)
    setProductos(reponse.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  const validarCategory = ['guajolotas', 'bebida', 'tamales']

  if (!validarCategory.includes(category)) {
    throw new Error('La categoria no existe')
  }

  return productos.filter(producto => producto.categoria === category)
}

export default GetByCategory
