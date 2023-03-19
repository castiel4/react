import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cabeçalho from './components/Cabeçalho';
import Rodapé from './components/Rodapé';
import Rotas from './Rotas';

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <Rotas />
      <Rodapé />
    </BrowserRouter>
  );
}

export default App;