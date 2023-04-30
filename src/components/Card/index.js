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

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setFilmes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {filmes.map(filme => <Card key={filme.id} filme={filme} />)}
      </div>
    </div>
  );
}

export default App;
