import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../api/api';
import LivroCard from '../components/LivroCard/LivroCard';
import FormularioLivro from '../components/FormularioLivro/FormularioLivro';
import Carregando from '../components/Carregando/Carregando';
import Menu from '../components/Menu/Menu';

function Livros() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const location = useLocation();

  useEffect(() => {

    async function fetchLivros() {
      try {
        const response = await api.get('/livros');
        setLivros(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter a lista de livros:', error);
        setLoading(false);
      }
    }

    fetchLivros();
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setMostrarFormulario(false);
    }
  }, [location]);

  const handleCadastro = async (livro) => {
    try {
      const response = await api.post('/livros', livro);
      setLivros([...livros, response.data]);
      setMostrarFormulario(false);
    }
    catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div>
      <Menu />
      <h2>Lista de Livros</h2>
      {!mostrarFormulario && <button onClick={toggleFormulario}>Cadastrar Livro</button>}
      {mostrarFormulario ? (
        <FormularioLivro onCadastro={handleCadastro} />
      ) : (
        <div>
          {loading ? (
            <Carregando />
          ) : (
            livros.length > 0 ? (
              livros.map((livro) => (
                <LivroCard key={livro.id} livro={livro} />
              ))
            ) : (
              <p>Acervo vazio</p>
            )
          )}
        </div>
      )}
    </div>
  );
}


export default Livros;
