import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../Loader"
import "./details.css"

function Deatil() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <>

            {
                !character
                    ? <Loader />
                    :
                    <section className="detalle">
                        <img className="detalle__imagen" src={character.image} alt={`Imagen de ${character.name}`} />
                        <div>
                            <p>Nombre: <span>{character.name}</span></p>
                            <p>Estado: <span>{character.status}</span></p>
                            <p>Especie: <span>{character.species}</span></p>
                            <p>Genero: <span>{character.gender}</span></p>
                            <p>Origen: <span>{character.origin?.name}</span></p>
                        </div>

                    </section>
            }
        </>
    )
}

export default Deatil