const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
