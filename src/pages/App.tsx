import React from 'react';
import Lista from '../components/Lista';
import Formulario from '../components/Formulario';
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <Formulario/>
      <Lista></Lista>
    </div>
  );
}

export default App;
