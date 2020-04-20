import axios from 'axios';

const urlBase = 'https://rickandmortyapi.com/api';

export const getCharacters = () => axios.get(`${urlBase}/character`).then(res => res.data);