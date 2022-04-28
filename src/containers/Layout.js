import React,{ useState } from "react"
import Header from '../components/Header'
import DrawerCart from "../components/DrawerCart"

const Layout = ({ children }) => {
	const [abrir, setAbrir] = useState(false)
  const  abrirDrawer = () => {
    setAbrir(!abrir)
  }

	return (
		<div className="Layout">
			<Header abrirDrawer={abrirDrawer}/>
			<DrawerCart
				open={abrir}
				onClose={abrirDrawer}
			/>

			{children}
		</div>
	)
}

export default Layout
