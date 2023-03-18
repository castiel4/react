import { useState, useEffect } from "react";
function App () {
  const [ count, settcount ] = useState ( 0 );

  useEffect (() => {
    Document.title = 'voce clicou ${count} vezes';

  });
  retornar  (
    <div>
    <p> voce clicou {conte} vezes </p>
    <botao onClick = { ( ) => settcount (contagem + 1) } >
      clique aqui
      </botao>
      { /* para diminuir é so colocar count -1 */}

    </div>
  ) ;
  {
exportar aplicativo padrao ;
  } 
   