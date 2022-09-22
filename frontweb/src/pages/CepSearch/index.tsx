import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type formData = {
  gitProfile: string;
};

type Profile = {
  login: string;
  url: string;
  avatar_url: string;
  followers: string;
  location: string;
  name: string;
};

const CepSearch = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<formData>({
    gitProfile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.gitProfile}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <h1 className="text-title">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="gitProfile"
              value={formData.gitProfile}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {profile && (
        <>
          <div className="container cep-search-result">
            <div className='cep-search-image'>
              <img src={profile.avatar_url} alt="Imagem" />
            </div>
            <div className="cep-search-info">
              <h2>Informações</h2>
              <ResultCard title="Perfil: " description={profile.url} />
              <ResultCard title="Seguidores: " description={profile.followers} />
              <ResultCard title="Localidade: " description={profile.location} />
              <ResultCard title="Nome: " description={profile.name} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CepSearch;
