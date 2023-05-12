import "./formulario.css"
import { useState } from "react"
import validation from "../validation"

function Formulario({ login }) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    //Funciones handles
    const handleChange = (e) => {
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return (
        <section className="formulario_contenedor">
            <img src="logo.png" className="formulario_logo" alt="" />
            <img className="formulario_img" src="./img-form.png" alt="" />
            <form
                className="formulario"
            >
                <label className="label">
                    Email:
                    <input
                        className="formulario_input"
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    {
                        errors.email
                            ? <p>{errors.email1}</p>
                            : errors.email2
                                ? errors.email2
                                : errors.email3
                    }
                </label>
                <label className="label">
                    Password:
                    <input
                        className="formulario_input"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </label>

                {
                    errors.password
                        ? <p>{errors.pass}</p>
                        : errors.pass2
                }

                <button
                    type="submit"
                    className="formulario_btn"
                    onClick={handleSubmit}
                >Submit</button>
            </form>

            <div className="formulario_info">
                <a href="#" className="info_link-crearCuenta">¿Quieres crear una cuenta?</a>
                <a href="#" className="info_link">¿Olvidaste tu contraseña?</a>
            </div>
        </section>
    )
}

export default Formulario