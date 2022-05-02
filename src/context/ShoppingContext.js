// Base
import { createContext, useContext, useState } from "react"

// Context
const Context = createContext()

export const useShopping = () => useContext(Context)

const ShoppingProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [count, setCount] = useState(0)

  return (
    <Context.Provider value={{ shoppingCart, setShoppingCart, count, setCount }}>
      {children}
    </Context.Provider>
  )
}

export default ShoppingProvider