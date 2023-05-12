import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"

function Nav({ onSearch, pathname, characters, logout }) {
    return (
        <>
            {pathname !== '/' ?
                <>
                    <SearchBar characters={characters} onSearch={onSearch} />
                    <nav className="navegation">
                        <Link className="links" to="/home">Home</Link>
                        <Link className="links" to="/favorites">Favorites</Link>
                        <Link className="links" to="/about">About</Link>
                        <Link
                            className="links__logout"
                            to="/"
                            onClick={logout}
                        >Logout</Link>
                    </nav>
                </>
                : null}
        </>
    )
}

export default Nav