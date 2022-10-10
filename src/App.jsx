import { FiSearch } from "react-icons/fi" ;
import { useState } from 'react';
import api from './services/api.js';

function App() {
  const [input, setInput ] = useState();
  const [cep, setCep] = useState({});

  async function pesquisar(e) {
    e.preventDefault();

    if(input.length < 1){
      alert("Preencha o campo destinado ao CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro inesperado, tente novamente após 1 minuto!");
      setInput("")
    }

  }

  return (
    <div className="content">
      <div className="pesquisa">

        <h1 className="title">Buscador CEP</h1>
        <form className="forms">
          <input className="input" type="text" placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" type="submit" onClick={pesquisar}>
            <FiSearch /> 
          </button>
        </form>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className="resultado">
          <h2> CEP: {cep.cep} </h2>

          <span> {cep.logradouro} </span>
          <span> {cep.bairro} </span>
          <span> {cep.localidade} - {cep.uf} </span>
        </main>
      )}
      

      </div>
    
  )
}

export default App
