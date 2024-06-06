import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cadastro-leitor">Cadastro de Leitor</NavLink>
        </li>
        <li>
          <NavLink to="/emprestimo">Empréstimo de Livro</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;