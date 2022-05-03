// Base
import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import querystring from "query-string"

// Hooks
import useForm from "../hooks/useForm"

// Utils
import GetByName from "../selectors/getByName"

//Components
import CardProduct from "../components/CardProduct"

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search"

// Styles
import { styled, alpha } from "@mui/material/styles"

const SearchStyle = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "9999px",
  backgroundColor: "#E7E7E7",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "auto",
  height: "auto",
  padding: "8px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  top: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
}))

const StyledInputBase = styled("input")(({ theme }) => ({
  color: "#9A9A9D",
  fontSize: "18px",
  padding: theme.spacing(1, 1, 1, 0),
  backgroundColor: "#E7E7E7",
  border: "none",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    "&:focus": {
      width: "100%"
    }
  }
}))

const Search = () => {
  const navegate = useNavigate()
  const location = useLocation()

  const { q = "" } = querystring.parse(location.search)

  const [values, handleInputChange, reset] = useForm({
    searchP: q,
  })

  const { searchP } = values

  const productoFiltrado = GetByName(searchP)
  console.log(productoFiltrado)

  const handleSubmit = (e) => {
    e.preventDefault()
    navegate(`?q = ${searchP}`)
    console.log(searchP)

    reset()
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <SearchStyle>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              placeholder="Sabor de guajolota, bebida..."
              name="searchP"
              onChange={handleInputChange}
            />
          </SearchStyle>
        </form>

        <Link
          to="/home"
          style={{
            textDecoration: "none",
            marginLeft: "20px",
            color: "#000",
            fontWeight: "600",
          }}
        >
          Cancelar
        </Link>
      </div>

      <div>
        {searchP && productoFiltrado.length !== 0 ? (
          searchP && productoFiltrado.length === 0 ? (
            <h1>No hay resultados</h1>
          ) : (
            <div>
              {productoFiltrado.map((producto) => (
                <CardProduct key={producto.id} {...producto} />
              ))}
            </div>
          )
        ) : (
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 200px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ fontSize: 122, color: "#C7C7C7" }} />
            <h3
              style={{
                marginTop: "24px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Realiza una búsqueda
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
