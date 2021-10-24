const urlBase = "https://rickandmortyapi.com/api";

export const getCharacterByName = (name = "") =>
  fetch(`${urlBase}/character?${name && `name=${name}`}`).then((res) =>
    res.json()
  );
