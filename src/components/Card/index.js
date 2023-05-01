import { useEffect, useState } from 'react';

function Card({ filme }) {
  const [assistido, setAssistido] = useState(false);

  const handleAssistido = () => {
    setAssistido(!assistido);
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{filme.titulo} ({filme.ano})</h5>
          <p className="card-text">{filme.sinopse}</p>
          <p className="card-text">Nota: {filme.nota}</p>
          <button onClick={handleAssistido} className="btn btn-sm btn-primary">{assistido ? 'Assistido ✔' : 'Assistir Novamente'}</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [filmes, setFilmes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ordenacao, setOrdenacao] = useState('default');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setFilmes(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFilmes = filmes
    .filter((filme) => filme.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (ordenacao === 'titulo') {
        return a.titulo.localeCompare(b.titulo);
      } else if (ordenacao === 'nota') {
        return b.nota - a.nota;
      } else if (ordenacao === 'ano-asc') {
        return a.ano - b.ano;
      } else if (ordenacao === 'ano-desc') {
        return b.ano - a.ano;
      }
      return 0;
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-3">
          <input type="text" placeholder="Pesquisar filmes" onChange={handleSearchChange} value={searchTerm} />
          <select value={ordenacao} onChange={(event) => setOrdenacao(event.target.value)}>
            <option value="default">Ordem original</option>
            <option value="titulo">Ordem alfabética</option>
            <option value="nota">Ordem por nota (maior para menor)</option>
            <option value="ano-asc">Ordem por ano de lançamento (mais antigos primeiro)</option>
            <option value="ano-desc">Ordem por ano de lançamento (mais recentes primeiro)</option>
          </select>
        </div>
        {filteredFilmes.map(filme => <Card key={filme.id} filme={filme} />)}
      </div>
    </div>
  );
}

export default App;