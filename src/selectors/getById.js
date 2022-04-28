import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://backend-guappjolotas.herokuapp.com/productos/'

const GetById = (id) => {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const reponse = await axios.get(url)
    setProductos(reponse.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  productos.find(producto => producto.id === id)

  return productos
}

export default GetById
