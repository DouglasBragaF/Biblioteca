
function LivroCard( livro ) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{livro.nome}</h3>
      <p><strong>Autores:</strong> {livro.autores.join(', ')}</p>
      <p><strong>Editora:</strong> {livro.editora}</p>
      <p><strong>Ano:</strong> {livro.ano}</p>
      <p><strong>Categoria:</strong> {livro.categoria}</p>
    </div>
  );
}

export default LivroCard;
