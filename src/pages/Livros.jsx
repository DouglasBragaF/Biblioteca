import { useState, useEffect } from 'react';
import axios from 'axios';
import LivroCard from '../components/LivroCard/LivroCard';
import FormularioLivro from '../components/FormularioLivro/FormularioLivro';
import Carregando from '../components/Carregando/Carregando';
import Menu from '../components/Menu/Menu';

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
      <Menu />
      {loading ? (
        <Carregando />
        ) : (
          mostrarFormulario ? (
            <FormularioLivro />
            ) : (
          <>
            <h2>Lista de Livros</h2>
            <button onClick={toggleFormulario}>Cadastrar Livro</button>
            <div>
              {livros.map((livro) => (
                <LivroCard key={livro.id} livro={livro} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}


export default Livros;
