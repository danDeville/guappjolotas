import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img
        src={product.imagen}
        alt={product.nombre}
      />

			<div className="product-info">
				<div>
					<p>$ {product.precio}</p>
					<p>{product.nombre}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<p>boton</p>
				</figure>
			</div>
		</div>
	)
}

export default ProductItem