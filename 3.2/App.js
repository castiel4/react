import { useState, useEffect } from "react";

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setcount(count + 1)}>
        Clique aqui
      </button>
      {/* Para diminuir, é só colocar count - 1 */}
    </div>
  );
}

export default App
