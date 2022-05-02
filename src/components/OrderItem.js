// Base
import React from 'react'

// Styles
import {
	StyleDeleteItem,
	StyleOrderItemContainer,
	StyleOrderItemImg,
	StyleOrderItemInfo,
	StyleOrderItemLeft,
	StyleOrderItemName,
	StyleOrderItemPrice,
	StyleOrderItemUnd
} from '../styles/OrdenItemStyle'


const OrderItem = ({ product, children }) => {
	return (
		<StyleOrderItemContainer>
			<StyleDeleteItem>
				{children}
			</StyleDeleteItem>

			<StyleOrderItemLeft>
				<StyleOrderItemImg
					src={product.imagen}
					alt={product.nombre}
				/>

				<StyleOrderItemInfo>
					<StyleOrderItemName>
						{product.nombre}
					</StyleOrderItemName>

					<StyleOrderItemUnd>
						X{product.cantidad}
					</StyleOrderItemUnd>
				</StyleOrderItemInfo>
			</StyleOrderItemLeft>
			<StyleOrderItemPrice>
				{
					`$ ${Number(product.precio) * Number(product.cantidad)} MXN`
				}
			</StyleOrderItemPrice>
		</StyleOrderItemContainer>
	)
}

export default OrderItem
