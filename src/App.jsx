import './App.css'
import { Route, Routes } from 'react-router-dom';
import Livros from './pages/Livros';
import Emprestimo from './pages/Emprestimo';
import Leitor from './pages/Leitor';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Livros />} />
        <Route path="/cadastro-leitor" element={<Leitor />} />
        <Route path="/emprestimo" element={<Emprestimo />} />
      </Routes>
    </>
    
  );
}

export default App;
