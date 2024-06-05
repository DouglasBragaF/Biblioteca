import { Link } from 'react-router-dom';

function BotaoCadastrar() {
  return (
    <Link to="/cadastro-leitor">
      <button className="botao-cadastrar">Cadastrar</button>
    </Link>
  );
}

export default BotaoCadastrar;
