import React from 'react';

// const Card = ({ character, setIdPersonaje }) => {
const Card = ({ character, getIdPersonaje }) => {
  const handleClick = () => {
    // setIdPersonaje(character.id);
    getIdPersonaje(character.id);
  };
  return (
    <div className="card" >
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.species}</p>
        <button className="btn btn-primary" onClick={handleClick}>Go somewhere</button>
      </div>
    </div>
  );
};

export default Card;
