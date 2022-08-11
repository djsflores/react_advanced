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
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [characters, setCharacter] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(1);
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
  // const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
  const dataPersonajes = useFetch('https://rickandmortyapi.com/api/character');
  const dataPersonajeId = useFetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
  // console.log('dataFetch: ', dataFetch);
  // const getCharacter = async () => {
  //   setIsLoading(true);
    // const { data, status } = await axios('https://rickandmortyapi.com/api/character');
    // const { data } = await useFetch('https://rickandmortyapi.com/api/character');
    // console.log('api: ', data.results);
    // const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
    // const { data } = await useFetch('https://rickandmortyapi.com/api/character');
    // setCharacter(data.results);
    // setCharacter(data);
  //   setCharacter(dataFetch.data);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   getCharacter();
  // }, []);
  // }, [data]);
  // console.log('data: ', characters);
  // console.log('personaje clickeado: ', idPersonaje);

  // const getCharacterById = async () => {
  //   const { data } = await axios(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
  //   console.log(data);
  // };
  const getIdPersonaje = (id) => {
    setIdPersonaje(id);
  };

  const getCharacterById = () => {
    // fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
    //   .then(resp => resp.json())
    //   .then(json => console.log(json));
    console.log(dataPersonajeId);
  };

  useEffect(() => {
    getCharacterById();
  }, [idPersonaje]);

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
        // isLoading && <p>Loading...</p>
      }
      { dataPersonajes?.loading && <p>Loading...</p> }
      {/* { characters?.map(character => <p key={character.id} >{character.name}</p>) } */}
      {/* <button onClick={handleClick} disabled={isLoading}>Click me!</button> */}
      {/* { characters?.map(character => <Card */}
      {/* { data?.map(character => <Card */}
      { dataPersonajes?.data?.results.map(character => <Card
        character={character}
        key={character.id}
        getIdPersonaje={getIdPersonaje} />) }
        {/* setIdPersonaje={setIdPersonaje} />) } */}
    </div>
  );
};

export default App;
