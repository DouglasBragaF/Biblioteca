import { useState, useEffect } from 'react';
import axios from 'axios';
import LivroCard from '../components/LivroCard/LivroCard';
import FormularioLivro from '../components/FormularioLivro/FormularioLivro';

function Livros() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {

    async function fetchLivros() {
      try {
        const response = await axios.get('http://localhost:3000/livros');
        setLivros(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter a lista de livros:', error);
        setLoading(false);
      }
    }

    fetchLivros();
  }, []);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {livros.length > 0 ? (
            livros.map(livro => (
              <LivroCard key={livro.id} livro={livro} />
            ))
          ) : (
            <p>Acervo vazio</p>
          )}
        </div>
      )}
       <button onClick={toggleFormulario}>Cadastrar Livro</button>
       {mostrarFormulario && <FormularioLivro />}
    </div>
  );
}


export default Livros;
