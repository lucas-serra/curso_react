import React from 'react';
import Lista from '../components/Lista';
import Formulario from '../components/Formulario';
import style from'./App.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
