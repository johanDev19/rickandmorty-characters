const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
