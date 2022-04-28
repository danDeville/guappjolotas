import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetById from '../selectors/getById'

const url = 'https://backend-guappjolotas.herokuapp.com/productos/'

const Details = () => {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const reponse = await axios.get(url)
    setProductos(reponse.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  const {id} = useParams()
  const idNumber = Number(id)

  console.log(id)

  // const product = GetById(id)

  const getId = productos.find(producto => producto.id === idNumber)
  console.log(getId)

  // const {nombre, imagen, precio} = getId

  return (
    <div>
      {
        getId
        ? (
          <div>
            <div>
              <img src={getId.imagen} alt={getId.nombre}/>
            </div>

            <ul>
              <li>{getId.nombre}</li>
              <li>{getId.precio}</li>
            </ul>
          </div>
          )
        : (
          <p>Cargando.....</p>
        )
      }

    </div>
  )
}

export default Details
