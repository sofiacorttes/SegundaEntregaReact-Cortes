import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav">
            <NavLink className="nav-link text-dark fs-2" to="/category/ofertas">Los mejores precios!</NavLink>
            <NavLink className="nav-link text-dark fs-2" to="/category/marcas">Las mejores Marcas!</NavLink>
            <NavLink className="nav-link text-dark fs-2" to="#">Encontranos</NavLink>
        </nav>
    )
}

export default Navbar; 