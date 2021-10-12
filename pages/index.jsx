import { useEffect, useState } from 'react';
import { Mega } from '../functions/mega';
import NumeroDisplay from '../components/numeroDisplay';

export default function Home() {
  
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumero] = useState([]) // colocar array vazio para não gerar warning

  // Inicializar o joginho com valores válidos
  // Executa uma variação do estado dentro da função useEffect()
  useEffect(() => {
    setNumero(Mega())
  }, [])
  
  function renderNumeros() {
    return numeros.map(n => <NumeroDisplay key={n} numero={n} />)
  }
  return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
          }}
      >
          <img src="assets/images/logo.png" />
          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
              }}
          >
              {renderNumeros()}
          </div>

          <p>Escolha quantos números deseja apostar:</p>
          <input
              type="number"
              min={6}
              max={20}
              value={qtde}
              onChange={(ev) => setQtde(ev.target.value)}
          />
          <p></p>

          <div>
              <button onClick={() => setNumero(Mega(qtde))}>
                  GERAR APOSTA
              </button>
          </div>
      </div>
  );
}
