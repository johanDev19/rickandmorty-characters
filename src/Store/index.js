import React, { createContext, useReducer } from 'react';
import Reducer from './../reducer';

const initialStore = {
  characters: null,
  searchValue: '',
};

const Context = createContext(initialStore);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialStore);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export { Store, Context };
