import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Deatil from "./components/Details/Deatil"
import Formulario from './components/Formulario/Formulario';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites';
import Abaut from "./components/About/Abaut"

function App() {
   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation()
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   const EMAIL = "alexisnahuelmunioz@gmail.com"
   const PASSWORD = "123qwe"

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const logout = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });


   }
   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <>
         <header className='App'>
            <Nav characters={characters} onSearch={onSearch} pathname={pathname} logout={logout} />
         </header>
         <Routes>
            <Route path='/home'
               element={<Cards
                  characters={characters}
                  onClose={onClose} />}
            />
            <Route path='/detail/:id' element={<Deatil />} />
            <Route path='/' element={<Formulario login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/about' element={<Abaut />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </>
   );
}

export default App;