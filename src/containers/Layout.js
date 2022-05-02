// Base
import React from "react"

// Style
import { LayoutStyle } from "../styles/LayoutStyle"

const Layout = ({ children }) => {
	return (
		<LayoutStyle>
			{children}
		</LayoutStyle>
	)
}

export default Layout
