import "./card.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions"
import { useState, useEffect } from "react";

function Card(props) {
   const [isFav, setIsFav] = useState(false)

   const { image, onClose, name, status, species, gender, origin, id, addFav, removeFav, myFavorites } = props

   const handleFavorite = () => {
      isFav
         ? removeFav(id)
         : addFav({ image, onClose, name, status, species, gender, origin, id })
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <section className="card_contenedor">
         <img className="card_img" src={image} alt='Imagen de personaje' />
         <div className="card_textos">
            <Link style={{ textDecoration: "none", color: "#000" }} to={`/detail/${id}`}>
               <p>Nombre: <span>{name}</span></p>
            </Link>
            <p>Estado: <span>{status}</span></p>
            <p>Especie: <span>{species}</span></p>
            <p>Genero: <span>{gender}</span></p>
            <p>Origen: <span>{origin}</span></p>
         </div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className="btn_card" onClick={() => onClose(id)}>Eliminar</button>
      </section>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
