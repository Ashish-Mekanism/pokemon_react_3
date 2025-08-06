import axios from 'axios';

export const getAllPokemon = (
  token: string,
  url = 'http://localhost:5000/v3/pokemon'
) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
