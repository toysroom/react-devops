import { NavLink } from "react-router"
import Search from "./Search"

function Navbar() {
    return (
        <>
            <nav>
                <NavLink to="/">homepage</NavLink> |
                <NavLink to="/utenti">utenti</NavLink>
            </nav>

            <Search />
        </>
    )
}

export default Navbar;