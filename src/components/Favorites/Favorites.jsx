import { connect, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { filterCards, orderCards } from "../../Redux/actions"
import { useState } from "react";

const Favorite = ({ myFavorites }) => {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (e) => {
        filterCards(dispatch(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        orderCards(dispatch(e.target.value))
    }

    return (
        <>
            <select onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            {myFavorites.map((character) => (
                <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin}
                    image={character.image}
                    onClose={character.onClose}
                />
            ))}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorite);