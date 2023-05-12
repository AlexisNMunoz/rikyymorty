import "./Nav/navbar.css"
import { useState } from "react";
function SearchBar({ onSearch }) {

   const [id, setId] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   return (
      <nav className="navbar">
         <input
            className="input"
            type='search'
            value={id}
            onChange={handleChange}
         />

         <button
            className="btnAgregar"
            onClick={() => onSearch(id)}
         >Agregar</button>
      </nav>
   );
}

export default SearchBar
