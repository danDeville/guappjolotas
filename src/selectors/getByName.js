// Base
import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://backend-guappjolotas.herokuapp.com/productos/'

const GetByName = (name = '') => {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const reponse = await axios.get(url)
    setProductos(reponse.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  name = name.toLowerCase()

  return productos.filter(producto => producto.nombre.toLowerCase().includes(name))
}

export default GetByName