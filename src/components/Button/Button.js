import React from 'react';

const Button = () => {
  const habdleButton = () => {
    console.log('Clickeaste');
  };
  return (
    <button onClick={() => console.log('Clickeaste')}>My button</button>
  );
};

export default Button;
