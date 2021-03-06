import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import { Card } from './components/Card';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacter] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(0);
  // const handleClick = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then(data => data.json())
  //     .then(json => console.log('api: ', json.results));
  //   console.log('api: ', json.results);
  // };
  // const handleClick = async () => {
  //   const data = await fetch('https://rickandmortyapi.com/api/character');
  //   const json = await data.json();
  //   console.log('api: ', json.results);
  // };
  const getCharacter = async () => {
    setIsLoading(true);
    const { data, status } = await await axios('https://rickandmortyapi.com/api/character');
    // console.log('api: ', data.results);
    setCharacter(data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  console.log('data: ', characters);
  console.log('personaje clickeado: ', idPersonaje);

  const getCharacterById = async () => {
    const { data } = await axios(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    console.log(data);
  };
  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  // desestructuracion
  const obj = {
    name: 'David',
    lastName: 'Flores',
  };
  const nombre = obj.name;
  const { name } = obj;
  console.log(name, nombre);

  return (
    <div className="App">
      <h1>React Advanced.</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {
        // isLoading ? <p>Loading...</p> : ""
        // isLoading ? <p>Loading...</p> : null
        // isLoading ? <p>Loading...</p> : <></>
        isLoading && <p>Loading...</p>
      }
      {/* { characters?.map(character => <p key={character.id} >{character.name}</p>) } */}
      {/* <button onClick={handleClick} disabled={isLoading}>Click me!</button> */}
      { characters?.map(character => <Card
        character={character}
        key={character.id}
        getIdPersonaje={getIdPersonaje} />) }
        {/* setIdPersonaje={setIdPersonaje} />) } */}
    </div>
  );
};

export default App;
