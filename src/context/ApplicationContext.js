import React, { useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  characters: null,
  searchValue: "aa",
};

const ApplicationContext = React.createContext(initialState);
const useApplicationContext = () => React.useContext(ApplicationContext);

function ApplicationProvider({ children }) {
  const [characters, setCharacters] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const updateCharacters = (characters) => setCharacters(characters);
  const updateSearchValue = (searchValue) => setSearchValue(searchValue);

  return (
    <ApplicationContext.Provider
      value={{
        searchValue,
        characters,
        actions: {
          updateCharacters,
          updateSearchValue,
        },
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default ApplicationContext;
export { useApplicationContext, ApplicationProvider };
