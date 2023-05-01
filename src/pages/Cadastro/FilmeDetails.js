import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function FilmeDetails() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}`)
      .then(response => response.json())
      .then(data => setFilme(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={filme.poster} alt={filme.titulo} />
      </div>
      <div className="col-md-8">
        <h1>{filme.titulo} ({filme.ano})</h1>
        <p>{filme.sinopse}</p>
        <p>Nota: {filme.nota}</p>
        <Link to="*">
          <Button variant="danger" className="mt-3">
            Assistir
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FilmeDetails;