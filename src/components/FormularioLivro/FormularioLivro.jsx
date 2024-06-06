import { useState } from 'react';
import PropTypes from 'prop-types';
import './FormularioLivro.css';

function FormularioLivro({ onCadastro }) {
  const [livro, setLivro] = useState({
    nome: '',
    autores: [],
    editora: '',
    ano: 0,
    categoria: '',
  });

  FormularioLivro.propTypes = {
    onCadastro: PropTypes.func.isRequired,
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setLivro(prevLivro => ({
      ...prevLivro,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (livro.nome && livro.editora && livro.ano && livro.categoria) {
      onCadastro(livro);
      setLivro({
        nome: '',
        autores: [],
        editora: '',
        ano: 0,
        categoria: '',
      });
    } else {
      console.error('Todos os campos obrigatórios devem ser preenchidos');
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={livro.nome}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Autores:
        <input
          type="text"
          name="autores"
          value={livro.autores}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Editora:
        <input
          type="text"
          name="editora"
          value={livro.editora}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Ano:
        <input
          type="number"
          name="ano"
          value={livro.ano}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Categoria:
        <input
          type="text"
          name="categoria"
          value={livro.categoria}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioLivro;
