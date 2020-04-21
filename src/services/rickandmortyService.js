import axios from 'axios';

const urlBase = 'https://rickandmortyapi.com/api';

export const getCharacters = (name = '') =>
  axios
    .get(`${urlBase}/character?${name && `name=${name}`}`)
    .then((res) => res.data);
