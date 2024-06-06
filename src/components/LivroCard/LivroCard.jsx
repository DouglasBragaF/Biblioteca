import PropTypes from 'prop-types';

function LivroCard({ livro }) {
  console.log('Renderizando LivroCard com livro:', livro);
  
  if (!livro) {
    return null;
  }

  const { nome, autores, editora, ano, categoria } = livro;
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{nome}</h3>
      <p><strong>Autores:</strong> {Array.isArray(autores) ? autores.join(', ') : autores}</p>
      <p><strong>Editora:</strong> {editora}</p>
      <p><strong>Ano:</strong> {ano}</p>
      <p><strong>Categoria:</strong> {categoria}</p>
    </div>
  );
}

LivroCard.propTypes = {
  livro: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    autores: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    editora: PropTypes.string.isRequired,
    ano: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    categoria: PropTypes.string.isRequired
  }).isRequired,
};

export default LivroCard;
