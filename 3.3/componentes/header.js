import React from 'react';
import { Link } from 'react-router-dom';

function Cabeçalho() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabeçalho;