import './styles.css';

const CepSearch = () => {
  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <h1 className="text-title">Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="container cep-search-result">
        <h1>Teste</h1>
      </div>
    </div>
  );
};

export default CepSearch;
